import unsplash from '../apis/unsplash';

export const searchSubmit = searchQuery => {
  return async dispatch => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: searchQuery
      }
    });
    dispatch({
      type: 'SEARCH_SUBMIT',
      payload: { response: response.data.results, query: searchQuery }
    });
  };
};

export const getFeaturedCollections = () => {
  return async dispatch => {
    const response = await unsplash.get('/collections/featured');
    dispatch({
      type: 'GET_FEATURED_COLLECTIONS',
      payload: { featuredCollections: response.data }
    });
  };
};
