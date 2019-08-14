import React from 'react';
import { connect } from 'react-redux';
import './css/ImageList.css';

const ImageList = ({ listName, searchResults, query }) => {
  console.log(query);
  const renderList = searchResults => {
    if (!searchResults) {
      return null;
    }
    return searchResults.map(result => {
      return (
        <div key={result.id} className="image-card-container">
          <img
            className="image-card-thumbnail"
            src={result.urls.thumb + '&w=330'}
            alt={result.alt_description}
          />
          <h2 className="image-card-user-name">by {result.user.name}</h2>
        </div>
      );
    });
  };

  const imageList = renderList(searchResults);

  return (
    <div className="image-list-container">
      <h1 className="list-name">
        {query ? `Results for "${query}"` : listName}
      </h1>
      {imageList}
    </div>
  );
};

const mapStateToProps = ({ searchResults }) => {
  return {
    searchResults: searchResults.response,
    query: searchResults.query
  };
};

export default connect(mapStateToProps)(ImageList);
