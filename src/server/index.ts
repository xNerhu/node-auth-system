import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';

import controllers from './controllers';
import { applyApollo } from './graphql';

dotenv.config();

const { EXPRESS_PORT, MONGO_URL } = process.env;
const app = express();

applyApollo(app);

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(controllers);

mongoose.connect(MONGO_URL);

app.listen(EXPRESS_PORT, () => {
  console.log(`Listening on port ${EXPRESS_PORT}!`);
});
