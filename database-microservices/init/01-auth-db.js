// Initialize calendario-auth database
db = db.getSiblingDB('calendario-auth');

db.createCollection('credentials');
db.credentials.createIndex({ username: 1 }, { unique: true });
db.credentials.createIndex({ email: 1 }, { unique: true });
db.credentials.createIndex({ userId: 1 }, { unique: true });

print('calendario-auth database initialized');
