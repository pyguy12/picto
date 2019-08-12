export const searchSubmit = searchQuery => {
  return {
    type: 'SEARCH_SUBMIT',
    payload: searchQuery
  };
};
