import * as React from 'react';
import Container from '@mui/material/Container';
import {HeaderTitlePurple, TextPurple, useStyles} from "../components/Styles";

function Contact() {
    const classes = useStyles();
  return (
      <Container sx={{textAlign: 'center'}} className={classes.purpleLightBox}>
        <HeaderTitlePurple>
          Contact        
        </HeaderTitlePurple>
        <TextPurple>
        Les rdv peuvent se prendre par téléphone ou par e-mail. 
        <br/>
        +41 78 207 70 85 
        <br/>
        info@oxalis-respiration.ch
        </TextPurple>
      </Container>
  );
}

export default Contact;
