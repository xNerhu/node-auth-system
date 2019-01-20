export interface IValidationItem {
  message: string;
  test: (() => boolean | Promise<boolean>) | boolean;
}

export interface IValidationSchema {
  [s: string]: IValidationItem | IValidationItem[];
}

export interface IValidationErrors {
  [s: string]: string;
}
