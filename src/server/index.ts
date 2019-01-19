import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import { ApolloServer } from 'apollo-server-express';

import controllers from './controllers';
import resolvers from './resolvers';
import schema from './schema';

dotenv.config();

const { EXPRESS_PORT, MONGO_URL } = process.env;

const app = express();
const server = new ApolloServer({ typeDefs: schema, resolvers });

server.applyMiddleware({ app, path: '/api' });

app.use(helmet());
app.use(cookieParser());
app.use(session({ secret: 'secret', saveUninitialized: true, resave: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(controllers);

mongoose.connect(MONGO_URL);

app.listen(EXPRESS_PORT, () => {
  console.log(`Listening on port ${EXPRESS_PORT}!`);
});
