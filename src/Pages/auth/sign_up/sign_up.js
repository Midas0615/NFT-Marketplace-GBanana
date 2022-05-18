import React from 'react';
import { Grid, Breadcrumbs } from '@material-ui/core';
import { CrumbLink, Heading, HeadGrid, FormGrid, FormArea, Row } from './style';
import { TextField, AutoComplete } from '../../../Component';

const countries = [
  { id: 'AD', value: 'Andorra' },
  { id: 'AE', value: 'United Arab Emirates' },
  { id: 'AF', value: 'Afghanistan' },
];

const SignUp = () => {
  const onChange = (e, option) => console.log(option);
  return (
    <Grid>
      <HeadGrid
        justify='center'
        alignItems='center'
        container
        direction='column'
      >
        <Grid item>
          <Heading>Sign up</Heading>
        </Grid>
        <Grid item>
          <Breadcrumbs aria-label='breadcrumb'>
            <CrumbLink to='/'>Home</CrumbLink>
            <CrumbLink to={'/sign-up'}>Sign up</CrumbLink>
          </Breadcrumbs>
        </Grid>
      </HeadGrid>
      <FormGrid container justify='center'>
        <FormArea container>
          <Row justify='space-between' spacing={2} container>
            <Grid xs={6} item>
              <TextField label='Name' placeholder='e. g. John David' />
            </Grid>
            <Grid xs={6} item>
              <TextField
                label='Email Address'
                placeholder='Enter Email Addres'
              />
            </Grid>
          </Row>
          <Row container>
            <TextField
              label='Password'
              placeholder='Set up your password'
              type='password'
            />
          </Row>
          <Row spacing={2} justify='space-between' container>
            <Grid xs={6} item>
              <TextField label='Select city' placeholder='New York' />
            </Grid>
            <Grid xs={6} item>
              <AutoComplete
                label='What type of art are you into?'
                placeholder='Music'
                options={countries}
                onChange={onChange}
              />
            </Grid>
          </Row>
        </FormArea>
      </FormGrid>
    </Grid>
  );
};

export default SignUp;
