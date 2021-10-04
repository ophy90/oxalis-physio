import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Logo from '../../assets/OXALIS_logo_blanc.png'

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: trigger ? {backgroundColor:'rgba(60, 60, 60, 0.4)'} : {backgroundColor:'transparent'},
  });
}

function AppAppBar() {
  return (
    <div class="topnav" id="myTopnav">
      <ElevationScroll>
      <AppBar  position="fixed" color={'transparent'} style={{color: 'transparent', backgroundColor: 'none'}}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{display:'flex', flex:1, justifyContent: 'space-between'}}>
            <Link 
              href='/'
              variant="h6"
              underline="none"
              color="primary"
              height='12px'
              style={{fontSize: '12px'}}  
            >{'PNEUMACORPS'}</Link>
            <Link 
              href='/'
              variant="h6"
              underline="none"
              color="primary"
              style={{fontSize: '12px'}}  
            >{'À PROPOS'}</Link>
          </Box>
          <Box sx={{display: 'flex', flex:2, justifyContent:'center'}}>
            <img src={Logo} style={{height: 30}} />
          </Box>
          <Box sx={{display:'flex', flex:1, justifyContent: 'space-between'}}>
            <Link 
              href='/'
              variant="h6"
              underline="none"
              color="primary"
              style={{fontSize: '12px'}}  
            >{'INFORMATIONS PRATIQUES'}</Link>
            <Link 
              href='/'
              variant="h6"
              underline="none"
              color="primary"
              style={{fontSize: '12px'}}  
            >{'CONTACT'}</Link>
          </Box>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      {/* <Toolbar /> */}
    </div>
  );
}

export default AppAppBar;
