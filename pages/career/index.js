import PropTypes from 'prop-types';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/career/posts';
// hooks
import { useRequest } from '../../src/hooks';
// _data
import {
  _brandsColor,
  _testimonials,
  _jobsByCompanies,
  _jobsByCategories,
  _jobsByCountries,
} from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, ErrorScreen } from '../../src/components';
// sections
import { NewsletterCareer } from '../../src/sections/newsletter';
import { DownloadAppCareer } from '../../src/sections/download-app';
import { BlogCareerLatestPosts } from '../../src/sections/blog';
import { TestimonialsCareer } from '../../src/sections/testimonials';
import { OurClientsCareer } from '../../src/sections/our-clients';
import {
  CareerLandingHero,
  CareerLandingStep,
  CareerLandingFeaturedJobs,
  CareerLandingTopCompanies,
  CareerLangdingConnections,
  CareerLandingHotCategories,
  CareerLangdingForRecruiters,
} from '../../src/sections/@career';


// ----------------------------------------------------------------------

CareerLandingPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default function CareerLandingPage({ posts }) {
  const { data: jobs = [], error } = useRequest({
    url: `/api/career/jobs`,
  });

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <Page title="Landing - Career">
      <CareerLandingHero />

      <CareerLandingStep />

      <CareerLandingFeaturedJobs jobs={jobs.slice(-6)} />

      <CareerLandingTopCompanies companies={_jobsByCompanies} />

      <CareerLandingHotCategories categories={_jobsByCategories} />

      <CareerLangdingConnections countries={_jobsByCountries} />

      <CareerLangdingForRecruiters />

      <TestimonialsCareer testimonials={_testimonials} />

      <OurClientsCareer brands={_brandsColor} />

      <BlogCareerLatestPosts posts={posts.slice(0, 5)} />

      <DownloadAppCareer />

      <NewsletterCareer />
    </Page>
  );
}

// ----------------------------------------------------------------------

CareerLandingPage.getLayout = function getLayout(page) {
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
