import * as React from 'react';
import Therapeute from './modules/views/Apropos';
import AppFooter from './modules/views/AppFooter';
import HomePage from './modules/views/HomePage';
import Physiotherapie from './modules/views/Pneumacorps';
import InformationsPratiques from './modules/views/InformationsPratiques';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import './assets/stylesheet.css';

function Index() {
  return (
    //<React.Fragment>
    <>
      <AppAppBar/>
      <HomePage />
      <Physiotherapie/>
      <Therapeute/>
      <InformationsPratiques />
      <AppFooter />
    </>
    //</React.Fragment>
  );
}

export default withRoot(Index);
