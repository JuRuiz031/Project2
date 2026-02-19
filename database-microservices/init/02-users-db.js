// Initialize and seed calendario-users database
db = db.getSiblingDB('calendario-users');

db.createCollection('users');
// Indexes are managed by Spring Data MongoDB (auto-index-creation=true in user-service)

// Fixed ObjectIds (must match across all init scripts)
const USER_ID = {
  Juan:   'bbb000000000000000000001',
  Sean:   'bbb000000000000000000002',
  Ethan:  'bbb000000000000000000003',
  Mia:    'bbb000000000000000000004',
  Carlos: 'bbb000000000000000000005',
  Priya:  'bbb000000000000000000006',
};

const CAL_ID = {
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

db.users.insertMany([
  {
    _id: ObjectId(USER_ID.Juan),
    username: 'Juan',
    email: 'juan@example.com',
    isSuperuser: true,
    calendarIds: [
      { calendarId: CAL_ID.wizards, isAdmin: true },
    ],
  },
  {
    _id: ObjectId(USER_ID.Sean),
    username: 'Sean',
    email: 'sean@example.com',
    isSuperuser: false,
    calendarIds: [
      { calendarId: CAL_ID.wizards, isAdmin: true },
      { calendarId: CAL_ID.revatureTeam2, isAdmin: true },
      { calendarId: CAL_ID.seanWork, isAdmin: true },
      { calendarId: CAL_ID.seanJuggling, isAdmin: true },
      { calendarId: CAL_ID.seanFamily, isAdmin: true },
      { calendarId: CAL_ID.seanFriends, isAdmin: true },
    ],
  },
  {
    _id: ObjectId(USER_ID.Ethan),
    username: 'Ethan',
    email: 'ethan@example.com',
    isSuperuser: false,
    calendarIds: [
      { calendarId: CAL_ID.wizards, isAdmin: true },
      { calendarId: CAL_ID.revatureTeam2, isAdmin: false },
      { calendarId: CAL_ID.ethanWork, isAdmin: true },
      { calendarId: CAL_ID.ethanFamily, isAdmin: true },
      { calendarId: CAL_ID.ethanFriends, isAdmin: true },
      { calendarId: CAL_ID.ethanBowling, isAdmin: true },
    ],
  },
  {
    _id: ObjectId(USER_ID.Mia),
    username: 'Mia',
    email: 'mia@example.com',
    isSuperuser: false,
    calendarIds: [
      { calendarId: CAL_ID.wizards, isAdmin: false },
    ],
  },
  {
    _id: ObjectId(USER_ID.Carlos),
    username: 'Carlos',
    email: 'carlos@example.com',
    isSuperuser: false,
    calendarIds: [
      { calendarId: CAL_ID.wizards, isAdmin: false },
    ],
  },
  {
    _id: ObjectId(USER_ID.Priya),
    username: 'Priya',
    email: 'priya@example.com',
    isSuperuser: false,
    calendarIds: [
      { calendarId: CAL_ID.wizards, isAdmin: false },
    ],
  },
]);

print('calendario-users database initialized and seeded (' + db.users.countDocuments() + ' users)');
