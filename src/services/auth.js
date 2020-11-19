export const APP_KEY = "@aulavuejs";

export const isAuthenticated = () =>
  localStorage.getItem(`${APP_KEY}-user`) !== null;
export const setUser = (user) =>
  localStorage.setItem(`${APP_KEY}-user`, JSON.stringify(user));
export const getUser = () =>
  JSON.parse(localStorage.getItem(`${APP_KEY}-user`));
export const signOut = () => localStorage.clear();
