import * as React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {styled} from "@mui/styles";

const color = {
    color: ''
};

const HeaderTitle = styled(Typography)({
    color: '#914e72',
    padding: '25px',
});

function Pneumacorps() {
    return (
        <div>
            <Container sx={{textAlign: 'center'}}>
                <HeaderTitle align="center" variant="h1Pink" marked="center">
                    PneumaCorps
                </HeaderTitle>
            </Container>
            <Container>
                <Typography color='#914e72' align="center" variant="body" marked="center"><br/>
                    La pratique que je propose se base sur une approche qui se nomme PneumaCorps.
                </Typography>
                <Typography color="inherit" align="center" variant="h2" marked="center">
                    Origine de la pratique
                </Typography>
                <p>
                    Cette approche a été développée il y a une quarantaine d’années par Benoît Tremblay,
                    inhalothérapeute québécois. Elle intègre diverses techniques de relaxa- tion, dont le but premier et
                    fondamental est de diminuer les effets du stress chro- nique et d’éviter la limitation de la
                    capacité respiratoire. Elle se définit comme de la relaxation et réorientation respiratoire intégrée
                    (RRRI). La vision holistique de l’humain est au cœur de ce travail et tend vers un alignement
                    corps-âme-esprit. Les outils utilisés sont régulièrement actualisés et modifiés par Benoît afin de
                    cor- respondre au mieux aux besoins de chacun.
                </p>
                <Typography color="inherit" align="center" variant="h2" marked="center">
                    Déroulé d’une séance
                </Typography>
                <p>
                    Il s’agit d’un travail en profondeur sur des tensions chroniques pour libérer le souffle. La
                    pratique s’adresse à toute personne intéressée par ce propos. Au cours d’une séance, je propose dans
                    un premier temps de prendre conscience des tensions auxquelles nous sommes habitués et que nous
                    avons finalement « nor- malisées ». Commencer avec ce qui est là dans l’instant, l’évaluation se
                    fait à la marche, en position assise et couchée. Ensuite, avec les éléments mis en lumière par
                    l’observation, commence le travail de rééquilibration, qui consiste en des mobilisations, des
                    postures, des étirements doux. Et finalement, la personne aura un ou plusieurs exercices à refaire
                    chez elle, pour ancrer le travail et s’autonomiser au quotidien.
                </p>
                <Typography color="inherit" align="center" variant="h2" marked="center">
                    A qui s’adresse cette pratique
                </Typography>
                <p>
                    A toute personne désireuse de respirer plus librement. La respiration étant au cœur de la Vie, cela
                    concerne tout un chacun. Autant une personne qui se consi- dère en bonne que des personnes qui
                    souffres de troubles au quotidien liés au stress (anxiété, troubles du sommeil, fatigue chronique,
                    nervosité, irritabilité, dou- leurs chroniques, problèmes de concentration).
                </p>
            </Container>
        </div>
    )
}

export default Pneumacorps;
