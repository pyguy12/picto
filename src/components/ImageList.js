import React from 'react';
import { connect } from 'react-redux';

const ImageList = ({ listName }) => {
  const renderList = searchResults => {
    return;
  };

  return (
    <div>
      <h1 className="list-name">{listName}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return { searchResults: state.searchResults.results };
};

export default connect(mapStateToProps)(ImageList);
