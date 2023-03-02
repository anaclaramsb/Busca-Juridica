import routes from './routes.js';
import express from 'express';


const app = express();
const port = 5000;


app.use(express.json());

app.use(routes);


app.listen(3333);

app.listen(port, () => {
  console.log(`App is running on port ${port}.`);
});

