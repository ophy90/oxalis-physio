import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import HomePageLayout from './HomePageLayout';
import BackgroundImage from '../../assets/OXALIS_site_web_bg.jpg';

const backgroundImage =
BackgroundImage;

export default function HomePage() {
  return (
    <HomePageLayout
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
      <Typography color="inherit" align="center" variant="h1" marked="center">
        posture et
        <br/>
        respiration libre
      </Typography>
      <div>
      <h1>
        Informations pratiques
      </h1>
      
      </div>

    </HomePageLayout>
  );
}