import PropTypes from 'prop-types';
// @mui
import { Box, Container } from '@mui/material';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/marketing/posts';
import { getAllCaseStudies } from '../../src/utils/get-mardown/marketing/case-studies';

import { TestimonialsTravel } from '../../src/sections/testimonials';
// _data
import { _testimonials, _brands, _members, _pricingMarketing } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, ErrorScreen } from '../../src/components';
// hooks
import { useRequest } from '../../src/hooks';
// sections
import { PricingMarketing } from '../../src/sections/pricing';
import { TeamMarketingLangding } from '../../src/sections/team';
import { BlogMarketingLatestPosts } from '../../src/sections/blog';
import { NewsletterMarketing } from '../../src/sections/newsletter';
import { TestimonialsMarketing } from '../../src/sections/testimonials';

import {
  MarketingLandingHero,
  MarketingLandingAbout,
  MarketingLandingProcess,
  MarketingLandingServices,
  MarketingLandingCaseStudies,
} from '../../src/sections/@marketing';

import {
  TravelLandingHero
} from '../../src/sections/@travel'

// ----------------------------------------------------------------------

MarketingLandingPage.propTypes = {
  caseStudies: PropTypes.array,
  posts: PropTypes.array,
};

export default function MarketingLandingPage({ posts, caseStudies }) {
  const { data: tours = [], error } = useRequest({
    url: `https://energace.herokuapp.com/api/energaceLanding`,
  });

  if (error) {
    return <ErrorScreen />;
  }
  return (
    <Page title="Energace Therapeutic Learning Consults">
    <Box sx={{ position: 'relative' }}>
        <MarketingLandingHero tours={tours.slice(0, 5)} />
      </Box>

      <MarketingLandingAbout />

      <MarketingLandingServices />

      <MarketingLandingProcess />

      <MarketingLandingCaseStudies caseStudies={caseStudies.slice(-6)} />

      <TestimonialsMarketing testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={posts.slice(0, 4)} />

      <NewsletterMarketing />
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingLandingPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
      caseStudies: getAllCaseStudies(),
    },
  };
}
