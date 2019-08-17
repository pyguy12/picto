import React from 'react';
import { connect } from 'react-redux';
import { getFeaturedCollections } from '../actions';
import ImageCard from './ImageCard';
import './css/ImageList.css';

const ImageList = ({ searchResults, query }) => {
  const renderList = searchResults => {
    if (!searchResults) {
      return null;
    }

    return searchResults.map(result => {
      return (
        <ImageCard
          id={result.id}
          profileImage={result.user.profile_image.small}
          userName={result.user.name}
          image={`${result.urls.raw} + '&h=300'`}
          altDescription={result.alt_description}
        />
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
