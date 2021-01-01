import { Box, CardActionArea, Container, Grid, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Add } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productApi from '../../../api/productApi';
import Loading from '../components/Loading';
import ProductPagination from '../components/Pagination';
import ProductList from '../components/ProductList';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   container: {
//     width: 'auto',
//     margin: '1rem',
//   },
//   link: {
//     textDecoration: 'none',
//     cursor: 'poiter',
//   },
//   addProduct: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     margin: '1rem',
//   },
//   linkAddProduct: {
//     textDecoration: 'none',
//   },
//   pagination: {
//     margin: '1rem auto',
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

function ProductListPage() {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 8,
    _totalRows: 1,
  });

  const { _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  const [filters, setFilters] = useState({
    _limit: 8,
    _page: 1,
    _sort: 'updatedAt',
    _order: 'desc',
  });

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      _page: newPage,
    });
  };

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);

        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(`Failed to fetch product list: ${error}`);
      }

      setLoading(false);
    })();
  }, [filters]);

  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <ProductList productList={productList} onPageChange={handlePageChange} />

          <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ProductPagination
              count={totalPages}
              page={pagination._page}
              onPageChange={handlePageChange}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default ProductListPage;
