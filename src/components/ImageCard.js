import React from 'react';

const ImageCard = ({ id, profileImage, userName, image, altDescription }) => {
  return (
    <div key={id} className="image-card-container">
      <div className="image-card-user-container">
        <img
          src={profileImage}
          alt="Profile"
          className="image-card-profile-picture"
        />
        <h2 className="image-card-user-name">{userName}</h2>
      </div>
      <img className="image-card-thumbnail" src={image} alt={altDescription} />
    </div>
  );
};
export default ImageCard;
