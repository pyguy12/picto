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
      payload: response.data
    });
  };
};
