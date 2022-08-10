// @mui
import { styled } from '@mui/material/styles';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// _data
import { _testimonials, _members, _brandsColor } from '../../_data/mock';
// layouts
import Layout from '../../src/layouts';
// components
import { Page } from '../../src/components';
// sections
import { TeamMarketingAbout } from '../../src/sections/team';
import { NewsletterMarketing } from '../../src/sections/newsletter';
import { OurClientsMarketingAbout } from '../../src/sections/our-clients';
import { TestimonialsMarketing } from '../../src/sections/testimonials';
import {
  MarketingCognitive,
  MarketingAboutStory,
  MarketingAboutOurVision,
  MarketingAboutCoreValues,
} from '../../src/sections/@marketing';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingCognitivePage() {
  return (
    <Page title="About Us - Energace Therapeutical Learning Consults">
      <RootStyle>
        <MarketingCognitive />

        <MarketingAboutOurVision />

        <MarketingAboutCoreValues />

        <MarketingAboutStory />

        <TestimonialsMarketing testimonials={_testimonials} />

        <OurClientsMarketingAbout brands={_brandsColor} />

        <NewsletterMarketing />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingCognitivePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
