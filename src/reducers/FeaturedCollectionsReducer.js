export default (state = [], action) => {
  switch (action.type) {
    case 'GET_FEATURED_COLLECTIONS':
      return action.payload.featuredCollections;
    default:
      return state;
  }
};
