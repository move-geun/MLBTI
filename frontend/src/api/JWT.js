export const saveToken = (token) => {
  window.localStorage.setItem("access-Token", token);
};
export const saveRefreshToken = (token) => {
  window.localStorage.setItem("refresh-Token", token);
};
export const getToken = () => {
  return window.localStorage.getItem("access-Token");
};
export const getRefreshToken = () => {
  return window.localStorage.getItem("refresh-Token");
};
export const deleteToken = () => {
  window.localStorage.removeItem("access-Token");
};
export const deleteRefreshToken = () => {
  window.localStorage.removeItem("refresh-Token");
};
