import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function APropos() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography color="inherit" align="center" variant="h1" marked="center">
          A propos
      </Typography>
      <p>
        Une quarantaine d’années par Benoît Tremblay, inhalothérapeute québécois. Elle intègre diverses techniques de relaxation, dont le but premier et fondamental est de diminuer les effets du stress chronique et d’éviter la limitation de la capacité respiratoire. Elle se définit comme de la relaxation et réorientation respiratoire intégrée (RRRI). La vision holistique de l’humain est au cœur de ce travail et tend vers un alignement corps-âme-esprit. Les outils utilisés sont régulièrement actuali- sés et modifiés par Benoît afin de correspondre au mieux aux besoins de chacun.
      </p>
      <h2>
      « On est bien peu de chose, Et mon amie la rose Me l’a dit ce matin. »
      </h2>
      <p>
      Commencer avec ce qui est là dans l’instant, l’évaluation se fait à la marche, en position assise et couchée. Ensuite, avec les éléments mis en lumière par l’obser- vation, commence le travail de rééquilibration, qui consiste en des mobilisations, des postures, des étirements doux. Et finalement, la personne aura un ou plusieurs exercices à refaire chez elle, pour ancrer le travail et s’autonomiser au quotidien.
      </p>
    </Container>





      /* <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box> */
  );
}