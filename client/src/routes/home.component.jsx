import {
  Toolbar,
  Stack,
  CssBaseline,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import { Container } from '@mui/system';



const Home = () => {
  return (
    <main>
      <Container maxWidth='mx' sx={{mt:7, maxWidth:'1300px'}}>
        <Grid container spacing={10} alignItems='center'>
          <Grid item sm={12} md={6}>
            <Stack>
            <Typography variant='h2' component='h1' color='textPrimary' sx={{ lineHeight:1.05, mb:3.2}}>
              A healthy meal delivered to your door, every single day
            </Typography>
            <Typography variant='h6' component='p' color='textSecondary' sx={{fontWeight: 400, mb:3.8}}>
              The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.
            </Typography>
            <Toolbar disableGutters>
              <Button variant="contained" href="#" sx={{boxShadow: 'none', borderRadius: '9px'}}>
                <Typography color='primary.white' variant='h6' sx={{fontWeight: '600', fontSize: '1.2rem', padding: '6px 18px'}} textTransform='capitalize'>Start eating well</Typography>
              </Button>
            </Toolbar>
            </Stack>
            
          </Grid>
          <Grid item sm={12} md={6}>
            <picture>
              <img src={require('../assets/imgs/hero.webp')} alt='Woman enjoying food, meals in storage container, and food bowls on a table' style={{maxWidth:'100%'}}></img>
            </picture>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Home;
