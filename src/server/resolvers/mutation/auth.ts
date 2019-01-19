import { UserInputError, ValidationError } from 'apollo-server-core';
import { isEmail } from 'validator';
import { hash } from 'bcrypt';

import { UserModel } from '@server/models';
import { IUser } from '@server/interfaces';

interface IArgs {
  username: string;
  email: string;
  password: string;
  description: string;
}

export default {
  async register(parent, { username, email, password, description }: IArgs) {
    username = username.trim();
    password = password.trim();
    email = email.trim().toLowerCase();
    if (description) description = description.trim();

    if (username.length <= 3) {
      throw new UserInputError(
        'Username must be at minimum 4 characters long.',
      );
    }

    if (!isEmail(email)) {
      throw new UserInputError('Incorrect email.');
    }

    if (password.length <= 5) {
      throw new UserInputError(
        'Password must be at minimum 6 characters long.',
      );
    }

    const exists = await UserModel.findOne({ email });

    if (exists) {
      throw new ValidationError('User already exists.');
    }

    const hashedPassword = await hash(password, 1);

    const data = <IUser>{
      username,
      email,
      emailVerified: false,
      password: hashedPassword,
      description,
      createdAt: new Date(),
    };

    const user = await UserModel.create(data);

    return { ...data, ...{ _id: user._id, password: null } };
  },
};
