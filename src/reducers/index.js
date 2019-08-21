import { combineReducers } from 'redux';
import SearchFormReducer from './SearchFormReducer';
import NewImagesReducer from './NewImagesReducer';
import ImageClickedReducer from './ImageClickedReducer';
import UserImagesReducer from './UserImagesReducer';

export default combineReducers({
  searchResults: SearchFormReducer,
  newImages: NewImagesReducer,
  clickedImage: ImageClickedReducer,
  userImages: UserImagesReducer
});
