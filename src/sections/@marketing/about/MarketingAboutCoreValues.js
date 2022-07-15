// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Box, Grid } from '@mui/material';
// components
import { SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Customer Satisfaction',
    description: 'Our main aim is to give the best to our clients.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_agreement.svg',
  },
  {
    title: 'Transparency',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_transparency.svg',
  },
  {
    title: 'Reputation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_reputation.svg',
  },
  {
    title: 'Cooperation',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_popularity.svg',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutCoreValues() {
  return (
    <RootStyle>
      <Container>
      <Grid
      rowSpacing={{ xs: 0, md: 0 }}
      columnSpacing={{ md: 3 }}
      justifyContent="space-between"
    >
      <Grid item xs={12} md={12} sx={{ textAlign: { xs: 'center', md: '' } }}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          About Us
        </Typography>

        <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
          Our Mission
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
        To build a psychology practice dedicated to making available effective and innovative mental health 
        solutions in individual lives, schools and workplace. 
        Our goal is singular in providing services to enhance emotional well being for individuals.
        We aim to boost the cognitive and learning capacity of the average African child to be at par with or 
        exceed global standards. We also seek to advance the cognitive abilities and optimize the mental well 
        being of the average African professionals; equipping people with the abilities to navigate their own 
        minds, emotions and brain mechanism skillfully.
        </Typography>
        
      </Grid>
    </Grid>
      </Container>
    </RootStyle>
  );
}
