import {cloneElement, useState} from 'react';
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
  Button,
  Drawer,
  IconButton,
  styled,
} from '@mui/material';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../assets/logo.png';
import useResponsive from '../hooks/useResponsive';

  const LogoContainer = styled((props) => <Box {...props} />)(({theme}) => ({
    height: 24,
    [theme.breakpoints.down('lg')] : {
      height: 22
    },
    [theme.breakpoints.down('md')] : {
      height: 20
    },
    [theme.breakpoints.down('sm')] : {
      height: 18
    }
  }))

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

    return cloneElement(children, {
       style: {boxShadow: trigger ?? '0 1.2rem 3.2rem rgb(0 0 0 / 3%)',  backgroundColor: trigger ?? 'rgba(249, 250, 251, 0.97)'}
    });
  }

  const NavLink = ({children, path}) => {
    return (
      <Link to={`/${path}`} underline='none' component={RouterLink}>
          <Typography color='textPrimary' variant='h6' component='p' fontWeight='500'>{children}</Typography>
      </Link>
    )
  }

  const NavMenu = ({isMenuOpen, onMenuOpen, onMenuClose}) => {
     return (
      <>
        <IconButton onClick={onMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Drawer
        open={isMenuOpen}
        onClose={onMenuClose}
        anchor='right'
        PaperProps={{sx: {width: 280}}}
        >
          <Stack spacing={3} alignItems='flex-start' sx={{p: 3}}>
            <NavLink path='shop'>Shop</NavLink>
            <NavLink path='dashboard/product/list'>Dashboard</NavLink>
            <NavLink path='/'>Product</NavLink>
            <NavLink path='/'>Product</NavLink>
            <NavLink path='/'>Product</NavLink>
            <Button variant="contained" href="#" sx={{ boxShadow: 'none', p:'5px 29px'}}>
              <Typography variant='h6'>Sign in</Typography>
            </Button>
          </Stack> 
        </Drawer>
      </>
     )
  }

export const Navigation = (props) => {
  const isDesktop = useResponsive('up', 'md');

  const [open, setOpen] = useState(false)
  const onMenuOpen = () => setOpen(true)
  const onMenuClose = () => setOpen(false)

  return (
    <>
      <ElevationScroll>
        <AppBar sx={{ backgroundColor: 'grey.100', px: 5}} elevation={0}>
          <Toolbar sx={{justifyContent:'space-between', height: 80, maxWidth: 1350, width: '100%', margin: '0 auto'}} disableGutters>
            <NavLink path=''>
              <LogoContainer component='img' 
              alt="Your logo."
              src={ Logo }
               />
            </NavLink>
            {
            isDesktop 
            ? <Stack direction='row' spacing={{lg: 5, md: 3}} alignItems='center'>
              <NavLink path='shop'>Shop</NavLink>
              <NavLink path='dashboard/product/list'>Dashboard</NavLink>
              <NavLink path='/'>Product</NavLink>
              <NavLink path='/'>Product</NavLink>
              <NavLink path='/'>Product</NavLink>
              <Button variant="contained" href="#" sx={{ boxShadow: 'none', p:'5px 29px'}}>
                <Typography variant='h6'>Sign in</Typography>
              </Button>
            </Stack> 
            : <NavMenu isMenuOpen={open} onMenuOpen={onMenuOpen} onMenuClose={onMenuClose}  />
            }
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
