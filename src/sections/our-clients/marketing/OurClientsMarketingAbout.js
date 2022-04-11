import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Stack, Container } from '@mui/material';
// components
import { Image } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

OurClientsMarketingAbout.propTypes = {
  brands: PropTypes.array.isRequired,
};

export default function OurClientsMarketingAbout({ brands }) {
  return (
    <RootStyle>
      <Container>
        <Stack alignItems="center" spacing={{ xs: 6, md: 8 }}>
          <Typography variant="h2">Our Partners</Typography>

          <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ maxWidth: 980 }}>
            {brands.slice(0, 5).map((brand) => (
              <Image
                key={brand.id}
                alt={brand.name}
                src={brand.image}
                sx={{
                  height: 49,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            ))}
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
