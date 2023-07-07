import { FormikErrors, FormikTouched, FormikValues } from 'formik';
import { ChangeEvent, FocusEvent } from 'react';

export interface IField {
  values: IFormData;
  errors: FormikErrors<IFormData>;
  touched: FormikTouched<IFormData>;
  onChange(e: ChangeEvent<object>): void;
  onBlur(e: FocusEvent<object>): void;
  setFieldValue?: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<FormikValues>> | Promise<void>;
}
