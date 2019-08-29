import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ImageCard from './ImageCard';
import './css/ImageList.css';

const ImageList = ({
  searchResults,
  path,
  newImages,
  listName,
  userImages
}) => {
  const renderList = searchResults => {
    if (path === '/' && newImages) {
      return newImages.map(result => {
        return (
          <ImageCard
            key={result.id}
            profileImage={result.user.profile_image.small}
            userName={result.user.name}
            image={result.urls}
            altDescription={result.alt_description}
            id={result.id}
            user={result.user.username}
          />
        );
      });
    }

    if (userImages && listName && userImages.length === 0) {
      return newImages.map(result => {
        return (
          <ImageCard
            key={result.id}
            profileImage={result.user.profile_image.small}
            userName={result.user.name}
            image={result.urls}
            altDescription={result.alt_description}
            id={result.id}
            user={result.user.username}
          />
        );
      });
    }

    if (userImages && listName) {
      return userImages.map(result => {
        return (
          <ImageCard
            key={result.id}
            profileImage={result.user.profile_image.small}
            userName={result.user.name}
            image={result.urls}
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
          image={result.urls.regular}
          altDescription={result.alt_description}
          id={result.id}
        />
      );
    });
  };

  const imageList = renderList(searchResults);

  return (
    <div className="image-container-section">
      <h1>{listName}</h1>
      <div className="image-list-container">{imageList}</div>
    </div>
  );
};

const mapStateToProps = (
  { searchResults, newImages, userImages },
  ownProps
) => {
  return {
    path: ownProps.match.path,
    searchResults: searchResults.response,
    query: searchResults.query,
    newImages: newImages.response,
    userImages: userImages.data
  };
};

export default withRouter(connect(mapStateToProps)(ImageList));
