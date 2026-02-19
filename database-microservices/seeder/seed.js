'use strict';

const { MongoClient, ObjectId } = require('mongodb');
const bcrypt = require('bcryptjs');

// ── Pre-defined fixed IDs (24-char hex, consistent across all 5 databases) ──
const USER = {
  Juan:   "aaa000000000000000000001",
  Sean:   "aaa000000000000000000002",
  Ethan:  "aaa000000000000000000003",
  Mia:    "aaa000000000000000000004",
  Carlos: "aaa000000000000000000005",
  Priya:  "aaa000000000000000000006",
};

const CAL = {
  wizards:       "bbb000000000000000000001",
  revatureTeam2: "bbb000000000000000000002",
  seanWork:      "bbb000000000000000000003",
  seanJuggling:  "bbb000000000000000000004",
  seanFamily:    "bbb000000000000000000005",
  seanFriends:   "bbb000000000000000000006",
  ethanWork:     "bbb000000000000000000007",
  ethanFamily:   "bbb000000000000000000008",
  ethanFriends:  "bbb000000000000000000009",
  ethanBowling:  "bbb00000000000000000000a",
};

// ── Helpers ──────────────────────────────────────────────────────────────────
function generateToken() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function dtLocal(isoLocalNoOffset) {
  return new Date(isoLocalNoOffset + "-06:00");
}

function pad2(n) { return n < 10 ? "0" + n : "" + n; }

function isoLocal(dateObj, hh, mm) {
  const y = dateObj.getFullYear();
  const m = pad2(dateObj.getMonth() + 1);
  const d = pad2(dateObj.getDate());
  return `${y}-${m}-${d}T${pad2(hh)}:${pad2(mm)}:00`;
}

function isWeekday(d) { const day = d.getDay(); return day >= 1 && day <= 5; }
function isWednesday(d) { return d.getDay() === 3; }

function sameYMD(d, y, m, day) {
  return d.getFullYear() === y && (d.getMonth() + 1) === m && d.getDate() === day;
}

function iterateDates(start, end, fn) {
  const d = new Date(start.getTime());
  while (d <= end) { fn(new Date(d.getTime())); d.setDate(d.getDate() + 1); }
}

// ── Event builder ─────────────────────────────────────────────────────────────
const now = new Date();
const oneWeekLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

function ev(calendarId, title, startLocal, endLocal, description, tags, notes, includeInvite) {
  return {
    calendarId,
    title,
    startTime: typeof startLocal === 'string' ? dtLocal(startLocal) : dtLocal(isoLocal(startLocal, 0, 0)),
    endTime:   typeof endLocal   === 'string' ? dtLocal(endLocal)   : dtLocal(isoLocal(endLocal,   0, 0)),
    description: description || "",
    notes: notes || "",
    tags: tags || [],
    inviteLinks: includeInvite
      ? [{ token: generateToken(), createdAt: now, expiresAt: oneWeekLater }]
      : [],
  };
}

function evT(calendarId, title, startStr, endStr, description, tags, notes, includeInvite) {
  return {
    calendarId,
    title,
    startTime: dtLocal(startStr),
    endTime:   dtLocal(endStr),
    description: description || "",
    notes: notes || "",
    tags: tags || [],
    inviteLinks: includeInvite
      ? [{ token: generateToken(), createdAt: now, expiresAt: oneWeekLater }]
      : [],
  };
}

function buildEvents() {
  const events = [];
  const startRange = new Date("2026-01-01T00:00:00-06:00");
  const endRange   = new Date("2026-03-31T23:59:59-06:00");

  const NBA_TEAMS = [
    "Mavericks","Bulls","Hornets","Lakers","Celtics","Heat","Spurs","Raptors",
    "Suns","Clippers","Warriors","Kings","Pacers","Hawks","Knicks","Nets",
    "Pistons","Magic","Rockets","Grizzlies",
  ];
  const randomOpponent = () => NBA_TEAMS[Math.floor(Math.random() * NBA_TEAMS.length)];

  // Revature presentation
  events.push(evT(CAL.revatureTeam2, "CalendarIO Presentation",
    "2026-02-02T14:00:00", "2026-02-02T15:00:00",
    "Project presentation and demo for Cognizant.", ["work","presentation"], "", false));

  // ── Basketball - Wizards ──
  iterateDates(startRange, endRange, d => {
    if (sameYMD(d, 2026, 2, 7)) return;
    const dow = d.getDay();

    if (dow === 2) events.push(evT(CAL.wizards, "Practice",
      isoLocal(d,18,0), isoLocal(d,19,30),
      "Team practice: drills + sets.", ["basketball","practice"], "Bring reversible jerseys.", false));

    if (dow === 4) events.push(evT(CAL.wizards, "Practice",
      isoLocal(d,18,0), isoLocal(d,19,30),
      "Team practice: scrimmage + conditioning.", ["basketball","conditioning"], "Hydrate beforehand.", false));

    if (dow === 0) events.push(evT(CAL.wizards, "Practice",
      isoLocal(d,10,0), isoLocal(d,11,30),
      "Weekend practice session.", ["basketball","practice"], "Focus: spacing + defense.", false));

    if (dow === 6 && !sameYMD(d,2026,2,14)) {
      events.push(evT(CAL.wizards, `Pickup Game vs ${randomOpponent()}`,
        isoLocal(d,9,0), isoLocal(d,11,0),
        "Weekend run.", ["basketball","pickup"], "First to 11, win by 2.", true));
    }

    if (dow === 0) events.push(evT(CAL.wizards, "Pickup Game",
      isoLocal(d,7,30), isoLocal(d,9,0),
      "Sunday early run.", ["basketball","pickup"], "Bring both light/dark.", false));

    if (sameYMD(d,2026,2,6)) events.push(evT(CAL.wizards, "Extra Pickup Game",
      isoLocal(d,19,0), isoLocal(d,21,0),
      "Extra run this week (keeps Feb 7 open).", ["basketball","pickup"],
      "Added because Feb 7 is intentionally empty.", true));
  });

  // Feb 14 Nuggets game
  events.push(evT(CAL.wizards, "Pickup Game vs Nuggets",
    "2026-02-14T09:00:00", "2026-02-14T11:00:00",
    "Scheduled matchup vs Nuggets", ["basketball","pickup"], "", true));

  // ── Work events ──
  iterateDates(startRange, endRange, d => {
    if (!isWeekday(d)) return;
    events.push(evT(CAL.seanWork,  "Workday", isoLocal(d,9,0), isoLocal(d,17,0), "Daily work block.", ["work"], "", false));
    events.push(evT(CAL.ethanWork, "Workday", isoLocal(d,9,0), isoLocal(d,17,0), "Daily work block.", ["work"], "", false));
    if (d.getDay() === 1) {
      events.push(evT(CAL.seanWork,  "Team Sync",      isoLocal(d,16,0), isoLocal(d,17,0), "Weekly wrap-up sync.",    ["work","meeting"],  "Short updates.",       false));
      events.push(evT(CAL.ethanWork, "Planning Block",  isoLocal(d,15,0), isoLocal(d,16,0), "Weekly planning block.", ["work","planning"], "Review priorities.",   false));
    }
  });

  // ── Sean juggling practices ──
  iterateDates(startRange, endRange, d => {
    const day = d.getDay();
    if (isWeekday(d) && (day === 1 || day === 3 || day === 5)) {
      events.push(evT(CAL.seanJuggling, "Juggling Practice",
        isoLocal(d,18,0), isoLocal(d,19,30),
        "Technique drills + routine practice.", ["juggling","practice"],
        "Focus: clean catches + transitions.", false));
    }
  });

  // ── Sean juggling gigs (1st & 3rd Saturday each month) ──
  function addMonthlyGigs(monthIndex) {
    const monthStart = new Date(2026, monthIndex, 1);
    const monthEnd   = new Date(2026, monthIndex + 1, 0);
    const saturdays  = [];
    iterateDates(monthStart, monthEnd, d => {
      if (d.getMonth() !== monthIndex) return;
      if (d.getDay() === 6) saturdays.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
    });
    [0, 2].forEach(idx => {
      if (!saturdays[idx]) return;
      const sd = saturdays[idx];
      if (sameYMD(sd, 2026, 2, 7)) return;
      events.push(evT(CAL.seanJuggling, "Paid Juggling Gig",
        isoLocal(sd,10,0), isoLocal(sd,12,0),
        "Paid performance gig.", ["juggling","gig"],
        "Bring full prop kit + backup clubs.", true));
    });
  }
  addMonthlyGigs(0); addMonthlyGigs(1); addMonthlyGigs(2);

  // ── Ethan bowling ──
  iterateDates(startRange, endRange, d => {
    if (!isWeekday(d) || !isWednesday(d)) return;
    events.push(evT(CAL.ethanBowling, "Bowling Night",
      isoLocal(d,19,0), isoLocal(d,21,0),
      "Weekly bowling night.", ["bowling","league"], "Meet at lanes 10 minutes early.", false));
  });

  // ── Family + Friends ──
  function addMonthlySocial(who, monthIndex) {
    const monthStart = new Date(2026, monthIndex, 1);
    const monthEnd   = new Date(2026, monthIndex + 1, 0);
    const tuesdays = [], thursdays = [], sundays = [], saturdays = [];
    iterateDates(monthStart, monthEnd, d => {
      if (d.getMonth() !== monthIndex) return;
      if (d.getDay() === 2) tuesdays.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
      if (d.getDay() === 4) thursdays.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
      if (d.getDay() === 0) sundays.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
      if (d.getDay() === 6) saturdays.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
    });

    if (who === "Sean") {
      tuesdays.slice(0,3).forEach((d,i) => events.push(evT(CAL.seanFamily,
        i%2===0 ? "Family Dinner" : "Family Call",
        isoLocal(d,20,0), isoLocal(d,21,0), "Family time.",
        ["family", i%2===0 ? "dinner" : "check-in"], "", false)));
      sundays.slice(0,2).forEach(d => events.push(evT(CAL.seanFamily, "Family Brunch",
        isoLocal(d,9,0), isoLocal(d,10,0), "Weekend family brunch.", ["family","weekend"], "", false)));
      thursdays.slice(0,3).forEach((d,i) => events.push(evT(CAL.seanFriends,
        i%2===0 ? "Friends Hangout" : "Game Night",
        isoLocal(d,19,0), isoLocal(d,21,0), "Friends time.", ["friends","social"], "", false)));
      saturdays.slice(0,2).forEach(d => events.push(evT(CAL.seanFriends, "Weekend Coffee",
        isoLocal(d,8,0), isoLocal(d,9,0), "Coffee catch-up.", ["friends","weekend"], "", false)));
    }

    if (who === "Ethan") {
      tuesdays.slice(0,3).forEach((d,i) => events.push(evT(CAL.ethanFamily,
        i%2===0 ? "Family Visit" : "Family Dinner",
        isoLocal(d,19,0), isoLocal(d,20,0), "Family time.",
        ["family", i%2===0 ? "visit" : "dinner"], "", false)));
      sundays.slice(0,2).forEach(d => events.push(evT(CAL.ethanFamily, "Weekend Family Brunch",
        isoLocal(d,8,0), isoLocal(d,9,0), "Weekend brunch.", ["family","weekend"], "", false)));
      thursdays.slice(0,3).forEach((d,i) => events.push(evT(CAL.ethanFriends,
        i%2===0 ? "Friends Dinner" : "Friends Hangout",
        isoLocal(d,19,0), isoLocal(d,21,0), "Friends time.", ["friends","social"], "", false)));
      saturdays.slice(0,2).forEach(d => events.push(evT(CAL.ethanFriends, "Weekend Coffee",
        isoLocal(d,7,0), isoLocal(d,8,0), "Coffee catch-up.", ["friends","weekend"], "", false)));
    }
  }
  [0,1,2].forEach(m => { addMonthlySocial("Sean", m); addMonthlySocial("Ethan", m); });

  return events;
}

// ── Connection helper (retries until the container is ready) ─────────────────
async function connectWithRetry(url, label) {
  for (let i = 1; i <= 15; i++) {
    try {
      const client = new MongoClient(url);
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log(`  Connected to ${label}`);
      return client;
    } catch {
      console.log(`  Waiting for ${label} (attempt ${i}/15)...`);
      await new Promise(r => setTimeout(r, 3000));
    }
  }
  throw new Error(`Could not connect to ${label}`);
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log("=== Calendario Database Seeder ===\n");

  console.log("Hashing passwords with BCrypt...");
  const hashedPw = await bcrypt.hash("password", 10);

  // ── 1. Calendars ──────────────────────────────────────────────────────────
  console.log("\n[1/5] Seeding calendars (mongo-calendars)...");
  const calClient = await connectWithRetry("mongodb://mongo-calendars:27017", "mongo-calendars");
  const calDb = calClient.db("calendario-calendars");
  await calDb.collection("calendars").drop().catch(() => {});
  await calDb.collection("calendars").createIndex({ "invites.link": 1 });
  await calDb.collection("calendars").insertMany([
    { _id: new ObjectId(CAL.wizards),       name: "Basketball - Wizards", invites: [{ link: generateToken(), expiresAt: oneWeekLater }], createdAt: now, updatedAt: now },
    { _id: new ObjectId(CAL.revatureTeam2), name: "Revature - Team 2",    invites: [],                                                   createdAt: now, updatedAt: now },
    { _id: new ObjectId(CAL.seanWork),      name: "Sean - Work",          invites: [],                                                   createdAt: now, updatedAt: now },
    { _id: new ObjectId(CAL.seanJuggling),  name: "Sean - Juggling",      invites: [],                                                   createdAt: now, updatedAt: now },
    { _id: new ObjectId(CAL.seanFamily),    name: "Sean - Family",        invites: [],                                                   createdAt: now, updatedAt: now },
    { _id: new ObjectId(CAL.seanFriends),   name: "Sean - Friends",       invites: [],                                                   createdAt: now, updatedAt: now },
    { _id: new ObjectId(CAL.ethanWork),     name: "Ethan - Work",         invites: [],                                                   createdAt: now, updatedAt: now },
    { _id: new ObjectId(CAL.ethanFamily),   name: "Ethan - Family",       invites: [],                                                   createdAt: now, updatedAt: now },
    { _id: new ObjectId(CAL.ethanFriends),  name: "Ethan - Friends",      invites: [],                                                   createdAt: now, updatedAt: now },
    { _id: new ObjectId(CAL.ethanBowling),  name: "Ethan - Bowling",      invites: [],                                                   createdAt: now, updatedAt: now },
  ]);
  console.log(`  Inserted ${await calDb.collection("calendars").countDocuments()} calendars`);
  await calClient.close();

  // ── 2. Users ──────────────────────────────────────────────────────────────
  console.log("\n[2/5] Seeding users (mongo-users)...");
  const usersClient = await connectWithRetry("mongodb://mongo-users:27017", "mongo-users");
  const usersDb = usersClient.db("calendario-users");
  await usersDb.collection("users").drop().catch(() => {});
  await usersDb.collection("users").createIndex({ username: 1 }, { unique: true });
  await usersDb.collection("users").createIndex({ email: 1 }, { unique: true });
  await usersDb.collection("users").createIndex({ "calendarIds.calendarId": 1 });
  await usersDb.collection("users").insertMany([
    {
      _id: new ObjectId(USER.Juan), username: "Juan", email: "juan@example.com",
      isSuperuser: true,
      calendarIds: [{ calendarId: CAL.wizards, isAdmin: true }],
    },
    {
      _id: new ObjectId(USER.Sean), username: "Sean", email: "sean@example.com",
      isSuperuser: false,
      calendarIds: [
        { calendarId: CAL.wizards,       isAdmin: true },
        { calendarId: CAL.revatureTeam2, isAdmin: true },
        { calendarId: CAL.seanWork,      isAdmin: true },
        { calendarId: CAL.seanJuggling,  isAdmin: true },
        { calendarId: CAL.seanFamily,    isAdmin: true },
        { calendarId: CAL.seanFriends,   isAdmin: true },
      ],
    },
    {
      _id: new ObjectId(USER.Ethan), username: "Ethan", email: "ethan@example.com",
      isSuperuser: false,
      calendarIds: [
        { calendarId: CAL.wizards,       isAdmin: true  },
        { calendarId: CAL.revatureTeam2, isAdmin: false },
        { calendarId: CAL.ethanWork,     isAdmin: true  },
        { calendarId: CAL.ethanFamily,   isAdmin: true  },
        { calendarId: CAL.ethanFriends,  isAdmin: true  },
        { calendarId: CAL.ethanBowling,  isAdmin: true  },
      ],
    },
    { _id: new ObjectId(USER.Mia),    username: "Mia",    email: "mia@example.com",    isSuperuser: false, calendarIds: [{ calendarId: CAL.wizards, isAdmin: false }] },
    { _id: new ObjectId(USER.Carlos), username: "Carlos", email: "carlos@example.com", isSuperuser: false, calendarIds: [{ calendarId: CAL.wizards, isAdmin: false }] },
    { _id: new ObjectId(USER.Priya),  username: "Priya",  email: "priya@example.com",  isSuperuser: false, calendarIds: [{ calendarId: CAL.wizards, isAdmin: false }] },
  ]);
  console.log(`  Inserted ${await usersDb.collection("users").countDocuments()} users`);
  await usersClient.close();

  // ── 3. Auth credentials ───────────────────────────────────────────────────
  console.log("\n[3/5] Seeding auth credentials (mongo-auth)...");
  const authClient = await connectWithRetry("mongodb://mongo-auth:27017", "mongo-auth");
  const authDb = authClient.db("calendario-auth");
  await authDb.collection("credentials").drop().catch(() => {});
  await authDb.collection("credentials").createIndex({ username: 1 }, { unique: true });
  await authDb.collection("credentials").createIndex({ email:    1 }, { unique: true });
  await authDb.collection("credentials").createIndex({ userId:   1 }, { unique: true });
  await authDb.collection("credentials").insertMany([
    { username: "Juan",   email: "juan@example.com",   password: hashedPw, userId: USER.Juan,   createdAt: now, updatedAt: now },
    { username: "Sean",   email: "sean@example.com",   password: hashedPw, userId: USER.Sean,   createdAt: now, updatedAt: now },
    { username: "Ethan",  email: "ethan@example.com",  password: hashedPw, userId: USER.Ethan,  createdAt: now, updatedAt: now },
    { username: "Mia",    email: "mia@example.com",    password: hashedPw, userId: USER.Mia,    createdAt: now, updatedAt: now },
    { username: "Carlos", email: "carlos@example.com", password: hashedPw, userId: USER.Carlos, createdAt: now, updatedAt: now },
    { username: "Priya",  email: "priya@example.com",  password: hashedPw, userId: USER.Priya,  createdAt: now, updatedAt: now },
  ]);
  console.log(`  Inserted ${await authDb.collection("credentials").countDocuments()} credentials`);
  await authClient.close();

  // ── 4. Events ─────────────────────────────────────────────────────────────
  console.log("\n[4/5] Seeding events (mongo-events)...");
  const eventsClient = await connectWithRetry("mongodb://mongo-events:27017", "mongo-events");
  const eventsDb = eventsClient.db("calendario-events");
  await eventsDb.collection("events").drop().catch(() => {});
  await eventsDb.collection("events").createIndex({ calendarId: 1 });
  await eventsDb.collection("events").createIndex({ tags: 1 });
  await eventsDb.collection("events").createIndex({ "inviteLinks.token": 1 });
  const events = buildEvents();
  await eventsDb.collection("events").insertMany(events);
  console.log(`  Inserted ${await eventsDb.collection("events").countDocuments()} events`);
  await eventsClient.close();

  // ── 5. Polls ──────────────────────────────────────────────────────────────
  console.log("\n[5/5] Seeding polls (mongo-polls)...");
  const pollsClient = await connectWithRetry("mongodb://mongo-polls:27017", "mongo-polls");
  const pollsDb = pollsClient.db("calendario-polls");
  await pollsDb.collection("polls").drop().catch(() => {});
  await pollsDb.collection("polls").createIndex({ calendarId: 1 });
  await pollsDb.collection("polls").createIndex({ tags: 1 });
  await pollsDb.collection("polls").insertMany([
    {
      calendarId: CAL.wizards,
      title: "Move pickup game vs Nuggets?",
      description: "Vote to keep the pickup game on Sat Feb 14 or move it to Sat Feb 7.",
      notes: "After Sean votes for Feb 7, Feb 7 wins.",
      startTime: dtLocal("2026-02-01T09:00:00"),
      endTime:   dtLocal("2026-02-06T21:00:00"),
      resultsVisible: true, allowMultipleVotes: false,
      tags: ["basketball","scheduling"],
      inviteLinks: [{ token: generateToken(), createdAt: now, expiresAt: oneWeekLater }],
      optionsList: [
        { optionId: 0, description: "Keep: Saturday Feb 14",  userVotes: [USER.Carlos, USER.Priya], guestVotes: [] },
        { optionId: 1, description: "Move to: Saturday Feb 7", userVotes: [USER.Ethan, USER.Mia],   guestVotes: [] },
      ],
    },
    {
      calendarId: CAL.seanJuggling,
      title: "Pick next juggling routine theme",
      description: "Choose what to focus on for next week's practice set.",
      notes: "Just a quick self-poll.",
      startTime: dtLocal("2026-01-05T18:00:00"),
      endTime:   dtLocal("2026-01-09T21:00:00"),
      resultsVisible: true, allowMultipleVotes: false,
      tags: ["juggling","planning"],
      inviteLinks: [],
      optionsList: [
        { optionId: 0, description: "Speed + endurance",          userVotes: [USER.Sean], guestVotes: [] },
        { optionId: 1, description: "New trick: behind-the-back", userVotes: [],          guestVotes: [] },
        { optionId: 2, description: "Routine cleanup",            userVotes: [],          guestVotes: [] },
      ],
    },
    {
      calendarId: CAL.ethanBowling,
      title: "Bowling focus this month",
      description: "What should we focus on during practice?",
      notes: "",
      startTime: dtLocal("2026-02-02T19:00:00"),
      endTime:   dtLocal("2026-02-06T21:00:00"),
      resultsVisible: true, allowMultipleVotes: false,
      tags: ["bowling","practice"],
      inviteLinks: [],
      optionsList: [
        { optionId: 0, description: "Spare shooting",        userVotes: [USER.Ethan], guestVotes: [] },
        { optionId: 1, description: "Approach consistency",  userVotes: [],           guestVotes: [] },
      ],
    },
    {
      calendarId: CAL.wizards,
      title: "Post-game hangout plan",
      description: "Sean + Ethan: pick what to do after the next pickup game.",
      notes: "Results visible.",
      startTime: dtLocal("2026-03-05T19:00:00"),
      endTime:   dtLocal("2026-03-10T21:00:00"),
      resultsVisible: true, allowMultipleVotes: false,
      tags: ["friends","planning"],
      inviteLinks: [{ token: generateToken(), createdAt: now, expiresAt: oneWeekLater }],
      optionsList: [
        { optionId: 0, description: "Pizza",          userVotes: [USER.Sean],  guestVotes: [] },
        { optionId: 1, description: "Burgers",        userVotes: [USER.Ethan], guestVotes: [] },
        { optionId: 2, description: "Call it a night", userVotes: [],           guestVotes: [] },
      ],
    },
    {
      calendarId: CAL.wizards,
      title: "New practice time preference",
      description: "Should we keep Tue/Thu evening practice times or adjust?",
      notes: "",
      startTime: dtLocal("2026-01-12T18:00:00"),
      endTime:   dtLocal("2026-01-16T21:00:00"),
      resultsVisible: true, allowMultipleVotes: true,
      tags: ["basketball","planning"],
      inviteLinks: [],
      optionsList: [
        { optionId: 0, description: "Keep Tue/Thu 6pm",        userVotes: [USER.Sean],  guestVotes: [] },
        { optionId: 1, description: "Move to Mon/Wed 7pm",     userVotes: [USER.Ethan], guestVotes: [] },
        { optionId: 2, description: "Weekend mornings only",   userVotes: [],           guestVotes: [] },
      ],
    },
  ]);
  console.log(`  Inserted ${await pollsDb.collection("polls").countDocuments()} polls`);
  await pollsClient.close();

  console.log("\n========== Seed Complete ==========");
  console.log("Users seeded (password: \"password\" for all):");
  console.log("  Sean   / sean@example.com");
  console.log("  Ethan  / ethan@example.com");
  console.log("  Juan   / juan@example.com");
  console.log("  Mia    / mia@example.com");
  console.log("  Carlos / carlos@example.com");
  console.log("  Priya  / priya@example.com");
  console.log("===================================\n");
}

main().catch(err => { console.error(err); process.exit(1); });
