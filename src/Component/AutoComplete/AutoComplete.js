import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { Label } from './style';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const AutoComplete = ({ label, options, placeholder, onChange }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Label>{label}</Label>
      <Autocomplete
        style={{ width: '100%' }}
        options={options}
        classes={{
          option: classes.option,
        }}
        getOptionLabel={(option) => option.value}
        renderOption={(option) => (
          <React.Fragment>{option.value}</React.Fragment>
        )}
        onChange={(e, option) => onChange(e, option)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant='outlined'
            inputProps={{
              ...params.inputProps,
              autoComplete: +new Date(),
            }}
          />
        )}
      />
    </Grid>
  );
};

export default AutoComplete;
