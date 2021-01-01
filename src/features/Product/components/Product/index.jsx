import { Box, CardActionArea, Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '3rem auto',
  },
}));

function Product({ product }) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Container>
        <Box mt={5} style={{ display: 'flex', width: '100%', justifyContent: 'flex-start' }}>
          <Box
            style={{
              width: '40%',
              borderRadius: '5px',
              backgroundColor: '#e6f2ff',
              minHeight: '500px',
            }}
          >
            <Box className={classes.root}>
              <Card style={{ height: '450px' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="300"
                    image={product.images[0]}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="150"
                      image={product.images[0]}
                      title="Contemplative Reptile"
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
          <Box
            style={{
              width: '60%',
              borderRadius: '5px',
              backgroundColor: '#f0f5f5',
              minHeight: '500px',
            }}
          >
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography color="textSecondary"></Typography>
                <Typography variant="body2" component="p">
                  {product.salePrice}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Product;
