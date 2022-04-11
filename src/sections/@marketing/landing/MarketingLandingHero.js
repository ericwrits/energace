// icons
import playIcon from '@iconify/icons-carbon/play';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Grid, Stack, Container, Typography, Button, Box } from '@mui/material';
// components
import { Iconify, Image } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
  [theme.breakpoints.up('md')]: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
}));

// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  return (
    <RootStyle>
      <Container>
        <Grid container columnSpacing={10} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={6} lg={5} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Stack spacing={5}>

              <Typography variant="h2" sx={{ color: 'primary.main' }} >Welcome to Energace Therapeutic Learning Consults</Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                Our Innovative therapeutic services helps in addressing a wide range of psycological, mental, behavioural and learning disorders
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent={{ xs: 'center', md: 'unset' }}
                spacing={3}
              >
                <Button variant="contained" size="large" sx={{ bgcolor: 'primary.light' }}>
                  Book an Appointment
                </Button>

                
              </Stack>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={7}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Image
              alt="marketing-market"
              src="https://i.ibb.co/FzN6m4w/ETLC-Logo-Gradient-I.png"
            />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
