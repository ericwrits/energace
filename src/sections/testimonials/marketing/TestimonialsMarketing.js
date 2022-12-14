import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useRef } from 'react';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Typography, Grid, Container, Stack, Avatar } from '@mui/material';
// components
import { CarouselDots, CarouselArrows } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

TestimonialsMarketing.propTypes = {
  testimonials: PropTypes.array.isRequired,
};

export default function TestimonialsMarketing({ testimonials }) {
  const theme = useTheme();
  const carouselRef = useRef(null);

  const carouselSettings = {
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({
      sx: {
        mt: { xs: 8, md: 10 },
      },
    }),
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <RootStyle>
      <Container sx={{ position: 'relative' }}>
        <Stack spacing={2} sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Testimonials
          </Typography>
          <Typography variant="h2">Testimonials</Typography>
        </Stack>

        <CarouselArrows onNext={handleNext} onPrevious={handlePrevious}>
          <Grid container spacing={10} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Slider ref={carouselRef} {...carouselSettings}>
                {testimonials.map((testimonial) => (
                  <TestimonialsItem key={testimonial.id} testimonial={testimonial} />
                ))}
              </Slider>
            </Grid>
          </Grid>
        </CarouselArrows>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

TestimonialsItem.propTypes = {
  testimonial: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    review: PropTypes.string,
    role: PropTypes.string,
  }),
};

function TestimonialsItem({ testimonial }) {
  const { name, role, avatar, review } = testimonial;

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 5, md: 10 }}>
      <Typography
        sx={{
          fontSize: { md: 20 },
          lineHeight: 1.75,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {review}
      </Typography>

      <Stack
        sx={{
          flexShrink: 0,
          textAlign: 'center',
        }}
      >
        <Avatar alt={name} src={avatar} sx={{ width: 96, height: 96, mx: 'auto' }} />
        <Typography variant="h6" sx={{ mt: 2.5, mb: 0.5 }}>
          {name}
        </Typography>
      </Stack>
    </Stack>
  );
}
