// Initialize and seed calendario-polls database
db = db.getSiblingDB('calendario-polls');

db.createCollection('polls');
db.polls.createIndex({ calendarId: 1 });
db.polls.createIndex({ tags: 1 });

// ─── Fixed IDs (must match across all init scripts) ─────────────────────
var CAL = {
  wizards:      'aaa000000000000000000001',
  seanJuggling: 'aaa000000000000000000004',
  ethanBowling: 'aaa00000000000000000000a',
};

var USER = {
  Sean:   'bbb000000000000000000002',
  Ethan:  'bbb000000000000000000003',
  Mia:    'bbb000000000000000000004',
  Carlos: 'bbb000000000000000000005',
  Priya:  'bbb000000000000000000006',
};

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

var pollNow = new Date();
var pollOneWeekLater = new Date(pollNow.getTime() + 7 * 24 * 60 * 60 * 1000);

db.polls.insertMany([
  // 1) Wizards Nuggets reschedule poll (Sean has NOT voted)
  {
    calendarId: CAL.wizards,
    title: 'Move pickup game vs Nuggets?',
    description: 'Vote to keep the pickup game on Sat Feb 14 or move it to Sat Feb 7.',
    notes: 'After Sean votes for Feb 7, Feb 7 wins.',
    startTime: dtLocal('2026-02-01T09:00:00'),
    endTime: dtLocal('2026-02-06T21:00:00'),
    resultsVisible: true,
    allowMultipleVotes: false,
    tags: ['basketball', 'scheduling'],
    inviteLinks: [{ token: generateToken(), createdAt: pollNow, expiresAt: pollOneWeekLater }],
    optionsList: [
      { optionId: 0, description: 'Keep: Saturday Feb 14', userVotes: [USER.Carlos, USER.Priya], guestVotes: [] },
      { optionId: 1, description: 'Move to: Saturday Feb 7',  userVotes: [USER.Ethan, USER.Mia],   guestVotes: [] },
    ],
  },

  // 2) Sean-only poll (Juggling)
  {
    calendarId: CAL.seanJuggling,
    title: 'Pick next juggling routine theme',
    description: 'Choose what to focus on for next week\'s practice set.',
    notes: 'Just a quick self-poll.',
    startTime: dtLocal('2026-01-05T18:00:00'),
    endTime: dtLocal('2026-01-09T21:00:00'),
    resultsVisible: true,
    allowMultipleVotes: false,
    tags: ['juggling', 'planning'],
    inviteLinks: [],
    optionsList: [
      { optionId: 0, description: 'Speed + endurance',           userVotes: [USER.Sean], guestVotes: [] },
      { optionId: 1, description: 'New trick: behind-the-back',  userVotes: [],          guestVotes: [] },
      { optionId: 2, description: 'Routine cleanup',             userVotes: [],          guestVotes: [] },
    ],
  },

  // 3) Ethan-only poll (Bowling)
  {
    calendarId: CAL.ethanBowling,
    title: 'Bowling focus this month',
    description: 'What should we focus on during practice?',
    notes: '',
    startTime: dtLocal('2026-02-02T19:00:00'),
    endTime: dtLocal('2026-02-06T21:00:00'),
    resultsVisible: true,
    allowMultipleVotes: false,
    tags: ['bowling', 'practice'],
    inviteLinks: [],
    optionsList: [
      { optionId: 0, description: 'Spare shooting',         userVotes: [USER.Ethan], guestVotes: [] },
      { optionId: 1, description: 'Approach consistency',   userVotes: [],           guestVotes: [] },
    ],
  },

  // 4) Shared poll: post-game hangout (Wizards)
  {
    calendarId: CAL.wizards,
    title: 'Post-game hangout plan',
    description: 'Sean + Ethan: pick what to do after the next pickup game.',
    notes: 'Results visible.',
    startTime: dtLocal('2026-03-05T19:00:00'),
    endTime: dtLocal('2026-03-10T21:00:00'),
    resultsVisible: true,
    allowMultipleVotes: false,
    tags: ['friends', 'planning'],
    inviteLinks: [{ token: generateToken(), createdAt: pollNow, expiresAt: pollOneWeekLater }],
    optionsList: [
      { optionId: 0, description: 'Pizza',            userVotes: [USER.Sean],  guestVotes: [] },
      { optionId: 1, description: 'Burgers',          userVotes: [USER.Ethan], guestVotes: [] },
      { optionId: 2, description: 'Call it a night',   userVotes: [],           guestVotes: [] },
    ],
  },

  // 5) Shared poll: practice time preference (Wizards)
  {
    calendarId: CAL.wizards,
    title: 'New practice time preference',
    description: 'Should we keep Tue/Thu evening practice times or adjust?',
    notes: '',
    startTime: dtLocal('2026-01-12T18:00:00'),
    endTime: dtLocal('2026-01-16T21:00:00'),
    resultsVisible: true,
    allowMultipleVotes: true,
    tags: ['basketball', 'planning'],
    inviteLinks: [],
    optionsList: [
      { optionId: 0, description: 'Keep Tue/Thu 6pm',        userVotes: [USER.Sean],  guestVotes: [] },
      { optionId: 1, description: 'Move to Mon/Wed 7pm',     userVotes: [USER.Ethan], guestVotes: [] },
      { optionId: 2, description: 'Weekend mornings only',    userVotes: [],           guestVotes: [] },
    ],
  },
]);

print('calendario-polls database initialized and seeded (' + db.polls.countDocuments() + ' polls)');
