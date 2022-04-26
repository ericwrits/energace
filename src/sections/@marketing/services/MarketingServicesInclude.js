// next
import NextLink from 'next/link';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Box, Container, Typography, Button, Stack } from '@mui/material';
// routes
import Routes from '../../../routes';
// components
import { Iconify, Image } from '../../../components';

import PropTypes from 'prop-types';

// ----------------------------------------------------------------------


const LISTS = [
  'First Class Flights',
  '5 Star Accommodations',
  'Inclusive Packages',
  'Latest Model Vehicles',
];

var linebreak = '\n';

const CORE_VALUES  = [ 
  {
    title: 'CBT Therapy',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_seo.svg',
    description: "Cognitive Behavioural Therapy is a mode of therapy that works with the mind (decision making, thinking, memory, mental processing of information and concentration) of a patient to improve their pattern of thinking. CBT is a highly effective client focused therapy that looks into past experiences to the extent that is needed and essentially focuses on the present and the future. It aims at teaching the patient new thinking processes that will eventually have prolonged impact on their thought process and help them cope with their feelings. This therapy method is most effective with the following disorders:",
    lists: [
      "General Stress",
      "Depression",
      "Bipolar Disorder",
      "Anxiety Disorders",
      "Panic Attacks",
      "Insomnia",
      "Anger and Aggression",
      "Addiction",
      "Personality Disorders",
      "Distress due to medical conditions",
      "Chronic pain and fatigue",
      "Low self-esteem",
      "Conduct disorder",
      "Eating Disorder",
      "Seasonal Affective Disorder",
      "Obsessive Complusive Disorder",
    ],
  },
  {
    title: 'Brainware Entrainment Therapy',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_mail.svg',
    description: 'this is a non-pharmaceutical approach to achieve mental and physical wellness. It utilizes pulses of light and sound at specific frequencies to gently and safely guide the brain into various brain wave patterns, thereby sharpening and balancing the mind; increase level of relaxation; boosting of mood and energies; increasing brain health; reduces stress and worry level; improves concentration, attention and memory: elevates academic, sports and business performance; helps with symptoms of ADD/ADHD in children and adults as well as addiction and builds our mental well-being in general. This therapy also includes Cranio-Electro Stimulation is a non-invasive brain stimulation that uses a small pulsed electric current to the brain to produce neurotransmitters that the brain needs to create a balance. This therapy method is used alongside the CBT therapy.',
    lists: []
  },
  {
    title: 'Individual Therapy',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_analysis.svg',
    description: "this is form of therapy for individuals. It is combination of the Cognitive Behavioural Therapy and Brainwave Entrainment Therapy to bring about the desired result cognitive, emotional and behavioural modification",
    lists: []
  },
  {
    title: 'Reading Therapy',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_bullhorn.svg',
    description: "Reading and comprehension skills are very vital to every pupil and student. Statistics shows that over 32 million people in Nigeria struggle with reading, spelling or dictation and comprehension, with a lot of people having dyslexia symptoms. An example will be the case of an outright misinterpretation of a comprehension passage, phonics, composition or all kinds of essays as a result of not understanding the importance of planning, simultaneous processing, attention and sequential processing in literacy activities. We have two basic therapeutic reading modules. Which are: "+linebreak+" Phono-Graphix Reading Method: This is a straightforward reading and spelling method, which was developed by Carmen and Geoffrey Mc Guinness in 1993, at the Read America clinic in Orlando, Florida. Reading, spelling and writing have largely been taught as isolated concept, however, in reality they are coexisting phenomenal that are best and easily comprehendible when instructed as a holistic process. Our reading method’s approach is to teach reading alongside spelling and writing, it is such simplified to cater for the mental capacity of every child. Another module is our Literacy Solution Our cognitive literacy art program is fully gamified and shown to accelerate the acquisition of literacy skills; from phonics, to spelling, to grammar, to reading, to writing and comprehension. From beginning readers to secondary school learners, the program contains thousands of exercises to build literacy skills quickly and enjoyably.",
    lists: []
  },
  {
    title: 'Group Therapy',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_bullhorn.svg',
    description: "this CBT group work is very effective for clients suffering the same disorder. It creates a support system and a feeling of acceptance",
    lists: []
  },
  {
    title: 'Therapy for Children with Special needs',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/service/ic_service_bullhorn.svg',
    description: "Energace renders specialized services to children with neurological or developmental disorders such as Dyslexia, Dysgraphia, Autism Spectrum Disorder, ADD/ADHD (Attention Deficit Hyperactivity Disorder) and Down Syndrome. Our mode of treatment uses a compendium of several of our therapeutic modules to achieve the desired result",
    lists: []
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingServicesInclude() {
  return (
    <RootStyle>
      <Container>
        <Stack
          spacing={3}
          sx={{
            mx: 'auto',
            maxWidth: 480,
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h2">How Our Therapy Solution Works</Typography>
        </Stack>
        {CORE_VALUES.map((services) => (
          <Grid key={services.title} container spacing={3} justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={6} lg={4}>
              <Image
                alt="services"
                src={services.icon}
              />
            </Grid>
  
            <Grid item xs={12} md={6} lg={6}>
                <Stack spacing={3} sx={{ mb: 5 }}>
                <Typography variant="h2">{services.title} </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  {services.description}
                </Typography>
  
                <Stack spacing={1}>
                  {services.lists.map((text) => (
                    <Stack key={text} direction="row" alignItems="center">
                      <Box
                        component="span"
                        sx={{
                          mr: 2,
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                        }}
                      />
                      {text}
                    </Stack>
                  ))}
                </Stack>
              </Stack>
             
                </Grid>
          </Grid>   
          ))};
        
      </Container>
    </RootStyle>
  );
}



