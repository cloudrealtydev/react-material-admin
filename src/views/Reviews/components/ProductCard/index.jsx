import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import {Avatar, Button, withStyles} from '@material-ui/core';

// Material components
import { Typography, Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import BookingIcon from './booking_icon.png';
import TripAdvisor from './tripadvisor_icon.png';
// Material icons
import {
  LocationOn as LocationOnIcon,
} from '@material-ui/icons';

// Shared components
import { Paper } from 'components';

// Component styles
import styles from './styles';


class ProductCard extends Component {
  render() {
    const { classes, product } = this.props;

    var sourceSite;
    if (product.source === 'Booking.com') {
      sourceSite = <img alt="Booking.com" className={classes.site} src={BookingIcon}/>;
    } else if (product.source === 'TripAdvisor') {
      sourceSite = <img alt="TripAdvisor" className={classes.site} src={TripAdvisor}/>;
    }

    return (
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.details}>
            <div className={classes.imageWrapper}>
              <Avatar className={classes.avatar} src={product.avatarUrl}/>
            </div>
            <div className={classes.locationDetails}>
              <Typography className={classes.title} variant="h4">
                {product.userName}
              </Typography>
              <Typography className={classes.location} variant="h4">
                <LocationOnIcon className={classes.icon} />
                {product.location}
              </Typography>
              <Typography className={classes.location} variant="h4">
                {product.date}
              </Typography>
            </div>
            <div className={classes.siteDetails}>
              {sourceSite}
              <Typography className={classes.location} variant="h4">
                {product.source}
              </Typography>
              <Typography className={classes.title} variant="h4">
                {product.score}
              </Typography>
            </div>
          </div>
          <div>
            <Typography className={classes.description} variant="body1">
              {product.review}
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCard);
