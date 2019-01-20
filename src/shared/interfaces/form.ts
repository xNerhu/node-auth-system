export interface IFormInputs {
  [s: string]: HTMLInputElement;
}

export interface IFormValues {
  [s: string]: string;
}

export interface IFormErrors {
  [s: string]: string;
}

export interface IValidationItem {
  message: string;
  test: (value: string, formValues?: IFormValues) => Promise<boolean> | boolean;
}

export interface IValidationSchema {
  [s: string]: IValidationItem | IValidationItem[];
}
