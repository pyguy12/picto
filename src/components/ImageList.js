import React from 'react';
import { connect } from 'react-redux';
import { getFeaturedCollections } from '../actions';
import './css/ImageList.css';

const ImageList = ({ searchResults, query }) => {
  const renderList = searchResults => {
    if (!searchResults) {
      return null;
    }

    return searchResults.map(result => {
      return (
        <div key={result.id} className="image-card-container">
          <div className="image-card-user-container">
            <img
              src={result.user.profile_image.small}
              alt="Profile"
              className="image-card-profile-picture"
            />
            <h2 className="image-card-user-name">{result.user.name}</h2>
          </div>
          <img
            className="image-card-thumbnail"
            src={result.urls.raw + '&h=300'}
            alt={result.alt_description}
          />
        </div>
      );
    });
  };

  const imageList = renderList(searchResults);

  return (
    <div className="image-container-section">
      <h1 className="list-name">{query ? `Results for "${query}"` : null}</h1>
      <div className="image-list-container">{imageList}</div>
    </div>
  );
};

const mapStateToProps = ({ searchResults, featuredCollections }) => {
  return {
    searchResults: searchResults.response,
    query: searchResults.query,
    featuredCollections: featuredCollections
  };
};

export default connect(
  mapStateToProps,
  {
    getFeaturedCollections
  }
)(ImageList);
