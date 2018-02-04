import {handler} from "../service/api";

export const login = ({username, password}) => api.login({username, password});
export const logout = () => api.logout();
export const dragImage = ({x, y}) => api.drag({x, y});

const api = {
  login: ({username, password}) => new Promise((resolve) => {
    setTimeout(() => {
      const user = window.localStorage.getItem('user');
      const parsedUser = JSON.parse(user);
      handler.updateLocalStorageState(true);
      if (username === parsedUser.username && password === parsedUser.password) {
        return resolve({
          type: 'LOGIN',
          payload: {login: true, username}
        });
      }
      return resolve({
        type: 'LOGIN',
        payload: {login: false}
      });
    }, 500);
  }),
  logout: () => new Promise((resolve) => {
    setTimeout(() => {
      handler.updateLocalStorageState(false);
      return resolve({
        type: 'LOGOUT',
        payload: {login: false, username: null}
      });
    }, 500);
  }),
  drag: ({x, y}) => new Promise((resolve) => {
    setTimeout(() => {
      handler.updateImageLocation({x, y});
      return resolve({
        type: 'IMAGE_DRAG',
        payload: {}
      })
    }, 500);
  })
}
