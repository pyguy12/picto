import { combineReducers } from 'redux';
import SearchFormReducer from './SearchFormReducer';
import NewImagesReducer from './NewImagesReducer';
import ImageClickedReducer from './ImageClickedReducer';

export default combineReducers({
  searchResults: SearchFormReducer,
  newImages: NewImagesReducer,
  imageSource: ImageClickedReducer
});
