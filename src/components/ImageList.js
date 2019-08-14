import React from 'react';
import { connect } from 'react-redux';

const ImageList = ({ listName, searchResults }) => {
  const renderList = searchResults => {
    if (!searchResults) {
      return null;
    }
    return searchResults.map(result => {
      return (
        <div key={result.id} className="image-card-container">
          <img src={result.urls.thumb} alt={result.alt_description} />
          <h2 className="image-card-user-name">by {result.user.name}</h2>
        </div>
      );
    });
  };

  const imageList = renderList(searchResults);

  return (
    <div>
      <h1 className="list-name">Results for "{listName}"</h1>
      {imageList}
    </div>
  );
};

const mapStateToProps = ({ searchResults, query }) => {
  return {
    searchResults: searchResults.response,
    query: query
  };
};

export default connect(mapStateToProps)(ImageList);
