export const touchErrors = (errors) => {
  return Object.entries(errors).reduce((acc, [field, fieldError]) => {
    acc[field] = {
      ...fieldError,
      dirty: true,
    };
    return acc;
  }, {});
};

export const isAlphaNumeric = (str) => {
  return /^[a-zA-Z0-9]+$/.test(str);
};

export const calculateMistakes = (difficultyLevel) => {
  switch (difficultyLevel) {
  case 'easy-lvl-item':
    return 0;
  case 'medium-lvl-item':
    return 1;
  case 'hard-lvl-item':
    return 2;
  default:
    return 0;
  }
};

export const stringToArrayOfCharachters = (string) => {
  return [...string.replace(/[^a-zA-Z0-9]/g, '')];
};
