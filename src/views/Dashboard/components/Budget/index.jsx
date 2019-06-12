import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import {LinearProgress, withStyles} from '@material-ui/core';

// Material components
import { Typography } from '@material-ui/core';

// Material icons
import {
  ArrowDownward as ArrowDownwardIcon
} from '@material-ui/icons';

// Shared components
import { Paper } from 'components';
import BookingIcon from '../icons/booking_icon.png'
// Component styles
import styles from './styles';

class Budget extends Component {
  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Paper
        {...rest}
        className={rootClassName}
      >
        <div className={classes.content}>
          <div className={classes.details}>
            <Typography
              className={classes.title}
              variant="body2"
            >
              Booking.com
            </Typography>
            <Typography
              className={classes.value}
              variant="h3"
            >
              7.3
            </Typography>
          </div>
          <div className={classes.iconWrapper}>
            <img alt="Booking.com"  src={BookingIcon}/>
          </div>
        </div>
        <div>
          <div className={classes.progressWrapper}>
            <Typography variant="body1">Staff: %89</Typography>
            <LinearProgress
              value={89}
              variant="determinate"
            />
          </div>
          <div className={classes.progressWrapper}>
            <Typography variant="body1">Facilities: %30</Typography>
            <LinearProgress
              value={30}
              variant="determinate"
            />
          </div>
          <div className={classes.progressWrapper}>
            <Typography variant="body1">Cleanliness: %64</Typography>
            <LinearProgress
              value={64}
              variant="determinate"
            />
          </div>
        </div>
        <div className={classes.footer}>
          <Typography
            className={classes.difference}
            variant="body2"
          >
            <ArrowDownwardIcon />
            12%
          </Typography>
          <Typography
            className={classes.caption}
            variant="caption"
          >
            Since last month
          </Typography>
        </div>
      </Paper>
    );
  }
}

Budget.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Budget);
