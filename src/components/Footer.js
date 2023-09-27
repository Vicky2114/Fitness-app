import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/l.png';

const Footer = () => (
  <Box mt="80px" bgcolor=" #b7b7b7">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '198px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">made by Vishal Rawat</Typography>
  </Box>
);

export default Footer;
