import { createServer } from 'http';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as dotenv from 'dotenv';

import controllers from './controllers';

dotenv.config();

const app = express();
const PORT = process.env.EXPRESS_PORT;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(controllers);

createServer(app).listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
