import React from 'react';
import { Grid } from '@material-ui/core';
import { Label, Input } from './style';

const TextField = ({ label, placeholder, type, autocomplete }) => {
  return (
    <Grid container>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        type={type}
        autocomplete={autocomplete}
      />
    </Grid>
  );
};

TextField.defaultProps = {
  type: 'text',
  autocomplete: +new Date(),
};

export default TextField;
