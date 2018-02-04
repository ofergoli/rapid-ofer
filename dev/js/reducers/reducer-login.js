const initialState = {
  login: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
      break;
    case 'LOGOUT':
      return action.payload;
      break;
    case 'IMAGE_DRAG':
      return action.payload;
      break
  }
  return state;
}
