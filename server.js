const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Data fetched successfully' });
});

const mockData = [
  { id: 1, name: 'Tame Impala' },
  { id: 2, name: 'Chivas' },
  { id: 3, name: 'Bring Me The Horizon' },
  { id: 4, name: 'YUNGBLUD' },
  { id: 5, name: 'Djo' },
  { id: 6, name: 'Vacations' },
  { id: 7, name: 'Hozier' },
  { id: 8, name: 'Coals' },
];

app.get('/artists/random', (req, res) => {
  //get a random data from map mockData
  const randomIndex = Math.floor(Math.random() * mockData.length);
  const randomData = mockData[randomIndex];
  console.log(randomIndex);
  console.log(randomData);
  res.json(randomData);
});

app.get('/artists/all', (req, res) => {
  //randomize the order of the data

  console.log(mockData);
  res.json(mockData.sort(() => Math.random() - 0.5));
});