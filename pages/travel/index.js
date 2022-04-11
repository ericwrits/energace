import PropTypes from 'prop-types';
// @mui
import { Box, Container } from '@mui/material';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/travel/posts';
// hooks
import { useRequest } from '../../src/hooks';
// _data
import { _testimonials } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, ErrorScreen } from '../../src/components';
// sections
import { NewsletterTravel } from '../../src/sections/newsletter';
import { TestimonialsTravel } from '../../src/sections/testimonials';
import { BlogTravelLandingLatestPosts } from '../../src/sections/blog';
import {
  TravelLandingHero,
  TravelLandingSummary,
  TravelTourBarFilters,
  TravelLandingIntroduce,
  TravelLandingToursByCity,
  TravelLandingTourFeatured,
  TravelLandingFavoriteDestinations,
} from '../../src/sections/@travel';

import {
  MarketingLandingAbout,
  MarketingLandingProcess,
  MarketingLandingServices,
} from '../../src/sections/@marketing';

// ----------------------------------------------------------------------

TravelLandingPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function TravelLandingPage({ posts }) {
  const { data: tours = [], error } = useRequest({
    url: `/api/travel/tours`,
  });

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Energace Therapeutic Learning Consults">
      <Box sx={{ position: 'relative' }}>
        <TravelLandingHero tours={tours.slice(0, 5)} />

        
      </Box>

      <MarketingLandingAbout />

      <MarketingLandingServices />

      <MarketingLandingProcess />

      <TravelLandingSummary />

      <TravelLandingFavoriteDestinations tours={tours.slice(0, 4)} />

      <TravelLandingTourFeatured tours={tours.slice(0, 4)} />

      <TravelLandingToursByCity tours={tours.slice(0, 8)} />

      <BlogTravelLandingLatestPosts posts={posts.slice(0, 4)} />

      <TestimonialsTravel testimonials={_testimonials} />

      <NewsletterTravel />
    </Page>
  );
}

// ----------------------------------------------------------------------

TravelLandingPage.getLayout = function getLayout(page) {
  return <Layout transparentHeader>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
}
