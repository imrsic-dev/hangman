import { useState } from 'react';
import { touchErrors } from '../utils';
import { usernameValidator } from '../utils/validators';

export const useFormValidator = (form) => {
  const [errors, setErrors] = useState({
    username: {
      dirty: false,
      error: false,
      isValid: true,
    },
  });

  const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
    let isValid = true;

    // Create a deep copy of the errors
    let nextErrors = JSON.parse(JSON.stringify(errors));

    // Force validate all the fields
    if (forceTouchErrors) {
      nextErrors = touchErrors(errors);
    }

    const { username } = form;

    if (nextErrors.username.dirty && (field ? field === 'username' : true)) {
      const isUsernameValid = usernameValidator(username, form);
      nextErrors.username.error = !!isUsernameValid;
      nextErrors.username.isValid = isUsernameValid;
      isValid = isUsernameValid;
    }

    setErrors(nextErrors);

    return {
      isValid,
      errors: nextErrors,
    };
  };

  const onBlurField = (e) => {
    const field = e.target.name;
    const fieldError = errors[field];
    if (fieldError.dirty) return;

    const updatedErrors = {
      ...errors,
      [field]: {
        ...errors[field],
        dirty: true,
      },
    };
    validateForm({ form, field, errors: updatedErrors });
  };

  return {
    validateForm,
    onBlurField,
    errors,
  };
};
