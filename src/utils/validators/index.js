export const usernameValidator = (username) => {
  if (!username) {
    return false;
  } else if (username.length < 3 || username.length > 7) {
    return false;
  }
  return true;
};
