import React from 'react';
import { connect } from 'react-redux';
import Hero from '../Hero';
import SearchForm from '../SearchForm';
import ImageList from '../ImageList';
import { getNewImages } from '../../actions';

const Home = ({ getNewImages, newImages, location }) => {
  if (newImages.length === 0) {
    getNewImages();
  }
  return (
    <React.Fragment>
      <Hero
        title="Picto"
        description="Picto uses Unsplash’s developer API to retrieve images and was built
        using React."
        component={<SearchForm />}
      />
      <ImageList listName="New Images" location={location} />
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
