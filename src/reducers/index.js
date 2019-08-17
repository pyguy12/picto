import { combineReducers } from 'redux';
import SearchFormReducer from './SearchFormReducer';
import NewImagesReducer from './NewImagesReducer';

export default combineReducers({
  searchResults: SearchFormReducer,
  newImages: NewImagesReducer
});
