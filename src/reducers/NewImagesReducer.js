export default (state = '', action) => {
  switch (action.type) {
    case 'GET_NEW_IMAGES':
      return action.payload;
    default:
      return state;
  }
};
