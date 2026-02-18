// Initialize calendario-calendars database
db = db.getSiblingDB('calendario-calendars');

db.createCollection('calendars');
db.calendars.createIndex({ 'invites.link': 1 });

print('calendario-calendars database initialized');
