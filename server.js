import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.send('Hello World from express!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000!');
});
