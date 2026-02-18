// Initialize calendario-events database
db = db.getSiblingDB('calendario-events');

db.createCollection('events');
db.events.createIndex({ calendarId: 1 });
db.events.createIndex({ tags: 1 });
db.events.createIndex({ 'inviteLinks.token': 1 });

print('calendario-events database initialized');
