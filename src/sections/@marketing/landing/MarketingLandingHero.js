// icons
import playIcon from '@iconify/icons-carbon/play';

import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useRef, useEffect, useState } from 'react';
// icons
import locationIcon from '@iconify/icons-carbon/location';
import timeIcon from '@iconify/icons-carbon/time';
import starIcon from '@iconify/icons-carbon/star';
import currencyIcon from '@iconify/icons-carbon/currency';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Stack, Typography, Button, Avatar, Box, Grid, Container } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// @utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import {
  Image,
  Iconify,
  BgOverlay,
  TextMaxLine,
  CarouselDots,
  TextIconLabel,
} from '../../../components';

// ----------------------------------------------------------------------

MarketingLandingHero.propTypes = {
  tours: PropTypes.array.isRequired,
};

export default function MarketingLandingHero({ tours }) {
  const theme = useTheme();

  const [selected, setSelected] = useState(1);

  const [carouselContent, setCarouselContent] = useState();
  const [carouselThumbnail, setCarouselThumbnail] = useState();
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);

  useEffect(() => {
    setCarouselContent(carouselRef1.current || undefined);
    setCarouselThumbnail(carouselRef2.current || undefined);
  }, [selected]);

  const carouselContentSettings = {
    initialSlide: selected,
    dots: true,
    speed: 1440,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => setSelected(next),
    ...CarouselDots({
      sx: {
        display: { md: 'none' },
        left: 0,
        right: 0,
        zIndex: 9,
        bottom: 64,
        position: 'absolute',
      },
    }),
  };

  const carouselThumbnailSettings = {
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    vertical: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: true,
    swipeToSlide: true,
    focusOnSelect: true,
    rtl: Boolean(theme.direction === 'rtl'),
    beforeChange: (current, next) => setSelected(next),
  };

// ----------------------------------------------------------------------


return (
  <Box sx={{ minHeight: '100vh', position: 'relative' }}>
    {tours.length && (
      <Slider {...carouselContentSettings} asNavFor={carouselThumbnail} ref={carouselRef1}>
        {tours.map((tour, index) => (
          <ContentItem key={tour.id} tour={tour} isSelected={selected === index} />
        ))}
      </Slider>
    )}

    <Stack
      spacing={2}
      justifyContent="center"
      sx={{
        top: 0,
        height: 1,
        maxWidth: 220,
        position: 'absolute',
        display: { xs: 'none', md: 'flex' },
        right: { xs: 20, lg: '6%', xl: '10%' },
      }}
    >
      {tours.length && (
        <Slider {...carouselThumbnailSettings} asNavFor={carouselContent} ref={carouselRef2}>
          {tours.map((tour, index) => (
            <ThumbnailItem key={tour.id} tour={tour} isSelected={selected === index} />
          ))}
        </Slider>
      )}
    </Stack>
  </Box>
);
}

// ----------------------------------------------------------------------

ContentItem.propTypes = {
tour: PropTypes.shape({
  duration: PropTypes.string,
  heroImg: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.number,
  ratings: PropTypes.number,
  heroItems: PropTypes.string,
}),
};

function ContentItem({ tour }) {
const theme = useTheme();
const { heroItems, location, heroImg, ratings, price, duration } = tour;

return (
  <Box
    sx={{
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      position: 'relative',
      color: 'common.white',
      justifyContent: 'center',
    }}
  >
    {/* Content */}
    <Stack
      alignItems="center"
      sx={{
        zIndex: 9,
        py: { xs: 20, md: 0 },
        position: { md: 'absolute' },
      }}
    >
      <Typography variant="h2" sx={{ maxWidth: 480 }}>
        {heroItems}
      </Typography>

      <Button variant="contained" size="large">
        Speak to a psychologist
      </Button>
    </Stack>

    {/* Background */}
    <Box
      sx={{
        width: 1,
        height: 1,
        position: {
          xs: 'absolute',
          md: 'relative',
        },
      }}
    >
      <BgOverlay
        startColor={alpha(theme.palette.grey[900], 0.48)}
        endColor={alpha(theme.palette.grey[900], 0.48)}
      />
      <BgOverlay />
      <Image
        alt="hero"
        src={heroImg}
        sx={{
          height: { xs: 1, md: '100vh' },
        }}
      />
    </Box>
  </Box>
);
}

// ----------------------------------------------------------------------

ThumbnailItem.propTypes = {
tour: PropTypes.shape({
  heroImg: PropTypes.string,
  location: PropTypes.string,
  continent: PropTypes.string,
  heroItems: PropTypes.string,
}),
isSelected: PropTypes.bool,
};

function ThumbnailItem({ tour, isSelected }) {
const theme = useTheme();
const { continent, heroImg, location, heroItems } = tour;

return (
  <Stack
    direction="row"
    alignItems="center"
    spacing={2.5}
    sx={{
      px: 2,
      py: 1.5,
      cursor: 'pointer',
      color: 'common.white',
      ...(isSelected && {
        borderRadius: 2,
        ...cssStyles().bgBlur({
          blur: 8,
          opacity: 0.08,
          color: theme.palette.common.white,
        }),
      }),
    }}
  >
    <Avatar src={heroImg} sx={{ width: 48, height: 48 }} />
    <Stack spacing={0.5}>
      <TextMaxLine variant="h6" line={1}>
        {heroItems}
      </TextMaxLine>
      {/*<TextIconLabel
        icon={
          <Iconify
            icon={locationIcon}
            sx={{ width: 20, height: 20, mr: 1, color: 'primary.main' }}
          />
        }
        value={
          <TextMaxLine variant="caption" line={1} sx={{ opacity: 0.48 }}>
            {continent}
          </TextMaxLine>
        }
      />*/}
    </Stack>
  </Stack>
);
}