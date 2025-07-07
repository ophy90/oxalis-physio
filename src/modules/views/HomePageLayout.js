import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import ArrowDown from '../../assets/OXALIS_site_web_boutons_fleche_blanc.svg';

// Hook
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: Math.min(window.outerWidth, window.innerWidth),
        height: Math.min(window.outerHeight, window.innerHeight),
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const HomePageLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 375,
    maxHeight: 1300,
  },
}));

const Background = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
}));

function HomePageLayout(props) {
  const { sxBackground, children } = props;

  const {height} = useWindowSize();

  return (
    <HomePageLayoutRoot
        style={{height}}
        id={'accueil'}>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            // backgroundColor: 'common.black',
            // opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
         <a href={'#physiotherapy'}>
             <Box
                 component="img"
                 src={ArrowDown}
                 height="32px"
                 width="24px"
                 alt="arrow down"
                 sx={{ position: 'absolute', bottom: 32 }}
             />
         </a>
      </Container>
    </HomePageLayoutRoot>
  );
}

HomePageLayout.propTypes = {
  children: PropTypes.node,
  sxBackground: PropTypes.object,
};

export default HomePageLayout;
