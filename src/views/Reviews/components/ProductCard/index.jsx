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

// Material icons
import {
  AccessTime as AccessTimeIcon,
  GetApp as GetAppIcon
} from '@material-ui/icons';

// Shared components
import { Paper } from 'components';

// Component styles
import styles from './styles';

// Shared components
import { Facebook as FacebookIcon } from 'icons';


class ProductCard extends Component {
  render() {
    const { classes, className, product } = this.props;
    const rootClassName = classNames(classes.root, className);

    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.imageWrapper}>
            <Avatar
              className={classes.avatar}
              src={product.imageUrl}
            />
          </div>
          <div className={classes.details}>
            <Typography
              className={classes.title}
              variant="h4"
            >
              {product.name}
            </Typography>
            <Typography
              className={classes.description}
              variant="body1"
            >
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
