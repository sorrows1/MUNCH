import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  useScrollTrigger,
  Zoom,
  Box,
  Fab,
} from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Navigation = (props) => {
  function ScrollTop(props) {
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
      elevation: trigger ? 4 : 0,
    });
  }

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar>
            <IconButton></IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              HI
            </Typography>
            <Stack direction='row' spacing={2}>
              <Link to='/product'>HI</Link>
              <Link to='/product'>HI</Link>
              <Link to='/product'>HI</Link>
              <Link to='/product'>HI</Link>
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
