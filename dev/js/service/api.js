export const handler = {
  updateLocalStorageState: (isUserLoggedIn) => {
    const user = handler.getParsedUser();
    user['loggedin'] = isUserLoggedIn;
    window.localStorage.setItem('user', JSON.stringify(user));
  },
  updateImageLocation: ({x, y}) => {
    const user = handler.getParsedUser();
    user.x = x;
    user.y = y;
    window.localStorage.setItem('user', JSON.stringify(user));
  },
  getSavedPositions: () => {
    const user = window.localStorage.getItem('user');
    const {x, y} = JSON.parse(user);
    return ({x, y});
  },
  shouldLogoutUser: () => {
    const user = handler.getParsedUser();
    return !user.loggedin;
  },
  initApp: () => {
    const user = handler.getUser();
    if (!user) {
      const initial = {
        loggedin: false,
        password: 'rapid',
        username: 'rapid',
        x: 0,
        y: 0
      };
      window.localStorage.setItem('user', JSON.stringify(initial));
    }
  },
  getUser: () => window.localStorage.getItem('user'),
  parseUser: user => JSON.parse(user),
  getParsedUser: () => handler.parseUser(handler.getUser())
}