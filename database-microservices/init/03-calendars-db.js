// Initialize and seed calendario-calendars database
db = db.getSiblingDB('calendario-calendars');

db.createCollection('calendars');
db.calendars.createIndex({ 'invites.link': 1 });

function generateToken() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0;
    var v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Fixed ObjectIds (must match across all init scripts)
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

const now = new Date();
const oneWeekLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

db.calendars.insertMany([
  { _id: ObjectId(CAL_ID.wizards),       name: 'Basketball - Wizards', invites: [{ link: generateToken(), expiresAt: oneWeekLater }], createdAt: now, updatedAt: now },
  { _id: ObjectId(CAL_ID.revatureTeam2), name: 'Revature - Team 2',   invites: [], createdAt: now, updatedAt: now },
  { _id: ObjectId(CAL_ID.seanWork),      name: 'Sean - Work',         invites: [], createdAt: now, updatedAt: now },
  { _id: ObjectId(CAL_ID.seanJuggling),  name: 'Sean - Juggling',     invites: [], createdAt: now, updatedAt: now },
  { _id: ObjectId(CAL_ID.seanFamily),    name: 'Sean - Family',       invites: [], createdAt: now, updatedAt: now },
  { _id: ObjectId(CAL_ID.seanFriends),   name: 'Sean - Friends',      invites: [], createdAt: now, updatedAt: now },
  { _id: ObjectId(CAL_ID.ethanWork),     name: 'Ethan - Work',        invites: [], createdAt: now, updatedAt: now },
  { _id: ObjectId(CAL_ID.ethanFamily),   name: 'Ethan - Family',      invites: [], createdAt: now, updatedAt: now },
  { _id: ObjectId(CAL_ID.ethanFriends),  name: 'Ethan - Friends',     invites: [], createdAt: now, updatedAt: now },
  { _id: ObjectId(CAL_ID.ethanBowling),  name: 'Ethan - Bowling',     invites: [], createdAt: now, updatedAt: now },
]);

print('calendario-calendars database initialized and seeded (' + db.calendars.countDocuments() + ' calendars)');
