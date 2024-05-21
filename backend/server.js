import express, { request } from 'express';
import pkg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const app = express();
const port = 5001;

// Enable CORS for all origins
app.use(cors());

// Enable CORS for specific origin (optional)
// app.use(cors({
//   origin: 'http://localhost:5173'
// }));

app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO contact_message(name, email, message) VALUES($1, $2, $3) RETURNING *',
      [name, email, message]
    );
    console.log(result)
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
