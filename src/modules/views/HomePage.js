import * as React from 'react';
import Typography from '@mui/material/Typography';
import HomePageLayout from './HomePageLayout';
import BackgroundImage from '../../assets/OXALIS_site_web_bg.jpg';

const backgroundImage = BackgroundImage;

export default function HomePage() {
  return (
    <HomePageLayout
        id={'accueil'}
      sxBackground={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      {/* Todo: change the size of background image */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h1White" marked="center">
        posture et
        <br/>
        respiration libre
      </Typography>
    </HomePageLayout>
  );
}
