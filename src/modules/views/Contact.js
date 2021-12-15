import * as React from 'react';
import {HeaderTitlePurple, TextPurple, useStyles} from "../components/Styles";
import Box from "@mui/material/Box";
import Arrow from "../../assets/OXALIS_boutons_fleche_purple.svg";

function Contact() {
    const classes = useStyles();
  return (
      <div className={classes.purpleLightBox}>
          <div className={classes.blocks}>
              <HeaderTitlePurple id={'contact'}>
                  Contact
              </HeaderTitlePurple>
              <div className={classes.alignLeft}>
                  <TextPurple>
                      Les rdv se prennent par téléphone ou par e-mail.
                  </TextPurple>
                  <br/>
                  <TextPurple>
                      +41 78 207 70 85 / info@oxalis-respiration.ch
                  </TextPurple>
                  {/*<div className={classes.arrowLinkContactContainer}>*/}
                  {/*    <a className={classes.arrowLinkContact}>*/}
                  {/*        <Box*/}
                  {/*            component="img"*/}
                  {/*            src={Arrow}*/}
                  {/*            height="32px"*/}
                  {/*            width="24px"*/}
                  {/*            alt="arrow down"*/}
                  {/*        />*/}
                  {/*    </a>*/}
                  {/*</div>*/}
              </div>
          </div>
      </div>
  );
}

export default Contact;
