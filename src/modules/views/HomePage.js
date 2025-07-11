import * as React from 'react';
import HomePageLayout from './HomePageLayout';
import BackgroundImage from '../../assets/OXALIS_site_web_bg.jpg';
import content from '../../content.json';
import Typography from "@mui/material/Typography";

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
        alt={"Oxalis image"}
      />
        <Typography variant ='h1'>
          {content.home.titleFirstLine}
          <br/>
          {content.home.titleSecondLine}
        </Typography>
    </HomePageLayout>
  );
}
