import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import productApi from '../../../api/productApi';
import Loading from '../components/Loading';
import Product from '../components/Product';

function ProductDetailPage() {
  const { params } = useRouteMatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const data = await productApi.getById(params.productId);
        setProduct(data);
      } catch (error) {
        console.log(`Failed to fetch a product detail: ${error} `);
      }

      setLoading(false);
    })();
  }, [params.productId]);

  return (
    <Box>
      {loading && <Loading />}
      {product && <Product product={product} />}
    </Box>
  );
}

export default ProductDetailPage;
