import React from 'react';
import { connect } from 'react-redux';
import { getFeaturedCollections } from '../actions';
import './css/ImageList.css';

const ImageList = ({
  listName,
  searchResults,
  query,
  getFeaturedCollections,
  featuredCollections
}) => {
  const renderList = searchResults => {
    if (
      listName === 'Featured Collections' &&
      featuredCollections.length === 0
    ) {
      getFeaturedCollections();
      return featuredCollections.map(collection => {
        return (
          <div key={collection.id} className="image-card-container">
            <img
              className="image-card-thumbnail"
              src={collection.urls.raw + '&w=300&h=190'}
              alt={collection.alt_description}
            />
            <h2 className="collection-name">{collection.title}</h2>
          </div>
        );
      });
    }

    if (!searchResults) {
      return null;
    }

    return searchResults.map(result => {
      return (
        <div key={result.id} className="image-card-container">
          <img
            className="image-card-thumbnail"
            src={result.urls.raw + '&w=300&h=190'}
            alt={result.alt_description}
          />
          <h2 className="image-card-user-name">by {result.user.name}</h2>
        </div>
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
