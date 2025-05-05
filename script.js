const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const db = mysql.createPool({
 host: 'localhost',
 user: 'root',
 password: 'leeknow80517*@1#/',
 database: 'studentportal',
});
// CRUD API Endpoints
// Create Student
app.post('/students', async (req, res) => {
 try {
 const { FirstName, LastName, Email } = req.body;
 const [result] = await db.execute('INSERT INTO Students SET ?', { FirstName, LastName, Email });
 res.json({ StudentID: result.insertId, FirstName, LastName, Email });
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Error creating student' });
 }
});
// Read Students
app.get('/students', async (req, res) => {
 try {
 const [results] = await db.execute('SELECT * FROM Students');
 res.json(results);
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Error reading students' });
 }
});
// Update Student
app.put('/students/:StudentID', async (req, res) => {
 try {
 const { StudentID } = req.params;
 const { FirstName, LastName, Email } = req.body;
 await db.execute('UPDATE Students SET ? WHERE StudentID = ?', [{ FirstName, LastName, Email }, StudentID]);
 res.json({ message: 'Student updated successfully' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Error updating student' });
 }
});
// Delete Student
app.delete('/students/:StudentID', async (req, res) => {
 try {
 const { StudentID } = req.params;
 await db.execute('DELETE FROM Students WHERE StudentID = ?', [StudentID]);
 res.json({ message: 'Student deleted successfully' });
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Error deleting student' });
 }
});
app.listen(3000, () => {
 console.log('Server listening on port3000');
});
async function connectToDatabase() {
    try {
      const connection = await mysql.createConnection(dbConfig);
      console.log('Connected to database!');
      const [results] = await connection.execute('SELECT * FROM Students');
      console.log(results);
    } catch (error) {
      console.error('Error connecting to database:', error);
    }
  }
  