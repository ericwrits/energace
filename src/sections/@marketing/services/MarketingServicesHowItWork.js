// @mui
import { styled } from '@mui/material/styles';
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from '@mui/lab';
import { Stack, Typography, Container } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// hooks
import useResponsive from '../../../hooks/useResponsive';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    year: 'Energace',
    title: 'Cognitive Training Program',
    description:
      'is an online-based software program designed with research input of over 4 decades to train and develop the human brain. That is, just as the human body requires physical training to build stamina, flexibility and coordination of physical activities: cognitive training aims at developing and strengthening stamina, strength, flexibility and coordination of the brain’s capacity for mental activity. ',
  },
  {
    year: 'Energace',
    title: 'Cognitive Training Program',
    description:
      'Research shows that our cognitive skills accounts for 40% to 50% of the foundation of learning; hence, an intentional attempt should be made knowing that learning or cognitive capacities aren’t fixed and can be developed as a result of the neuroplasticity of the brain. This program can be used online via our platform for individuals between the ages 6 to 106 years at home, school or work.',
  },
  {
    year: 'Energace',
    title: 'Cognitive Training Program',
    description:
      'Cognitive training primary purpose often, is to help in the improvement of one’s ability to learn. Children and adults who struggle with learning can strengthen weaker cognitive skills as well as continue to develop stronger skills in order to speed up learning and/or make learning easier',
  },
  {
    year: 'Energace',
    title: 'Cognitive Training Program',
    description:
      'Adults often participate in cognitive training in order to improve their mental acuity and their ability to manage work tasks efficiently; still other adults use cognitive training to help build cognitive reserve to maintain quality of life as they age.',
  },
  {
    year: 'Energace',
    title: 'Cognitive Training Program',
    description:
      'Cognitive training also can play a role in helping individuals of any age recover from acquired cognitive deficits, such as those from traumatic brain injury (TBI) or a stroke, or the effects of diseases or treatments, such as the cognitive effects of chemotherapy.',
  },
  {
    year: 'Energace',
    title: 'Cognitive Training Program',
    description:
      'While cognitive training often has as its purpose improving one’s ability to learn, it is different from the learning experiences typically provided in formal education, which are not specifically designed to build learning skills. Formal education in school focuses on developing academic skills and knowledge, rather than the processes our brains use to take in, organize, store and retrieve information. Much formal education involves direct instruction, that is, a teacher explaining to a student how to do something',
  },
  {
    year: 'Energace',
    title: 'Cognitive Training Program',
    description:
      'Cognitive skills are not amenable, generally speaking, to direct instruction, since they operate at a nonconscious level.  For example, one cognitive skill often addressed in cognitive training is working memory, the ability to hold information in mind while one thinks about it.  Trying to explain to someone else how to hold more information in their conscious processing is not effective but working memory can be expanded with the right kind of cognitive training.',
  },
  {
    year: 'Energace',
    title: 'Cognitive Training Program',
    description:
      'We intend to develop 43 cognitive skills with this training programme some of which includes; divided attention, flexible attention, visual processing, auditory processing, sensory integration, memory, cognitive flexibility, inhibitory control, working memory and memory.',
  },
];

const COLORS = ['primary', 'secondary', 'warning', 'success', 'info', 'error', 'primary'];

const RootStyle = styled('div')(({ theme }) => ({
  ...cssStyles().bgImage(),
  padding: theme.spacing(10, 0),
  color: theme.palette.common.white,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingServicesHowItWork() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            textAlign: 'center',
            mx: 'auto',
            mb: { xs: 8, md: 15 },
          }}
        >
          <Typography variant="h2">How Everyone’s brain can be trained</Typography>
        </Stack>

        <Timeline position={isDesktop ? 'alternate' : 'right'}>
          {CORE_VALUES.map((value, index) => {
            const { title, description, year } = value;
            return (
              <TimelineItem
                key={title}
                sx={{
                  '&:before': {
                    display: { xs: 'none', md: 'block' },
                  },
                }}
              >
                <TimelineSeparator>
                  <TimelineDot color={COLORS[index]} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                  <Typography variant="subtitle3" sx={{ color: `${COLORS[index]}.main` }}>
                    {year}
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 0.5, mb: 1 }}>
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.72,
                      maxWidth: { md: 360 },
                      ...(index % 2 && {
                        ml: 'auto',
                      }),
                    }}
                  >
                    {description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </RootStyle>
  );
}
