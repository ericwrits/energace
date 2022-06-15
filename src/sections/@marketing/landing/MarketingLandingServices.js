import PropTypes from 'prop-types';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Container, Typography, Card, Box } from '@mui/material';
// routes
import Routes from '../../../routes';
// components
import { Iconify, TextMaxLine, SvgIconStyle } from '../../../components';
import { IconButtonAnimate } from '../../../components/animate';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'info', 'error'];

const SERVICES = [ 
  {
    name: 'Psychoeducational Assessment',
    icon: 'https://cdn-icons-png.flaticon.com/512/1491/1491165.png',
    text: "This is Energace's comprehensive diagnostic standardized assessment of a child's cognitive and academic abilities",
    path: Routes.marketing.services,
  },
  {
    name: 'Cognitive assessment',
    icon: 'https://cdn-icons-png.flaticon.com/512/1491/1491171.png',
    text: 'Our cognitive assessment focuses on measuring and ascertaining general learning abilities',
    path: Routes.marketing.services,
  },
  {
    name: 'Reading Assessment',
    icon: 'https://cdn-icons-png.flaticon.com/512/3997/3997770.png',
    text: 'This assessment is focused on evaluating a child or a person reading',
    path: Routes.marketing.services,
  },
  {
    name: 'CBT Assessment',
    icon: 'https://cdn-icons-png.flaticon.com/512/3588/3588472.png',
    text: 'Cognitive Behavioural Therapy assessment is a form of clinical interview and observation that enables the therapist and client',
    path: Routes.marketing.services,
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingLandingServices() {
  return (
    <RootStyle>
      <Container>
        <Stack
          sx={{
            maxWidth: 480,
            mb: { xs: 8, md: 5 },
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Our Services
          </Typography>

          <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
            How we get to know what's up
          </Typography>
          
        </Stack>

        <Box
          sx={{
            alignItems: 'center',
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {SERVICES.map((service, index) => (
            <ServiceItem key={service.name} service={service} index={index} />
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

ServiceItem.propTypes = {
  index: PropTypes.number,
  service: PropTypes.shape({
    icon: PropTypes.any,
    name: PropTypes.string,
    path: PropTypes.string,
    text: PropTypes.string,
  }),
};

function ServiceItem({ service, index }) {
  const { name, icon, text, path } = service;

  return (
    <Card
      sx={{
        px: 4,
        py: 5,
        textAlign: 'center',
        ...(index === 0 && {
          boxShadow: (theme) => ({ md: theme.customShadows.z8 }),
        }),
        ...(index === 1 && {
          py: { xs: 5, md: 8 },
        }),
        ...(index === 2 && {
          py: { xs: 5, md: 10 },
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
        ...(index === 3 && {
          boxShadow: (theme) => ({ md: theme.customShadows.z4 }),
        }),
      }}
    >
      {/* <Image alt={icon} src={icon} sx={{ width: 88, height: 88, mx: 'auto' }} /> */}
      <SvgIconStyle
        src={icon}
        sx={{
          width: 88,
          height: 88,
          mx: 'auto',
          color: (theme) => theme.palette[COLORS[index]].light,
        }}
      />

      <Stack spacing={1} sx={{ my: 5 }}>
        <TextMaxLine variant="h6">{name}</TextMaxLine>
        <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
          {text}
        </TextMaxLine>
      </Stack>

      <NextLink href={path} passHref>
        <IconButtonAnimate color="primary">
          <Iconify icon={directionStraightRight} />
        </IconButtonAnimate>
      </NextLink>
    </Card>
  );
}
