// icons
import emailIcon from '@iconify/icons-carbon/email';
import licenseGlobal from '@iconify/icons-carbon/license-global';
// @mui
import { styled } from '@mui/material/styles';
import {
  Grid,
  Stack,
  Button,
  Divider,
  Container,
  Typography,
  FilledInput,
  InputAdornment,
} from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// components
import { Image, BgOverlay, Iconify } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(15, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(20, 0),
  },
}));

// ----------------------------------------------------------------------

export default function ServicesWorkPerformanceImprovement() {
  return (
    <RootStyle>
      <Container sx={{ position: 'relative', zIndex: 9 }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8} 
          alignItems="center">
            <Stack
              spacing={3}
              sx={{
                mb: 5,
                mx: 'auto',
                maxWidth: 980,
                textAlign: 'center',
                color: 'common.grey',
              }}
            >
              <Typography variant="h1">How we improve work place performance </Typography>
              <Typography sx={{ opacity: 0.72 }}>
              Studies by WHO shows that the global economy losses about US $ 1 trillion per year in productivity due to depression; anxiety; stress induced environments and inability to handle such stressors.

              Organizations need employees (top level, middle level and low level) who have the ability to assimilate, process and comprehend information in an efficient and effective manner that allows them to take actions to facilitate the overall strategy of the business. Today organizations are facing a number of issues that undermine the general productivity of employees. We aim to use our Cognitive Training Programme; Brainwave Entrainment Therapy; and Cognitive Behavioural Therapy to achieve efficacy in work performance; promote relaxation; improving mood, emotional well-being, logical thinking and cognitive skills
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

