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

export default function ServicesChildrenLiteracySkillBuilding() {
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
                color: 'common.white',
              }}
            >
              <Typography variant="h1">How we build literacy skills for your children </Typography>
              <Typography sx={{ opacity: 0.72 }}>
              Literacy Solution: reading and comprehension skills are very vital to every pupil and student. Statistics shows that over 32 million people in Nigeria struggle with reading, spelling or dictation and comprehension. An example will be the case of an outright misinterpretation of a comprehension passage, phonics, composition or all kinds of essays as a result of not understanding the importance of planning, simultaneous processing, attention and sequential processing in literacy activities. Our cognitive literacy art program is fully gamified and shown to accelerate the acquisition of literacy skills; from phonics, to spelling, to grammar, to reading, to writing and comprehension. From beginning readers to secondary school learners, the program contains thousands of exercises to build literacy skills quickly and enjoyably.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <BgOverlay />

      <Image
        alt="hero"
        src="https://energace.net/images/hero_1.jpg"
        sx={{ position: 'absolute', top: 0, left: 0, width: 1, height: 1 }}
      />
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

