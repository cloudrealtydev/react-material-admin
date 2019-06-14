import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  MenuItem,
  Select,
  Typography,
  TextField,
  InputAdornment,
  OutlinedInput,
  FormControl,
  withStyles
}
  from '@material-ui/core';

import styles from './styles';

import SearchIcon from '@material-ui/icons/SearchOutlined';

class ReviewsToolbar extends Component {

  state = {
    selectedSourceOptions: '0',
    selectedSortOptions: '0',
    searchText:'',
  };

  handleChangeSourceOptions = (value) => {
    this.setState({
      selectedSourceOptions: value
    });
  };

  handleChangeSortOptions = (value) => {
    this.setState({
      selectedSortOptions: value
    });
  };

  handleChangeSearchText = (value) => {
    this.setState({
      searchText: value
    });
  };

  render() {
    const { classes, className } = this.props;

    const {selectedSourceOptions, selectedSortOptions, searchText } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <div className={rootClassName}>
        <FormControl className={classes.formControl}>
          <Select
            onChange={event => this.handleChangeSourceOptions(event.target.value)}
            value={selectedSourceOptions}
            input={<OutlinedInput/>}
          >
            <MenuItem value={0}>
              <Typography
                variant="h6"
              >
                Bütün İncelemeler
              </Typography>
            </MenuItem>

            <MenuItem value={1}>
              <Typography
                variant="h6"
              >
                Google
              </Typography>
            </MenuItem>

            <MenuItem value={2}>
              <Typography
                variant="h6"
              >
                Booking.com
              </Typography>
            </MenuItem>

            <MenuItem value={3}>
              <Typography
                variant="h6"
              >
                TripAdvisor
              </Typography>
            </MenuItem>

          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Select
            onChange={event => this.handleChangeSortOptions(event.target.value)}
            value={selectedSortOptions}
            input={<OutlinedInput/>}
          >
            <MenuItem value={0}>
              <Typography
                variant="h6"
              >
                En alakalı
              </Typography>
            </MenuItem>

            <MenuItem value={1}>
              <Typography
                variant="h6"
              >
                En yeni
              </Typography>
            </MenuItem>

            <MenuItem value={2}>
              <Typography
                variant="h6"
              >
                En yüksek puan
              </Typography>
            </MenuItem>

            <MenuItem value={3}>
              <Typography
                variant="h6"
              >
                En düşük puan
              </Typography>
            </MenuItem>

          </Select>
        </FormControl>
          <TextField
            id="outlined-adornment-weight"
            className={classes.inputField}
            variant="outlined"
            placeholder="Yorumlarda ara"
            value={searchText}
            onChange={event => this.handleChangeSearchText(event.target.value)}
            InputProps={{
              startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
              )
            }}
          />
      </div>
    );
  }
}

ReviewsToolbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReviewsToolbar);
