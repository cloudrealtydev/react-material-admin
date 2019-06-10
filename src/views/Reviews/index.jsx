import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  IconButton,
  CircularProgress,
  Grid,
  Typography
} from '@material-ui/core';

// Material icons
import {
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Shared services
import { getReviews } from 'services/reviews';

// Custom components
import { ProductsToolbar, ProductCard } from './components';

// Component styles
import styles from './styles';

class Reviews extends Component {
  signal = true;

  state = {
    isLoading: false,
    limit: 6,
    products: [],
    productsTotal: 0,
    error: null
  };

  async getReviews(limit) {
    try {
      this.setState({ isLoading: true });

      const { products, productsTotal } = await getReviews(limit);

      if (this.signal) {
        this.setState({
          isLoading: false,
          products,
          productsTotal,
          limit
        });
      }
    } catch (error) {
      if (this.signal) {
        this.setState({
          isLoading: false,
          error
        });
      }
    }
  }

  componentWillMount() {
    this.signal = true;

    const { limit } = this.state;

    this.getReviews(limit);
  }

  componentWillUnmount() {
    this.signal = false;
  }

  renderProducts() {
    const { classes } = this.props;
    const { isLoading, products } = this.state;

    if (isLoading) {
      return (
        <div className={classes.progressWrapper}>
          <CircularProgress />
        </div>
      );
    }

    if (products.length === 0) {
      return (
        <Typography variant="h6">There are no products available</Typography>
      );
    }

    return (
      <Grid
        container
        spacing={3}
      >
        {products.map(product => (
          <Grid
            item
            key={product.id}
            lg={12}
            md={12}
            xs={12}
            sm={12}
          >
            <Link to="#">
              <ProductCard product={product} />
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Products">
        <div className={classes.root}>
          <ProductsToolbar />
          <div className={classes.content}>{this.renderProducts()}</div>
          {/* <div className={classes.pagination}>
            <Typography variant="caption">1-6 of 20</Typography>
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </div>*/}
        </div>
      </DashboardLayout>
    );
  }
}

Reviews.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Reviews);
