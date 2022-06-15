// icons
import locationIcon from '@iconify/icons-carbon/location';
import mobileIcon from '@iconify/icons-carbon/mobile';
import emailIcon from '@iconify/icons-carbon/email';
import timeIcon from '@iconify/icons-carbon/time';
import launchIcon from '@iconify/icons-carbon/launch';
// @mui
import { Typography, Stack, Link } from '@mui/material';
// components
import { Iconify, TextIconLabel, Image } from '../../../components';

// ----------------------------------------------------------------------

export default function MarketingContactInfo() {
  return (
    <Stack spacing={3}>
      <Image
        alt="marketing-contact"
        src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_marketing_contact.svg"
        sx={{
          maxWidth: 380,
          display: { xs: 'none', md: 'block' },
        }}
      />

      <TextIconLabel
        spacing={2}
        alignItems="flex-start"
        icon={<Iconify icon={locationIcon} sx={{ width: 28, height: 28 }} />}
        value={
          <Stack spacing={0.5}>
            <Stack spacing={1} direction="row" alignItems="center">
              <Typography variant="h6">Visit us</Typography>
              <Link sx={{ lineHeight: 0 }}>
                <Iconify icon={launchIcon} sx={{ width: 18, height: 18 }} />
              </Link>
            </Stack>

            <Typography variant="body2">29 Kigoma Street by Bolton White Apartment, Wuse Zone 7, Abuja</Typography>
          </Stack>
        }
      />

      <TextIconLabel
        spacing={2}
        alignItems="flex-start"
        icon={<Iconify icon={mobileIcon} sx={{ width: 28, height: 28 }} />}
        value={
          <Stack spacing={0.5}>
            <Typography variant="h6">Call us</Typography>
            <Typography variant="body2">+234 90 4006 7560</Typography>
          </Stack>
        }
      />

      <TextIconLabel
        spacing={2}
        alignItems="flex-start"
        icon={<Iconify icon={emailIcon} sx={{ width: 28, height: 28 }} />}
        value={
          <Stack spacing={0.5}>
            <Typography variant="h6">Talk to us</Typography>
            <Link color="inherit" variant="body2" href="mailto:info@energace.net">
              info@energace.net
            </Link>
          </Stack>
        }
      />

      <TextIconLabel
        spacing={2}
        alignItems="flex-start"
        icon={<Iconify icon={timeIcon} sx={{ width: 28, height: 28 }} />}
        value={
          <Stack spacing={0.5}>
            <Typography variant="h6">Working Hours</Typography>
            <Typography variant="body2">Mon-Fri: 9 am — 6 pm</Typography>
          </Stack>
        }
      />
    </Stack>
  );
}
