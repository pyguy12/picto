import React from 'react';
import Hero from '../Hero';
import SearchForm from '../SearchForm';
import ImageList from '../ImageList';

const Home = () => {
  return (
    <React.Fragment>
      <Hero
        title="Picto"
        description="Picto uses Unsplash’s developer API to retrieve images and was built
        using React."
        component={<SearchForm />}
      />
      <ImageList listName="New Images" />
    </React.Fragment>
  );
};

export default Home;
