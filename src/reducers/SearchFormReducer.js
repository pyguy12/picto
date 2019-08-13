export default (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_SUBMIT':
      console.log('Search');
      return action.payload;
    default:
      return state;
  }
};
