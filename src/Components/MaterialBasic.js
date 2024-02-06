import React from 'react';
import { Button } from '@mui/material';
import { Home } from '@mui/icons-material';
import './Material.css';

const MaterialBasic = () => {
  return (
    <>
      {/* startIcon プロパティにアイコンコンポーネントを指定する */}
      <Button variant='text' color='info' startIcon={<Home />}>Text</Button>
      <Button variant='contained'  color='info'>Contained</Button>
      <Button variant='outlined' color='info' size='large'>Outlined</Button>
    </>
  );
};

export default MaterialBasic;

