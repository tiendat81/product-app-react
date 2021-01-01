import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductForm from '../components/ProductForm';
import { Container } from '@material-ui/core';
import productApi from '../../../api/productApi';

AddEdit.propTypes = {};

function AddEdit(props) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleFormSubmit = async (formValues) => {
    const isAdd = !selectedProduct;
    if (isAdd) {
      await productApi.add(formValues);
      // re-fetch student list with current filters
      return;
    }
  };

  return (
    <Container>
      <ProductForm onSubmit={handleFormSubmit} initialValues={selectedProduct} />
    </Container>
  );
}

export default AddEdit;
