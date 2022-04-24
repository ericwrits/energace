import PropTypes from 'prop-types';
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Stack, Container, Typography, Button, Divider } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import { Iconify, Image } from '../../../components';

import NextLink from 'next/link';
// routes
import Routes from '../../../routes';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    paddingBottom: 0,
    paddingTop: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingLandingAbout() {
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
              Who We Are
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              Energace Therapeutic Learning Consults is a psychological practice
              focused on using its therapeutic initiatives tomake credible
              psychological and educational assessments. Our methods are well developed to enhance learning,
              improve cognitive skills, literacy skills and improve emotional state.
            </Typography>
            <NextLink href={Routes.marketing.about} prefetch={false}>
              <Button size="large" endIcon={<Iconify icon={directionStraightRight} />} sx={{ mt: 5 }}>
                Lean more
              </Button>
            </NextLink>
            
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

LineItem.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  total: PropTypes.string,
};

function LineItem({ total, label, text }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      divider={<Divider orientation="vertical" flexItem sx={{ ml: 3, mr: 5 }} />}
    >
      <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
        <Stack direction="row">
          <Typography variant="h2">{total}</Typography>
          <Typography variant="h4" sx={{ color: 'primary.main' }}>
            +
          </Typography>
        </Stack>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          {label}
        </Typography>
      </Stack>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {text}
      </Typography>
    </Stack>
  );
}
