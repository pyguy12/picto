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

export const getNewImages = () => {
  return async dispatch => {
    const response = await unsplash.get('/photos');
    dispatch({
      type: 'GET_NEW_IMAGES',
      payload: { response: response.data }
    });
  };
};

export const handleImageClick = (imageSource, imageAlt) => {
  return {
    type: 'IMAGE_CLICKED',
    payload: { imageSource: imageSource, imageAlt: imageAlt }
  };
};
