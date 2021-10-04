import * as React from 'react';
import APropos from './modules/views/Apropos';
import AppFooter from './modules/views/AppFooter';
import HomePage from './modules/views/HomePage';
import Pneumacorps from './modules/views/Pneumacorps';
import InformationsPratiques from './modules/views/InformationsPratiques';
import Contact from './modules/views/Contact';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import './assets/stylesheet.css';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <HomePage />
      <Pneumacorps />
      <APropos />
      <InformationsPratiques />
      <Contact />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
