import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function Pneumacorps() {
  return (
    
    // <Box
    //   component="section"
    //   sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    // >
      // <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
      <Container>
         <Typography color="inherit" align="center" variant="h1" marked="center">
          pneumacorps
        </Typography>
        <p>
          La pratique que je propose se base sur une approche qui se nomme PneumaCorps.
        </p>
        <h2>
          Origine de la pratique
        </h2>
        <p>
        Cette approche a été développée il y a une quarantaine d’années par Benoît Tremblay, inhalothérapeute québécois. Elle intègre diverses techniques de relaxa- tion, dont le but premier et fondamental est de diminuer les effets du stress chro- nique et d’éviter la limitation de la capacité respiratoire. Elle se définit comme de la relaxation et réorientation respiratoire intégrée (RRRI). La vision holistique de l’humain est au cœur de ce travail et tend vers un alignement corps-âme-esprit. Les outils utilisés sont régulièrement actualisés et modifiés par Benoît afin de cor- respondre au mieux aux besoins de chacun.
        </p>
        <h2>
          Déroulé d’une séance
        </h2>
        <p>
          Il s’agit d’un travail en profondeur sur des tensions chroniques pour libérer le souffle. La pratique s’adresse à toute personne intéressée par ce propos. Au cours d’une séance, je propose dans un premier temps de prendre conscience des tensions auxquelles nous sommes habitués et que nous avons finalement « nor- malisées ». Commencer avec ce qui est là dans l’instant, l’évaluation se fait à la marche, en position assise et couchée. Ensuite, avec les éléments mis en lumière par l’observation, commence le travail de rééquilibration, qui consiste en des mobilisations, des postures, des étirements doux. Et finalement, la personne aura un ou plusieurs exercices à refaire chez elle, pour ancrer le travail et s’autonomiser au quotidien.
        </p>
        <h2>
          A qui s’adresse cette pratique
        </h2>
        <p>
          A toute personne désireuse de respirer plus librement. La respiration étant au cœur de la Vie, cela concerne tout un chacun. Autant une personne qui se consi- dère en bonne que des personnes qui souffres de troubles au quotidien liés au stress (anxiété, troubles du sommeil, fatigue chronique, nervosité, irritabilité, dou- leurs chroniques, problèmes de concentration).
        </p>
      </Container>
       
      









    //     <Box
    //       component="img"
    //       src="/static/themes/onepirate/productCurvyLines.png"
    //       alt="curvy lines"
    //       sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
    //     />
    //     <Grid container spacing={5}>
    //       <Grid item xs={12} md={4}>
    //         <Box sx={item}>
    //           <Box
    //             component="img"
    //             src="/static/themes/onepirate/productValues1.svg"
    //             alt="suitcase"
    //             sx={{ height: 55 }}
    //           />
    //           <Typography variant="h6" sx={{ my: 5 }}>
    //             The best luxury hotels
    //           </Typography>
    //           <Typography variant="h5">
    //             {
    //               'From the latest trendy boutique hotel to the iconic palace with XXL pool'
    //             }

    //             {
    //               ', go for a mini-vacation just a few subway stops away from your home.'
    //             }
    //           </Typography>
    //         </Box>
    //       </Grid>
    //       <Grid item xs={12} md={4}>
    //         <Box sx={item}>
    //           <Box
    //             component="img"
    //             src="/static/themes/onepirate/productValues2.svg"
    //             alt="graph"
    //             sx={{ height: 55 }}
    //           />
    //           <Typography variant="h6" sx={{ my: 5 }}>
    //             New experiences
    //           </Typography>
    //           <Typography variant="h5">
    //             {
    //               'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '
    //             }

    //             {'your Sundays will not be alike.'}
    //           </Typography>
    //         </Box>
    //       </Grid>
    //       <Grid item xs={12} md={4}>
    //         <Box sx={item}>
    //           <Box
    //             component="img"
    //             src="/static/themes/onepirate/productValues3.svg"
    //             alt="clock"
    //             sx={{ height: 55 }}
    //           />
    //           <Typography variant="h6" sx={{ my: 5 }}>
    //             Exclusive rates
    //           </Typography>
    //           <Typography variant="h5">
    //             {'By registering, you will access specially negotiated rates '}
    //             {'that you will not find anywhere else.'}
    //           </Typography>
    //         </Box>
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </Box>
  );
}

export default Pneumacorps;
