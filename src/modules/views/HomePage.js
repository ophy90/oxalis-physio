import * as React from 'react';
import HomePageLayout from './HomePageLayout';
import BackgroundImage from '../../assets/OXALIS_site_web_bg.jpg';
import {HeaderTitleWhiteHomePage} from "../components/Styles";

const backgroundImage = BackgroundImage;

export default function HomePage() {
  return (
    <HomePageLayout
        id={'accueil'}
      sxBackground={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.//
          backgroundPosition: 'center',
          width: '100%'
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt={"increase priority"}
      />
        <HeaderTitleWhiteHomePage>
          posture et
          <br/>
          respiration libre
        </HeaderTitleWhiteHomePage>
    </HomePageLayout>
  );
}
