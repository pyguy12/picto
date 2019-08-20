import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/ImageDisplay.css';

const ImageDisplay = ({ image }) => {
  return (
    <div className="image-display-container">
      <img
        className="image-single-page"
        src={image.imageSource}
        alt={image.imageAlt}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { image: state.clickedImage };
};

export default withRouter(connect(mapStateToProps)(ImageDisplay));
