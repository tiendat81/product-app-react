import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Add } from '@material-ui/icons';

ProductList.propTypes = {};

function ProductList(props) {
  const { productList, handleAddClick } = props;

  return (
    <Container>
      <Link
        to="products/addProduct"
        style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}
      >
        <Button variant="outlined" color="primary" startIcon={<Add />} onClick={handleAddClick}>
          Add new product
        </Button>
      </Link>
      <Box mt={5} style={{ display: 'flex', width: '100%', justifyContent: 'flex-start' }}>
        <Box
          style={{
            width: '20%',
            borderRadius: '5px',
            backgroundColor: '#f0f5f5',
            minHeight: '500px',
          }}
        >
          <Box style={{ padding: '1rem .5rem', borderBottom: '2px solid  rgb(153, 204, 255)' }}>
            DANH MỤC SẢN PHẨM
          </Box>
          <Box style={{ padding: '1rem .5rem' }}>MIỄN PHÍ GIAO HÀNG</Box>
        </Box>
        <Box
          style={{
            width: '80%',
            borderRadius: '5px',
            backgroundColor: '#e6f2ff',
            minHeight: '500px',
          }}
        >
          <Box>
            <Grid container spacing={1}>
              {productList.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                  {console.log(product.id)}
                  <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                    <Card style={{ height: '450px' }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="140"
                          image={product.images && product.images[0]}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {product.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            style={{ overflow: 'hidden' }}
                          >
                            {product.shortDescription}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="h2">
                            {product.originalPrice} ₫{' '}
                            {`-${Math.floor((product.salePrice / product.originalPrice) * 100)}%`}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ProductList;
