import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Stack,
  useScrollTrigger,
  Zoom,
  Box,
  Fab,
  CssBaseline,
  Typography,
  Link,
  Button
} from '@mui/material';


import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Logo from '../assets/logo.png'

  const ScrollTop = (props) => {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor'
      );

      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };

    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role='presentation'
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }

  function ElevationScroll(props) {
    const { children} = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
       style: {boxShadow: trigger ? '0 1.2rem 3.2rem rgb(0 0 0 / 3%)' : undefined}
    });
  }


export const Navigation = (props) => {

  return (
    <>
      <CssBaseline />
      <ElevationScroll>
        <AppBar sx={{backgroundColor: 'primary.white', px: 4.8}} elevation={0}>
          <Toolbar sx={{justifyContent: 'space-between', height: 86}}>
            <Link href='/'>
              <Box component='img' sx={{
              height: 24,
              }}
              alt="Your logo."
              src={Logo} />
            </Link>
            <Stack direction='row' spacing={6} alignItems='center'>
              <Link href='/product' underline='none'>
                <Typography color='textPrimary' variant='h6' component='p'>Product</Typography>
              </Link>
              <Link href='/product' underline='none'>
                <Typography color='textPrimary' variant='h6' component='p'>Product</Typography>
                </Link>
              <Link href='/product' underline='none'>
                <Typography color='textPrimary' variant='h6' component='p'>Product</Typography>
                </Link>
              <Link href='/product' underline='none'>
                <Typography color='textPrimary' variant='h6' component='p'>Product</Typography>
                </Link>
              <Button variant="contained" href="#" sx={{boxShadow: 'none', borderRadius: '9px', p:'8px 20px'}}>
                <Typography color='primary.white' variant='h6' sx={{fontWeight: '600', fontSize: '1rem'}}>Sign in</Typography>
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar id='back-to-top-anchor' />
      <Outlet></Outlet>
      <ScrollTop {...props}>
        <Fab color='secondary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};
