import { Box } from '@material-ui/core';
import AboutPage from 'components/About';
import Footer from 'components/Footer';
import Header from 'components/Header';
import PageNotFound from 'components/PageNotFound';
import ProductFeature from 'features/Product';
import HomePage from './features/Product/components/HomePage';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Box>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Box>
  );
}

export default App;
