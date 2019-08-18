import React from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard';
import './css/ImageList.css';

const ImageList = ({ searchResults, query, location, newImages, listName }) => {
  const renderList = searchResults => {
    if (location.pathname === '/' && newImages) {
      return newImages.map(result => {
        return (
          <ImageCard
            key={result.id}
            profileImage={result.user.profile_image.small}
            userName={result.user.name}
            image={`${result.urls.raw} + '&h=300'`}
            altDescription={result.alt_description}
          />
        );
      });
    }

    if (!searchResults) {
      return null;
    }

    return searchResults.map(result => {
      return (
        <ImageCard
          key={result.id}
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
      <h1 className="list-name">
        {query ? `Results for "${query}"` : listName}
      </h1>
      <div className="image-list-container">{imageList}</div>
    </div>
  );
};

const mapStateToProps = ({ searchResults, newImages }, ownProps) => {
  console.log(ownProps);
  return {
    searchResults: searchResults.response,
    query: searchResults.query,
    newImages: newImages.response
  };
};

export default connect(mapStateToProps)(ImageList);
