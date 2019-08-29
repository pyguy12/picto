import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Hero from '../Hero';
import SearchForm from '../SearchForm';
import ImageList from '../ImageList';
import { getNewImages } from '../../actions';

const Home = ({ getNewImages, newImages, location }) => {
  if (newImages.length === 0) {
    getNewImages();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <React.Fragment>
      <Hero
        title="Picto"
        description="Picto is a React and Redux application. It pulls data from Unsplash's API to provide royalty-free, no-attribuation images."
        component={<SearchForm />}
      />
      <ImageList listName="New Images" />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { newImages: state.newImages };
};
export default connect(
  mapStateToProps,
  { getNewImages }
)(Home);
