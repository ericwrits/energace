// next
import NextLink from 'next/link';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Box, Container, Typography, Button, Stack } from '@mui/material';
// routes
import Routes from '../../../routes';
// components
import { Iconify, Image } from '../../../components';

import PropTypes from 'prop-types';

import { SvgIconStyle } from '../../../components';


// ----------------------------------------------------------------------

const CORE_VALUES  = [ 
  {
    title: 'Psychoeducational Assessment',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_seo.svg',
    description: "This is Energace’s comprehensive diagnostic standardized assessment of a child’s cognitive and academic abilities. It is administered by a psychologist and combines clinical interview, observation and historical records to help understand how a child learns, and identify if and how they struggle. During this assessment we also evaluate other concerns such as attention-deficit/hyperactivity disorder or anxiety and recommendations for your child are based on a combination of standardized test results and the evaluation of psychosocial and mental health issues.",
  },
  {
    title: 'Cognitive assessment',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_mail.svg',
    description: 'Our cognitive assessment focuses on measuring and ascertaining general learning ability, cognitive function and current cognitive development in key areas for individuals. This helps us appraise the weaker or stronger cognitive skills (this is how the brain takes in, process and give out information) and how best to develop and nurture those skills. This assessment has no diagnostic result.',
  },
  {
    title: 'Reading Assessment',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_analysis.svg',
    description: "This assessment is focused on evaluating a child or a person’s reading, spelling and writing capacity; and reading age. We also include a Cognitive rating scale that aids in evaluating an individual’s cognitive development. This assessment helps us draw our conclusions on how best to proceed with our reading and literacy therapy",
  },
  {
    title: 'CBT Assessment',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_bullhorn.svg',
    description: 'Cognitive Behavioural Therapy assessment is a form of clinical interview and clinical observation that enables the therapist and the client break down the client’s issues to establish an understanding of the reason and the underlying fuel of the client’s individual issues or thought process. This therefore aims at making therapy a likely success by creating a treatment plan',
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

export default function MarketingServices() {
  return (
    <RootStyle>
      <Container>

        <Box
          sx={{
            display: 'grid',
            rowGap: { xs: 8, md: 10 },
            columnGap: 10,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {CORE_VALUES.map((value) => (
            <div key={value.title}>
              <SvgIconStyle
                src={value.icon}
                color="info"
                sx={{ width: 64, height: 64, mx: 'auto', bgcolor: 'primary.main' }}
              />
              <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
                {value.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </div>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
