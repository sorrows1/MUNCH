import { Link as RouterLink } from 'react-router-dom';
import {
  Toolbar,
  Stack,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import { Container } from '@mui/system';


import Image from '../components/Image.component';

const Home = () => {
  return (
    <main>
      <Container maxWidth='mx' sx={{mt:5, maxWidth:'1300px'}}>
        <Grid container spacing={10} alignItems='center'>
          <Grid item sm={12} md={6}>
            <Stack>
            <Typography variant='h2' component='h1' color='textPrimary' sx={{ lineHeight:1.05, mb:3.2}}>
              A healthy meal delivered to your door, every single day
            </Typography>
            <Typography variant='h6' component='p' color='textSecondary' sx={{fontWeight: 400, mb:3.8}}>
              The most healthy food-commerce store that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.
            </Typography>
            <Toolbar disableGutters>
              <Button variant="contained" LinkComponent={RouterLink} to='/shop' sx={{boxShadow: 'none', padding: '11px 18px'}}>
                <Typography variant='h6' >Start eating well</Typography>
              </Button>
            </Toolbar>
            </Stack>
            
          </Grid>
          <Grid item sm={12} md={6}>
            <picture>
              <Image src='/static/imgs/hero.webp' alt='Woman enjoying food, meals in storage container, and food bowls on a table' />
            </picture>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Home;
