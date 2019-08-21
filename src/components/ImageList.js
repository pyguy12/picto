import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ImageCard from './ImageCard';
import './css/ImageList.css';

const ImageList = ({ searchResults, query, path, newImages, listName }) => {
  const renderList = searchResults => {
    if (path === '/' && newImages) {
      return newImages.map(result => {
        return (
          <ImageCard
            key={result.id}
            profileImage={result.user.profile_image.small}
            userName={result.user.name}
            image={`${result.urls.raw} + '&h=300'`}
            altDescription={result.alt_description}
            id={result.id}
            user={result.user.username}
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
          id={result.id}
        />
      );
    });
  };

  const imageList = renderList(searchResults);

  return (
    <div className="image-container-section">
      <h1 className="list-name">
        {path !== '/' && query ? `Results for "${query}"` : listName}
      </h1>
      <div className="image-list-container">{imageList}</div>
    </div>
  );
};

const mapStateToProps = ({ searchResults, newImages }, ownProps) => {
  return {
    path: ownProps.match.path,
    searchResults: searchResults.response,
    query: searchResults.query,
    newImages: newImages.response
  };
};

export default withRouter(connect(mapStateToProps)(ImageList));
