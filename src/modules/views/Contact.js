import * as React from 'react';
import {HeaderTitlePurple, TextPurple, useStyles} from "../components/Styles";

function Contact() {
    const classes = useStyles();
  return (
      <div className={classes.purpleLightBox}>
          <div className={classes.blocks}>
              <HeaderTitlePurple>
                  Contact
              </HeaderTitlePurple>
              <div className={classes.alignLeft}>
                  <TextPurple>
                      Les rdv se prennent par téléphone ou par e-mail.
                  </TextPurple>
                  <br/>
                  <TextPurple>
                      +41 78 207 70 85 / info@oxalis-respiration.chs
                  </TextPurple>
              </div>
          </div>
      </div>
  );
}

export default Contact;
