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
          <h2 className="image-card-user-name">{result.user.name}</h2>
        </div>
      );
    });
  };

  const imageList = renderList(searchResults);

  return (
    <div>
      <h1 className="list-name">{listName}</h1>
      {imageList}
    </div>
  );
};

const mapStateToProps = state => {
  return { searchResults: state.searchResults.results };
};

export default connect(mapStateToProps)(ImageList);
