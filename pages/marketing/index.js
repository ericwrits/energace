import PropTypes from 'prop-types';
// @mui
import { Box } from '@mui/material';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/marketing/posts';
// _data
import { _testimonials } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, ErrorScreen } from '../../src/components';
// hooks
import { useRequest } from '../../src/hooks';
// sections
import { BlogMarketingLatestPosts } from '../../src/sections/blog';
import { NewsletterMarketing } from '../../src/sections/newsletter';
import { TestimonialsMarketing } from '../../src/sections/testimonials';

import {
  MarketingLandingHero,
  MarketingLandingAbout,
  MarketingLandingProcess,
  MarketingLandingServices,
} from '../../src/sections/@marketing';



// ----------------------------------------------------------------------

MarketingLandingPage.propTypes = {
  posts: PropTypes.array,
};

export default function MarketingLandingPage({ posts }) {
  const { data: tours = [], error } = useRequest({
    url: `/api/energaceLanding`,
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
    },
  };
}
