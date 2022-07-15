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
// hooks
import useResponsive from '../../../hooks/useResponsive';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    year: 'Energace',
    title: 'Our Contract',
    description:
      'We promise confidentiality and commitment to our clients and encourage them to do the same to ensure a relatively permanent change in behavioural, emotional, social and cognitive well being.',
  },
  {
    year: 'Energace',
    title: 'Our Results',
    description:
      'Our services helps our clients be prepared to take on the reality we are bound to face daily. ',
  },
  {
    year: 'Energace',
    title: 'Our Vision',
    description:
      'Our vision is to provide state of art mental health solutions and a web of psychological interventions all over Africa and the world at large.',
  },
  {
    year: 'Energace',
    title: 'Our Slogan',
    description:
      'We Provide Innovative Effective Mental Health Solutions.',
  },
];

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const RootStyle = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutStory() {
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
          <Typography variant="h2">About Us</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            
          </Typography>
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
                      color: 'text.secondary',
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
