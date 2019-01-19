import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  username: string;
  email: string;
  emailVerified: boolean;
  password: string;
  description: string;
  createdAt: Date;
}
