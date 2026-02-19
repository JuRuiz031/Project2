// Initialize and seed calendario-events database
db = db.getSiblingDB('calendario-events');

db.createCollection('events');
db.events.createIndex({ calendarId: 1 });
db.events.createIndex({ tags: 1 });
db.events.createIndex({ 'inviteLinks.token': 1 });

// ─── Fixed calendar ObjectId strings (must match 03-calendars-db.js) ───
const CAL = {
  wizards:       'aaa000000000000000000001',
  revatureTeam2: 'aaa000000000000000000002',
  seanWork:      'aaa000000000000000000003',
  seanJuggling:  'aaa000000000000000000004',
  seanFamily:    'aaa000000000000000000005',
  seanFriends:   'aaa000000000000000000006',
  ethanWork:     'aaa000000000000000000007',
  ethanFamily:   'aaa000000000000000000008',
  ethanFriends:  'aaa000000000000000000009',
  ethanBowling:  'aaa00000000000000000000a',
};

// ─── Helpers ────────────────────────────────────────────────────────────
function generateToken() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0;
    var v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function dtLocal(isoLocalNoOffset) {
  return new Date(isoLocalNoOffset + '-06:00');
}

function pad2(n) {
  return n < 10 ? '0' + n : '' + n;
}

function isoLocal(dateObj, hh, mm) {
  var y = dateObj.getFullYear();
  var m = pad2(dateObj.getMonth() + 1);
  var d = pad2(dateObj.getDate());
  var H = pad2(hh);
  var M = pad2(mm);
  return y + '-' + m + '-' + d + 'T' + H + ':' + M + ':00';
}

function isWeekday(dateObj) {
  var day = dateObj.getDay();
  return day >= 1 && day <= 5;
}

function isWednesday(dateObj) {
  return dateObj.getDay() === 3;
}

function sameYMD(d, y, m, day) {
  return d.getFullYear() === y && (d.getMonth() + 1) === m && d.getDate() === day;
}

function iterateDatesInclusive(start, end, fn) {
  var d = new Date(start.getTime());
  while (d <= end) {
    fn(new Date(d.getTime()));
    d.setDate(d.getDate() + 1);
  }
}

var eventNow = new Date();
var eventOneWeekLater = new Date(eventNow.getTime() + 7 * 24 * 60 * 60 * 1000);

function ev(calendarId, title, startLocal, endLocal, description, tags, notes, includeInvite) {
  return {
    calendarId: calendarId,
    title: title,
    startTime: dtLocal(startLocal),
    endTime: dtLocal(endLocal),
    description: description || '',
    notes: notes || '',
    tags: tags || [],
    inviteLinks: includeInvite ? [{ token: generateToken(), createdAt: eventNow, expiresAt: eventOneWeekLater }] : [],
  };
}

// ─── Generate events ────────────────────────────────────────────────────
var events = [];
var startRange = new Date('2026-01-01T00:00:00-06:00');
var endRange = new Date('2026-03-31T23:59:59-06:00');

var NBA_TEAMS = [
  'Mavericks', 'Bulls', 'Hornets', 'Lakers', 'Celtics',
  'Heat', 'Spurs', 'Raptors', 'Suns', 'Clippers',
  'Warriors', 'Kings', 'Pacers', 'Hawks', 'Knicks',
  'Nets', 'Pistons', 'Magic', 'Rockets', 'Grizzlies',
];

function randomOpponent() {
  return NBA_TEAMS[Math.floor(Math.random() * NBA_TEAMS.length)];
}

// Revature presentation
events.push(
  ev(CAL.revatureTeam2, 'CalendarIO Presentation', '2026-02-02T14:00:00', '2026-02-02T15:00:00',
     'Project presentation and demo for Cognizant.', ['work', 'presentation'], '', false)
);

// ── A) Basketball - Wizards repeating schedule (Jan/Feb/Mar 2026) ──────
// Practices: Tue 18–19:30, Thu 18–19:30, Sun 10–11:30
// Pickups: Sat 09–11 (skip Feb 7 & Feb 14), Sun 07:30–09:00
// Extra pickup Fri Feb 6
// No events on Feb 7
iterateDatesInclusive(startRange, endRange, function (d) {
  if (sameYMD(d, 2026, 2, 7)) return;

  var dow = d.getDay();

  // Practices
  if (dow === 2) {
    events.push(ev(CAL.wizards, 'Practice', isoLocal(d, 18, 0), isoLocal(d, 19, 30),
      'Team practice: drills + sets.', ['basketball', 'practice'], 'Bring reversible jerseys.', false));
  }
  if (dow === 4) {
    events.push(ev(CAL.wizards, 'Practice', isoLocal(d, 18, 0), isoLocal(d, 19, 30),
      'Team practice: scrimmage + conditioning.', ['basketball', 'conditioning'], 'Hydrate beforehand.', false));
  }
  if (dow === 0) {
    events.push(ev(CAL.wizards, 'Practice', isoLocal(d, 10, 0), isoLocal(d, 11, 30),
      'Weekend practice session.', ['basketball', 'practice'], 'Focus: spacing + defense.', false));
  }

  // Pickup games (Sat, skip Feb 7 and Feb 14)
  if (dow === 6) {
    if (!sameYMD(d, 2026, 2, 7) && !sameYMD(d, 2026, 2, 14)) {
      events.push(ev(CAL.wizards, 'Pickup Game vs ' + randomOpponent(), isoLocal(d, 9, 0), isoLocal(d, 11, 0),
        'Weekend run.', ['basketball', 'pickup'], 'First to 11, win by 2.', true));
    }
  }
  if (dow === 0) {
    events.push(ev(CAL.wizards, 'Pickup Game', isoLocal(d, 7, 30), isoLocal(d, 9, 0),
      'Sunday early run.', ['basketball', 'pickup'], 'Bring both light/dark.', false));
  }

  // Extra pickup on Fri Feb 6
  if (sameYMD(d, 2026, 2, 6)) {
    events.push(ev(CAL.wizards, 'Extra Pickup Game', isoLocal(d, 19, 0), isoLocal(d, 21, 0),
      'Extra run this week (keeps Feb 7 open).', ['basketball', 'pickup'], 'Added because Feb 7 is intentionally empty.', true));
  }
});

// Pickup game vs Nuggets on Feb 14
events.push(ev(CAL.wizards, 'Pickup Game vs Nuggets', '2026-02-14T09:00:00', '2026-02-14T11:00:00',
  'Scheduled matchup vs Nuggets', ['basketball', 'pickup'], '', true));

// ── B) Work events: every weekday Jan/Feb/Mar for Sean + Ethan ─────────
iterateDatesInclusive(startRange, endRange, function (d) {
  if (!isWeekday(d)) return;

  events.push(ev(CAL.seanWork, 'Workday', isoLocal(d, 9, 0), isoLocal(d, 17, 0),
    'Daily work block.', ['work'], '', false));
  events.push(ev(CAL.ethanWork, 'Workday', isoLocal(d, 9, 0), isoLocal(d, 17, 0),
    'Daily work block.', ['work'], '', false));

  if (d.getDay() === 1) {
    events.push(ev(CAL.seanWork, 'Team Sync', isoLocal(d, 16, 0), isoLocal(d, 17, 0),
      'Weekly wrap-up sync.', ['work', 'meeting'], 'Short updates.', false));
    events.push(ev(CAL.ethanWork, 'Planning Block', isoLocal(d, 15, 0), isoLocal(d, 16, 0),
      'Weekly planning block.', ['work', 'planning'], 'Review priorities.', false));
  }
});

// ── C) Sean juggling: 3 practices/week + 2 paid gigs/month ────────────
iterateDatesInclusive(startRange, endRange, function (d) {
  var day = d.getDay();
  if (isWeekday(d) && (day === 1 || day === 3 || day === 5)) {
    events.push(ev(CAL.seanJuggling, 'Juggling Practice', isoLocal(d, 18, 0), isoLocal(d, 19, 30),
      'Technique drills + routine practice.', ['juggling', 'practice'], 'Focus: clean catches + transitions.', false));
  }
});

function addMonthlyGigs(monthIndex) {
  var y = 2026;
  var monthStart = new Date(y, monthIndex, 1);
  var monthEnd = new Date(y, monthIndex + 1, 0);
  var saturdays = [];

  iterateDatesInclusive(monthStart, monthEnd, function (d) {
    if (d.getMonth() !== monthIndex) return;
    if (d.getDay() === 6) saturdays.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
  });

  [0, 2].forEach(function (idx) {
    if (!saturdays[idx]) return;
    var sd = saturdays[idx];
    if (sameYMD(sd, 2026, 2, 7)) return;

    events.push(ev(CAL.seanJuggling, 'Paid Juggling Gig', isoLocal(sd, 10, 0), isoLocal(sd, 12, 0),
      'Paid performance gig.', ['juggling', 'gig'], 'Bring full prop kit + backup clubs.', true));
  });
}
addMonthlyGigs(0);
addMonthlyGigs(1);
addMonthlyGigs(2);

// ── D) Ethan bowling: every Wednesday 19:00–21:00 ─────────────────────
iterateDatesInclusive(startRange, endRange, function (d) {
  if (!isWeekday(d) || !isWednesday(d)) return;
  events.push(ev(CAL.ethanBowling, 'Bowling Night', isoLocal(d, 19, 0), isoLocal(d, 21, 0),
    'Weekly bowling night.', ['bowling', 'league'], 'Meet at lanes 10 minutes early.', false));
});

// ── E) Family + Friends: 5 family + 5 friends/month each ──────────────
function addMonthlySocial(person) {
  var y = 2026;
  var m = person.monthIndex;
  var monthStart = new Date(y, m, 1);
  var monthEnd = new Date(y, m + 1, 0);

  var tuesdays = [], thursdays = [], sundays = [], saturdays = [];

  iterateDatesInclusive(monthStart, monthEnd, function (d) {
    if (d.getMonth() !== m) return;
    if (d.getDay() === 2) tuesdays.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
    if (d.getDay() === 4) thursdays.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
    if (d.getDay() === 0) sundays.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
    if (d.getDay() === 6) saturdays.push(new Date(d.getFullYear(), d.getMonth(), d.getDate()));
  });

  var famWeekdays = tuesdays.slice(0, 3);
  var famWeekends = sundays.slice(0, 2);
  var frWeekdays = thursdays.slice(0, 3);
  var frWeekends = saturdays.slice(0, 2);

  if (person.who === 'Sean') {
    famWeekdays.forEach(function (d, i) {
      events.push(ev(CAL.seanFamily, i % 2 === 0 ? 'Family Dinner' : 'Family Call',
        isoLocal(d, 20, 0), isoLocal(d, 21, 0), 'Family time.',
        ['family', i % 2 === 0 ? 'dinner' : 'check-in'], '', false));
    });
    famWeekends.forEach(function (d) {
      events.push(ev(CAL.seanFamily, 'Family Brunch', isoLocal(d, 9, 0), isoLocal(d, 10, 0),
        'Weekend family brunch.', ['family', 'weekend'], '', false));
    });
    frWeekdays.forEach(function (d, i) {
      events.push(ev(CAL.seanFriends, i % 2 === 0 ? 'Friends Hangout' : 'Game Night',
        isoLocal(d, 19, 0), isoLocal(d, 21, 0), 'Friends time.',
        ['friends', 'social'], '', false));
    });
    frWeekends.forEach(function (d) {
      events.push(ev(CAL.seanFriends, 'Weekend Coffee', isoLocal(d, 8, 0), isoLocal(d, 9, 0),
        'Coffee catch-up.', ['friends', 'weekend'], '', false));
    });
  }

  if (person.who === 'Ethan') {
    famWeekdays.forEach(function (d, i) {
      events.push(ev(CAL.ethanFamily, i % 2 === 0 ? 'Family Visit' : 'Family Dinner',
        isoLocal(d, 19, 0), isoLocal(d, 20, 0), 'Family time.',
        ['family', i % 2 === 0 ? 'visit' : 'dinner'], '', false));
    });
    famWeekends.forEach(function (d) {
      events.push(ev(CAL.ethanFamily, 'Weekend Family Brunch', isoLocal(d, 8, 0), isoLocal(d, 9, 0),
        'Weekend brunch.', ['family', 'weekend'], '', false));
    });
    frWeekdays.forEach(function (d, i) {
      events.push(ev(CAL.ethanFriends, i % 2 === 0 ? 'Friends Dinner' : 'Friends Hangout',
        isoLocal(d, 19, 0), isoLocal(d, 21, 0), 'Friends time.',
        ['friends', 'social'], '', false));
    });
    frWeekends.forEach(function (d) {
      events.push(ev(CAL.ethanFriends, 'Weekend Coffee', isoLocal(d, 7, 0), isoLocal(d, 8, 0),
        'Coffee catch-up.', ['friends', 'weekend'], '', false));
    });
  }
}

[0, 1, 2].forEach(function (monthIndex) {
  addMonthlySocial({ who: 'Sean', monthIndex: monthIndex });
  addMonthlySocial({ who: 'Ethan', monthIndex: monthIndex });
});

// ── Insert all events ──────────────────────────────────────────────────
db.events.insertMany(events);

print('calendario-events database initialized and seeded (' + db.events.countDocuments() + ' events)');
