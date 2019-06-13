import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import {CircularProgress, Grid, Typography} from '@material-ui/core';
import { Dashboard as DashboardLayout } from 'layouts';
/*import { getReviews } from 'services/reviews';*/
import { getReviews } from 'services/reviews/mock-data';
import ReviewsToolbar from './ReviewsToolbar/ReviewsToolbar';
import ReviewCard from './ReviewCard/ReviewCard';
import styles from './styles';

class Reviews extends Component {
  signal = true;

  state = {
    isLoading: false,
    limit: 6,
    reviews: [],
    reviewsTotal: 0,
    error: null
  };

  async getReviews(limit) {
    try {
      this.setState({ isLoading: true });

      const { reviews, reviewsTotal } = await getReviews(limit);

      if (this.signal) {
        this.setState({
          isLoading: false,
          reviews,
          reviewsTotal,
          limit
        });
      }
    } catch (error) {
      if (this.signal) {
        this.setState({isLoading: false, error});
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

  renderReviews() {
    const { classes } = this.props;
    const { isLoading, reviews } = this.state;

    if (isLoading) {
      return (
        <div className={classes.progressWrapper}>
          <CircularProgress />
        </div>
      );
    }

    if (reviews.length === 0) {
      return (
        <Typography variant="h3">There are no reviews available.</Typography>
      );
    }

    return (
      <Grid container spacing={3}>
        {reviews.map(review => (
          <Grid item key={review.id} lg={12} md={12} xs={12} sm={12}>
            <Link to="#">
              <ReviewCard review={review} />
            </Link>
          </Grid>
        ))}
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Reviews">
        <div className={classes.root}>
          <ReviewsToolbar />
          <div className={classes.content}>{this.renderReviews()}</div>
        </div>
      </DashboardLayout>
    );
  }
}

Reviews.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Reviews);
