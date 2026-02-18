// Initialize calendario-polls database
db = db.getSiblingDB('calendario-polls');

db.createCollection('polls');
db.polls.createIndex({ calendarId: 1 });
db.polls.createIndex({ tags: 1 });

print('calendario-polls database initialized');
