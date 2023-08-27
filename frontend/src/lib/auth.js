export const isAuth = (cookie) => {
  if (cookie.has("login")) {
    return true;
  }
  return false;
};
