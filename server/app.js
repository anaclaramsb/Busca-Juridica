import routes from './routes.js';
import express from 'express';
import cors from 'cors'; 

const app = express();
app.use(cors());
const port = 5000;

app.use(express.json());

app.use(routes);

app.listen(port, () => {
  console.log(`App is running on port ${port}.`);
});

