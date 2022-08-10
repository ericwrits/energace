import PropTypes from 'prop-types';
// icons
import trophyIcon from '@iconify/icons-carbon/trophy';
import dataVis4 from '@iconify/icons-carbon/data-vis-4';
import increaseLevel from '@iconify/icons-carbon/increase-level';
import userCertification from '@iconify/icons-carbon/user-certification';
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Grid, Box, Container, Typography, Button } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import { Iconify, CountUpNumber, Image } from '../../../components';

// ----------------------------------------------------------------------

const SUMMARY = [
  { title: 'Years of experience', total: 12, icon: increaseLevel },
  { title: 'Awards', total: 20, icon: trophyIcon },
  { title: 'Projects', total: 150, icon: dataVis4 },
  { title: 'Happy clients', total: 32000, icon: userCertification },
];

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const IconStyle = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})(({ color, theme }) => ({
  width: 160,
  height: 160,
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
  color: theme.palette[color].darker,
  border: `dashed 2px ${alpha(theme.palette[color].main, 0.24)}`,
  '&:before': {
    zIndex: 8,
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 'calc(100% - 48px)',
    height: 'calc(100% - 48px)',
    background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette[color].main} 0deg, ${theme.palette[color].light} 360deg)`,
  },
  '& svg': {
    zIndex: 9,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingCognitive() {
  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Image
              alt="teams"
              src="https://energace.net/images/ETLC.gif"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h2">How Everyone’s brain can be trained</Typography>
            <Typography sx={{color: 'text.secondary'}}>Cognitive Training Program:</Typography>
        <Typography > is an online-based software program designed with research input of over 4 decades to train and develop the human brain. That is, just as the human body requires physical training to build stamina, flexibility and coordination of physical activities: cognitive training aims at developing and strengthening stamina, strength, flexibility and coordination of the brain’s capacity for mental activity. 
          Research shows that our cognitive skills accounts for 40% to 50% of the foundation of learning; hence, an intentional attempt should be made knowing that learning or cognitive capacities aren’t fixed and can be developed as a result of the neuroplasticity of the brain. This program can be used online via our platform for individuals between the ages 6 to 106 years at home, school or work.
        
          Several people participate in cognitive training for a variety of reasons. Some of the basic reasons are
        </Typography>
        <Typography >
          1.	Cognitive training primary purpose often, is to help in the improvement of one’s ability to learn. Children and adults who struggle with learning can strengthen weaker cognitive skills as well as continue to develop stronger skills in order to speed up learning and/or make learning easier.
        </Typography> 
        <Typography >
          2.	Adults often participate in cognitive training in order to improve their mental acuity and their ability to manage work tasks efficiently; still other adults use cognitive training to help build cognitive reserve to maintain quality of life as they age. </Typography> 
        <Typography>
          3.	Cognitive training also can play a role in helping individuals of any age recover from acquired cognitive deficits, such as those from traumatic brain injury (TBI) or a stroke, or the effects of diseases or treatments, such as the cognitive effects of chemotherapy.
          While cognitive training often has as its purpose improving one’s ability to learn, it is different from the learning experiences typically provided in formal education, which are not specifically designed to build learning skills. Formal education in school focuses on developing academic skills and knowledge, rather than the processes our brains use to take in, organize, store and retrieve information. Much formal education involves direct instruction, that is, a teacher explaining to a student how to do something.  Cognitive skills are not amenable, generally speaking, to direct instruction, since they operate at a nonconscious level.  For example, one cognitive skill often addressed in cognitive training is working memory, the ability to hold information in mind while one thinks about it.  Trying to explain to someone else how to hold more information in their conscious processing is not effective but working memory can be expanded with the right kind of cognitive training. 
          We intend to develop 43 cognitive skills with this training programme some of which includes; divided attention, flexible attention, visual processing, auditory processing, sensory integration, memory, cognitive flexibility, inhibitory control, working memory and memory.

        
        </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            my: { xs: 8, md: 15 },
          }}
        />

        
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

BoxItem.propTypes = {
  index: PropTypes.number,
  value: PropTypes.shape({
    icon: PropTypes.any,
    title: PropTypes.string,
    total: PropTypes.number,
  }),
};

function BoxItem({ value, index }) {
  return (
    <div>
      <IconStyle color={COLORS[index]}>
        <Iconify icon={value.icon} sx={{ width: 48, height: 48 }} />
      </IconStyle>
      <Typography variant="h2" sx={{ mt: 2, mb: 1 }}>
        <CountUpNumber
          start={value.total / 5}
          end={value.total}
          formattingFn={(value) => fShortenNumber(value)}
        />
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>{value.title}</Typography>
    </div>
  );
}
