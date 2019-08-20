const ImageClickedReducer = (state = '', action) => {
  switch (action.type) {
    case 'IMAGE_CLICKED':
      return action.payload;
    default:
      return state;
  }
};

export default ImageClickedReducer;
