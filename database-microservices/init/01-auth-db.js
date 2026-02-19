// Initialize and seed calendario-auth database
db = db.getSiblingDB('calendario-auth');

db.createCollection('credentials');
db.credentials.createIndex({ username: 1 }, { unique: true });
db.credentials.createIndex({ email: 1 }, { unique: true });
db.credentials.createIndex({ userId: 1 }, { unique: true });

// BCrypt hash of "password" (cost 10)
const HASHED_PASSWORD = '$2b$10$K8ksYrqIIXiIElsUiFROX.lHxLWfxJ8Jsjx/LmXZfRJc2SmZ/hgDq';

const now = new Date();

// User ObjectId hex strings (must match 02-users-db.js)
const USER_ID = {
  Juan:   'bbb000000000000000000001',
  Sean:   'bbb000000000000000000002',
  Ethan:  'bbb000000000000000000003',
  Mia:    'bbb000000000000000000004',
  Carlos: 'bbb000000000000000000005',
  Priya:  'bbb000000000000000000006',
};

db.credentials.insertMany([
  { username: 'Juan',   email: 'juan@example.com',   password: HASHED_PASSWORD, userId: USER_ID.Juan,   createdAt: now, updatedAt: now },
  { username: 'Sean',   email: 'sean@example.com',   password: HASHED_PASSWORD, userId: USER_ID.Sean,   createdAt: now, updatedAt: now },
  { username: 'Ethan',  email: 'ethan@example.com',  password: HASHED_PASSWORD, userId: USER_ID.Ethan,  createdAt: now, updatedAt: now },
  { username: 'Mia',    email: 'mia@example.com',    password: HASHED_PASSWORD, userId: USER_ID.Mia,    createdAt: now, updatedAt: now },
  { username: 'Carlos', email: 'carlos@example.com', password: HASHED_PASSWORD, userId: USER_ID.Carlos, createdAt: now, updatedAt: now },
  { username: 'Priya',  email: 'priya@example.com',  password: HASHED_PASSWORD, userId: USER_ID.Priya,  createdAt: now, updatedAt: now },
]);

print('calendario-auth database initialized and seeded (' + db.credentials.countDocuments() + ' credentials)');
