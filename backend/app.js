const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');
const app = express();
const port = 3000;

// Use let instead of const for users since we need to reassign it
let users = [];

app.use(cors());
app.use(express.json());

const readData = async () => {
  try {
    // Check if the file exists before trying to read it
    await fs.access('./data.json');
    users = JSON.parse(await fs.readFile('./data.json', 'utf-8'));
  } catch (error) {
    // If file doesn't exist, create it with an empty array
    await fs.writeFile('./data.json', JSON.stringify([]));
    users = [];
  }
};

const writeData = async () => {
  await fs.writeFile('./data.json', JSON.stringify(users));
};

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', async (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    age: req.body.age
  };
  users.push(newUser);
  await writeData();
  res.status(201).json({ message: "data saved" });
});

// Initialize data before starting the server
readData().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});