const mysql = require('mysql2/promise');
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'leeknow80517*@1#/',
  database: 'StudentPortal',
};
async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to database!');
    // Execute queries here
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}
connectToDatabase();
