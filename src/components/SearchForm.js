import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { searchSubmit } from '../actions';
import './css/SearchForm.css';

const SearchForm = () => {
  return (
    <Form id="search">
      <Field
        className="search-bar"
        type="text"
        placeholder="Search..."
        name="searchQuery"
      />
    </Form>
  );
};

const FormikSearchForm = withFormik({
  mapPropsToValues: () => ({ searchQuery: '' }),

  handleSubmit: (values, { props }) => {
    props.searchSubmit(values.searchQuery);
    props.history.push(`/images/${values.searchQuery}`);
  }
})(SearchForm);

export default connect(
  null,
  {
    searchSubmit
  }
)(FormikSearchForm);
