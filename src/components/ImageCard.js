import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleImageClick } from '../actions';

const ImageCard = ({
  profileImage,
  userName,
  image,
  altDescription,
  id,
  handleImageClick
}) => {
  return (
    <Link onClick={() => handleImageClick(image)} to={`/display-image/${id}`}>
      <div className="image-card-container">
        <div className="image-card-user-container">
          <img
            src={profileImage}
            alt="Profile"
            className="image-card-profile-picture"
          />
          <h2 className="image-card-user-name">{userName}</h2>
        </div>
        <img
          className="image-card-thumbnail"
          src={image}
          alt={altDescription}
        />
      </div>
    </Link>
  );
};

export default connect(
  null,
  {
    handleImageClick
  }
)(ImageCard);
