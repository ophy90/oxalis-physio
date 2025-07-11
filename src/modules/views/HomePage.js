import * as React from 'react';
import HomePageLayout from './HomePageLayout';
import BackgroundImage from '../../assets/OXALIS_site_web_bg.jpg';
import {HeaderTitleWhiteHomePage} from "../components/Styles";
import content from '../../content.json';

const backgroundImage = BackgroundImage;

export default function HomePage() {
  return (
    <HomePageLayout
        sxBackground={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundColor: '#914e72', // Average color of the background image.//
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
          {content.home.titleFirstLine}
          <br/>
          {content.home.titleSecondLine}
        </HeaderTitleWhiteHomePage>
    </HomePageLayout>
  );
}
