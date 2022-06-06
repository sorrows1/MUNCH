import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function useResponsive(query, key, start, end) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(key));

  const mediaDown = useMediaQuery(theme.breakpoints.down(key));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(key));

  switch (query) {
    case 'up':
      return mediaUp;
    case 'down':
      return mediaDown;
    case 'between':
      return mediaBetween;
    case 'only':
      return mediaOnly;
    default:
      return null;
  }
}
