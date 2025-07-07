import * as React from 'react';
import Therapeute from './modules/views/Therapist';
import AppFooter from './modules/views/AppFooter';
import HomePage from './modules/views/HomePage';
import Physiotherapy from './modules/views/Physiotherapy';
import InformationsGeneral from './modules/views/InformationsGeneral';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import './assets/stylesheet.css';

function Index() {
  return (
    <>
      <AppAppBar/>
      <HomePage/>
      <Physiotherapy/>
      <Therapeute/>
      <InformationsGeneral />
      <AppFooter />
    </>
  );
}

export default withRoot(Index);
