import { combineReducers } from 'redux';
import SearchFormReducer from './SearchFormReducer';
import FeaturedCollectionsReducer from './FeaturedCollectionsReducer';

export default combineReducers({
  searchResults: SearchFormReducer,
  featuredCollections: FeaturedCollectionsReducer
});
