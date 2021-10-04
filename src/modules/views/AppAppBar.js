import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Logo from '../../assets/OXALIS_logo_blanc.png'

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div class="topnav" id="myTopnav">
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
      {/* <Toolbar /> */}
    </div>
  );
}

export default AppAppBar;
