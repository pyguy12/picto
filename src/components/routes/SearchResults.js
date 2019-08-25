import React, { useEffect } from 'react';
import ImageList from '../ImageList';
import Hero from '../Hero';
import SearchForm from '../SearchForm';

const SearchResults = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <React.Fragment>
      <Hero
        title="Picto"
        description="Picto uses Unsplash’s developer API to retrieve images and was built
        using React."
        component={<SearchForm />}
      />
      <ImageList />
    </React.Fragment>
  );
};

export default SearchResults;
