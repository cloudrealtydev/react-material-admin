import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Avatar, withStyles, Typography} from '@material-ui/core';
import {LocationOn as LocationOnIcon } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BookingIcon from './icons/booking_icon.png';
import TripAdvisor from './icons/tripadvisor_icon.png';
import GoogleIcon from './icons/google.jpg';
import styles from './styles';


class ReviewCard extends Component {
  render() {
    const { classes, review } = this.props;
    console.log(review);
    let sourceSite;
    if (review.source === 'Booking.com') {
      sourceSite = <img alt="Booking.com" className={classes.site} src={BookingIcon}/>;
    } else if (review.source === 'TripAdvisor') {
      sourceSite = <img alt="TripAdvisor" className={classes.site} src={TripAdvisor}/>;
    } else if (review.source === 'Google') {
      sourceSite = <img alt="Google" className={classes.site} src={GoogleIcon}/>;
    }

    return (
      <Card className={classes.card}>

        <CardContent>

          <div className={classes.details}>

            <div className={classes.imageWrapper}>
              <Avatar className={classes.avatar} src={review.avatarUrl}>
                {review.name.charAt(0)}
              </Avatar>
            </div>

            <div className={classes.locationDetails}>

              <Typography className={classes.title} variant="h4">
                {review.name}
              </Typography>

              <Typography className={classes.location} variant="h4">
                {review.location && <LocationOnIcon className={classes.icon} />}
                {review.location}
              </Typography>

              <Typography className={classes.location} variant="h4">
                {review.date}
              </Typography>

            </div>

            <div className={classes.siteDetails}>
              {sourceSite}

              <Typography className={classes.location} variant="h4">
                {review.source}
              </Typography>

              <Typography className={classes.title} variant="h4">
                {review.score}
              </Typography>

            </div>

          </div>

          <div>

            <Typography className={classes.description} variant="body1">
              {review.comment}
            </Typography>

          </div>

        </CardContent>

      </Card>
    );
  }
}

ReviewCard.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired
};

export default withStyles(styles)(ReviewCard);
