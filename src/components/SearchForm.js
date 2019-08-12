import React from 'react';
import { withFormik, Form, Field } from 'formik';

const SearchForm = () => {
  return (
    <Form id="search">
      <Field
        className="search-bar"
        type="text"
        placeholder="Search..."
        name="searchQuery"
      />
      <button className="search-button" type="submit" form="search">
        <i className="fas fa-search" />
      </button>
    </Form>
  );
};

const FormikSearchForm = withFormik({
  mapPropsToValues: () => ({ searchQuery: '' }),

  handleSubmit: values => {
    console.log(values);
  }
})(SearchForm);

export default FormikSearchForm;
