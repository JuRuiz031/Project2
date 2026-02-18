// Initialize calendario-users database
db = db.getSiblingDB('calendario-users');

db.createCollection('users');
db.users.createIndex({ username: 1 }, { unique: true });
db.users.createIndex({ email: 1 }, { unique: true });
db.users.createIndex({ 'calendarIds.calendarId': 1 });

print('calendario-users database initialized');
