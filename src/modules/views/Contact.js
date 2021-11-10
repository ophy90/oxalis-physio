import * as React from 'react';
import {HeaderTitlePurple, TextPurple, useStyles} from "../components/Styles";
import Container from "@mui/material/Container";

function Contact() {
    const classes = useStyles();
  return (
      <div className={classes.purpleLightBox}>
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
      </div>
  );
}

export default Contact;
