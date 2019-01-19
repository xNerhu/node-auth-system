import { IValidationItem } from '@server/interfaces';

export const validate = async (items: IValidationItem[]) => {
  const errors = [];

  for (const { message, test } of items) {
    if (typeof test === 'function' && (await test())) {
      continue;
    } else if (typeof test === 'boolean' && test) {
      continue;
    }

    errors.push(message);
  }

  return errors;
};
