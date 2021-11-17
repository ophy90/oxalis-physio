import * as React from 'react';
import Typography from '@mui/material/Typography';
import HomePageLayout from './HomePageLayout';
import BackgroundImage from '../../assets/OXALIS_site_web_bg.jpg';
import {HeaderTitleWhite, HeaderTitleWhiteHomePage, useStyles} from "../components/Styles";

const backgroundImage = BackgroundImage;

export default function HomePage() {
  return (
    <HomePageLayout
      sxBackground={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.//
          backgroundPosition: 'center',
          width: '100%'
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      {/* Todo: change the size of background image */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <HeaderTitleWhiteHomePage className={'homepageTitle'}>
        Posture et
        <br/>
        respiration libre
      </HeaderTitleWhiteHomePage>
    </HomePageLayout>
  );
}
