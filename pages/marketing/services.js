import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// utils
import { getAllPosts } from '../../src/utils/get-mardown/marketing/posts';
// _data
import { _testimonials } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
import { NewsletterMarketing } from '../../src/sections/newsletter';
import { TestimonialsMarketing } from '../../src/sections/testimonials';
import { BlogMarketingLatestPosts } from '../../src/sections/blog';
import {
  MarketingFreeSEO,
  MarketingServices,
  MarketingServicesHero,
  MarketingServicesInclude,
  MarketingServicesHowItWork,
  MarketingServicesBenefits,
  ServicesChildrenLiteracySkillBuilding,
  ServicesWorkPerformanceImprovement
} from '../../src/sections/@marketing';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

MarketingServicesPage.propTypes = {
  posts: PropTypes.array.isRequired,
};

// ----------------------------------------------------------------------

const services = [ 
  {
    name: 'Psychoeducational Assessment',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_seo.svg',
    text: "This is Energace’s comprehensive diagnostic standardized assessment of a child’s cognitive and academic abilities. It is administered by a psychologist and combines clinical interview, observation and historical records to help understand how a child learns, and identify if and how they struggle. During this assessment we also evaluate other concerns such as attention-deficit/hyperactivity disorder or anxiety and recommendations for your child are based on a combination of standardized test results and the evaluation of psychosocial and mental health issues.",
  },
  {
    name: 'Cognitive assessment',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_mail.svg',
    text: 'Our cognitive assessment focuses on measuring and ascertaining general learning ability, cognitive function and current cognitive development in key areas for individuals. This helps us appraise the weaker or stronger cognitive skills (this is how the brain takes in, process and give out information) and how best to develop and nurture those skills. This assessment has no diagnostic result.',
  },
  {
    name: 'Reading Assessment',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_analysis.svg',
    text: 'This assessment is focused on evaluating a child or a person’s reading, spelling and writing capacity; and reading age. We also include a Cognitive rating scale that aids in evaluating an individual’s cognitive development. This assessment helps us draw our conclusions on how best to proceed with our reading and literacy therapy',
  },
  {
    name: 'CBT Assessment',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_bullhorn.svg',
    text: 'Cognitive Behavioural Therapy assessment is a form of clinical interview and clinical observation that enables the therapist and the client break down the client’s issues to establish an understanding of the reason and the underlying fuel of the client’s individual issues or thought process. This therefore aims at making therapy a likely success by creating a treatment plan',
  },
];

export default function MarketingServicesPage({ posts }) {
  return (
    <Page title="Services - Energace Therapeutical Learning Consults">
      <RootStyle>
        <MarketingServicesHero />

        <MarketingServices services={services} />

        <MarketingServicesInclude />

        <MarketingServicesHowItWork />

        <ServicesWorkPerformanceImprovement />

        <ServicesChildrenLiteracySkillBuilding />

        <MarketingServicesBenefits />

        <TestimonialsMarketing testimonials={_testimonials} />

        <BlogMarketingLatestPosts posts={posts.slice(0, 4)} />

        <MarketingFreeSEO />

        <NewsletterMarketing />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingServicesPage.getLayout = function getLayout(page) {
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
