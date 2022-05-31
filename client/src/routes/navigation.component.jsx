import React from 'react';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Stack,
  useScrollTrigger,
  Zoom,
  Box,
  Fab,
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

  const ElevationScroll = (props) => {
    const { children} = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
       style: {boxShadow: trigger ? '0 1.2rem 3.2rem rgb(0 0 0 / 3%)' : undefined}
    });
  }

  const NavLink = ({children, path}) => {
    return (
      <Link to={`/${path}`} underline='none' component={RouterLink}>
          <Typography color='textPrimary' variant='h6' component='p' fontWeight='500'>{children}</Typography>
      </Link>
    )
  }

export const Navigation = (props) => {

  return (
    <>
      <ElevationScroll>
        <AppBar sx={{ backgroundColor: 'grey.100', px: 5}} elevation={0}>
          <Toolbar sx={{justifyContent:'space-between', height: 80, maxWidth: 1350, width: '100%', margin: '0 auto'}} disableGutters>
            <NavLink path=''>
              <Box component='img' 
              sx={{ height: 24 }}
              alt="Your logo."
              src={ Logo }
               />
            </NavLink>
            <Stack direction='row' spacing={5} alignItems='center'>
              <NavLink path='shop'>Shop</NavLink>
              <NavLink path='product'>Product</NavLink>
              <NavLink path='product'>Product</NavLink>
              <NavLink path='product'>Product</NavLink>
              <NavLink path='product'>Product</NavLink>
              <Button variant="contained" href="#" sx={{ boxShadow: 'none', p:'5px 29px'}}>
                <Typography variant='h5' sx={{fontWeight: '600', fontSize: '1rem'}}>Sign in</Typography>
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar id='back-to-top-anchor' sx={{height: 80}} />
      <Outlet></Outlet>
      <ScrollTop {...props}>
        <Fab color='secondary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};
