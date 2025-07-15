import * as React from 'react';
import {Blocks, TextWhite} from "./Styles";
import MoreInfosWhiteIcons from "./MoreInfosWhiteIcons";
import {useState} from "react";
import content from '../../content.json';
import MarkDownText from "./MarkDownText";
import {useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";


function MoreInfosOnTherapist() {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpenChange = (isOpenFromIcon) => {
        setIsOpen(isOpenFromIcon);
    };

    const theme = useTheme();

    return (
        <>
            <Blocks>
                <div style={{display: "flex", flexDirection: "inline", justifyContent: "space-between"}}>
                    <button onClick={handleIsOpenChange} style={{backgroundColor: "transparent", border: "none", cursor: "pointer", margin: "none"}}>
                        {!isOpen &&
                        <Typography variant={'body1'} style={{textDecoration: "underline", color: theme.palette.text.primary.light}} >
                            En savoir plus
                        </Typography>
                        }
                    </button>
                    <MoreInfosWhiteIcons onIsOpenChange={handleIsOpenChange} isOpen={isOpen}/>
                </div>
                <br/>
                <div>
                    {isOpen && <MoreInfosOnTherapistText/>}
                </div>
            </Blocks>
        </>
    );
}

function MoreInfosOnTherapistText() {
    const theme = useTheme();
    return (
        <>
            <Typography variant={'body1'} style={{color: theme.palette.text.primary.light}}>
                <MarkDownText>{content.therapist.firstBlockMoreInfos[0].text}</MarkDownText>
            </Typography>
            <Typography variant={'body1'} style={{color: theme.palette.text.primary.light}}>
                <MarkDownText>{content.therapist.firstBlockMoreInfos[1].text}</MarkDownText>
            </Typography>
            <Typography variant={'body1'} style={{color: theme.palette.text.primary.light}}>
                <MarkDownText>{content.therapist.firstBlockMoreInfos[2].text}</MarkDownText>
            </Typography>
            <Typography variant={'body1'} style={{color: theme.palette.text.primary.light}}>
                <MarkDownText>{content.therapist.firstBlockMoreInfos[3].text}</MarkDownText>
            </Typography>
        </>
    );
}

export default MoreInfosOnTherapist;