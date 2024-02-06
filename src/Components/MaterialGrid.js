import React from 'react';
import { Button, Grid } from '@mui/material';

const MaterialGrid = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={9} md={6}>
        <Button variant='contained' fullWidth>1</Button>
      </Grid>
      <Grid item xs={12} sm={3} md={2}>
        <Button variant='contained' fullWidth>2</Button>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <Button variant='contained' fullWidth>3</Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant='contained' fullWidth>4</Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant='contained' fullWidth>1</Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant='contained' fullWidth>1</Button>
      </Grid>
    </Grid>
  );
};

export default MaterialGrid;
