import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
  IconButton,
  Toolbar,
  Typography,
  Select,
  MenuItem
} from '@material-ui/core';

// Material icons
import {
  Menu as MenuIcon,
  Close as CloseIcon
} from '@material-ui/icons';

// Shared services
import { getNotifications } from 'services/notification';

import TR from './icons/TR_flag.png';
import EN from './icons/US_flag.png';
// Component styles
import styles from './styles';

class Topbar extends Component {

  signal = true;

  state = {
    notifications: [],
    notificationsLimit: 4,
    notificationsCount: 0,
    notificationsEl: null,
    names: [],
    selectedLang: ''
  };

  async getNotifications() {
    try {
      const { notificationsLimit } = this.state;

      const { notifications, notificationsCount } = await getNotifications(
        notificationsLimit
      );

      if (this.signal) {
        this.setState({
          notifications,
          notificationsCount
        });
      }
    } catch (error) {
      return;
    }
  }

  componentDidMount() {
    this.signal = true;
    this.getNotifications();
  }

  componentWillUnmount() {
    this.signal = false;
  }

  /*handleSignOut = () => {
    const { history } = this.props;

    localStorage.setItem('isAuthenticated', false);
    history.push('/sign-in');
  };

  handleShowNotifications = event => {
    this.setState({
      notificationsEl: event.currentTarget
    });
  };

  handleCloseNotifications = () => {
    this.setState({
      notificationsEl: null
    });
  };*/

  handleChangeLang = (value) => {
    this.setState({
      selectedLang: value
    });
  };

  render() {

    const {
      classes,
      className,
      title,
      isSidebarOpen,
      onToggleSidebar
    } = this.props;

    const {selectedLang } = this.state;

    const rootClassName = classNames(classes.root, className);

   /* this.setState({
      selectedLang: '10'
    });*/

    this.state.selectedLang='10';

    /*const showNotifications = Boolean(notificationsEl);*/

    return (
      <Fragment>
        <div className={rootClassName}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              className={classes.menuButton}
              onClick={onToggleSidebar}
              variant="text"
            >
              {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Typography
              className={classes.title}
              variant="h4"
            >
              {title}
            </Typography>
            <FormControl className={classes.formControl}>
              <Select
                onChange={event => this.handleChangeLang(event.target.value)}
                value={selectedLang}
              >
                <MenuItem value={10} ><img alt="TR" className={classes.icon} src={TR}/>
                </MenuItem>
                <MenuItem value={20}><img alt="EN" className={classes.icon} src={EN}/>
                </MenuItem>
              </Select>
            </FormControl>

          </Toolbar>
        </div>
      </Fragment>
    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  title: PropTypes.string
};

Topbar.defaultProps = {
  onToggleSidebar: () => {}
};

export default compose(
  withRouter,
  withStyles(styles)
)(Topbar);
