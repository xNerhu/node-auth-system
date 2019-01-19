import * as mongoose from 'mongoose';

import { IUser } from '@server/interfaces';

const Schema = mongoose.Schema;

const User = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  emailVerified: Boolean,
  password: String,
  description: String,
  createdAt: Date,
});

export const UserModel: mongoose.Model<IUser> = mongoose.model<IUser>(
  'user',
  User,
);
