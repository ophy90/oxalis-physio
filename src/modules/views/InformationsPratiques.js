import * as React from 'react';
import Container from '@mui/material/Container';
import {HeaderTitlePurple, SubtitlePurple, TextPurple, useStyles} from "../components/Styles";

function InformationsPratiques() {
    const classes = useStyles();
  return (
      <Container className={classes.purpleLightBox}>
          <HeaderTitlePurple>
              Informations Pratiques
          </HeaderTitlePurple>
          <TextPurple>
                Être habillé confortablement (training, habits souples par exemple), vous allez gar- der vos vêtements.
          </TextPurple>
          <SubtitlePurple>
          Tarifs et durée
          </SubtitlePurple>
          <TextPurple>
          Une séance coûte CHF 100.–
          Paiement en espèce uniquement (non remboursé par les caisses maladie).
          Durée approximative : 60 à 90 minutes (première séance), puis entre 45 et
          60 minutes pour les suivantes. A noter que le nombre de séance ne peut être défini en avance, la prise en charge est en fonction de chaque individu.
          </TextPurple>
          <SubtitlePurple>
          Horaires & lieu
          </SubtitlePurple>
          <TextPurple>
          Tous les mercredis après-midi, au cabinet ostéopathie XXXXXXX, Notre Dame de la route XX, Villars-sur-Glâne
          </TextPurple>
          <SubtitlePurple>
          Liens externes
          </SubtitlePurple>
          <TextPurple>
          Site de Benoît Tremblay : www.pneumacorps.com
          Site de Union PneumaCorps France : pneumacorps2021.wixsite.com/my-site-1
          </TextPurple>
          <SubtitlePurple>
          Informations Covid
          </SubtitlePurple>
          <TextPurple>ˆ
          Les mesures usuelles sont en vigueur.
          </TextPurple>
      </Container>
        


        // <div>
        //   <Grid container spacing={5}>
        //     <Grid item xs={12} md={4}>
        //       <Box sx={item}>
        //         <Box sx={number}>1.</Box>
        //         <Box
        //           component="img"
        //           src="/static/themes/onepirate/productHowItWorks1.svg"
        //           alt="suitcase"
        //           sx={image}
        //         />
                /* <Typography variant="h5" align="center">
                  Appointment every Wednesday 9am.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="/static/themes/onepirate/productHowItWorks2.svg"
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  First come, first served. Our offers are in limited quantities, so
                  be quick.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img" */
    //               src="/static/themes/onepirate/productHowItWorks3.svg"
    //               alt="clock"
    //               sx={image}
    //             />
    //             <Typography variant="h5" align="center">
    //               {'New offers every week. New experiences, new surprises. '}
    //               {'Your Sundays will no longer be alike.'}
    //             </Typography>
    //           </Box>
    //         </Grid>
    //       </Grid>
    //     </div>
    //     <Button
    //       color="secondary"
    //       size="large"
    //       variant="contained"
    //       component="a"
    //       href="/premium-themes/onepirate/sign-up/"
    //       sx={{ mt: 8 }}
    //     >
    //       Get started
    //     </Button>
    //   </Container>
    // </Box>
  );
}

export default InformationsPratiques;
