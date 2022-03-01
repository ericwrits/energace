import PropTypes from 'prop-types';
import { memo } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Iconify, Image } from '../components';

// ----------------------------------------------------------------------

Logo.propTypes = {
  isSimple: PropTypes.bool,
  onDark: PropTypes.bool,
  sx: PropTypes.object,
};

function Logo({ onDark = false, isSimple = false, sx }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const PRIMARY_MAIN = theme.palette.primary.main;
  const LIGHT_COLOR = theme.palette.common.white;
  const DARK_COLOR = theme.palette.grey[800];

  return (
    <NextLink href="/">
      <Box
        sx={{
          width: isSimple ? 64 : 165,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {isSimple ? (
          <Image
            src="https://i.ibb.co/0h3j9rR/energace.png"
            alt="Logo"
          />
        ) : (
          <Image
            src="https://i.ibb.co/0h3j9rR/energace.png"
            alt="Logo"
          />
        )}
      </Box>
    </NextLink>
  );
}

export default memo(Logo);
