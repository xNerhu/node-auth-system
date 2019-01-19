import { UserInputError } from 'apollo-server-core';

import { IValidationItem } from '@server/interfaces';

export const validate = async (items: IValidationItem[]) => {
  for (const { test, message, errorType } of items) {
    console.log(typeof test);

    if (typeof test === 'function' && (await test())) {
      continue;
    }
    console.log('error xd');
    throw new (errorType || UserInputError)(message);
  }
};
