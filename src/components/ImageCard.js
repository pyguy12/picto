import React from 'react';
import { Link } from 'react-router-dom';

const ImageCard = ({ profileImage, userName, image, altDescription, key }) => {
  return (
    <Link to="/display-image">
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
export default ImageCard;
