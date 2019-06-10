import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, Button } from '@material-ui/core';
import { DisplayMode, SearchInput } from 'components';

import styles from './styles';

class ReviewsToolbar extends Component {
  render() {
    const { classes, className } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
{/*        <div className={classes.row}>
          <span className={classes.spacer} />
          <Button
            color="primary"
            size="small"
            variant="outlined"
          >
            Add
          </Button>
        </div>
        <div className={classes.row}>
          <SearchInput
            className={classes.searchInput}
            placeholder="Search product"
          />
          <span className={classes.spacer} />
          <DisplayMode mode="grid" />
        </div>*/}
      </div>
    );
  }
}

ReviewsToolbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReviewsToolbar);
