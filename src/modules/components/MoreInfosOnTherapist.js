import * as React from 'react';
import {Blocks} from "./Styles";
import MoreInfosWhiteIcons from "./MoreInfosWhiteIcons";
import {useState} from "react";
import content from '../../content.json';
import MarkDownText from "./StyledMarkdownText";
import {useTheme} from "@mui/material";


function MoreInfosOnTherapist() {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpenChange = (isOpenFromIcon) => {
        setIsOpen(isOpenFromIcon);
    };

    const theme = useTheme();
    const themeColor = theme.palette.text.primary.light;

    return (
        <>
            <Blocks>
                <div style={{display: "flex", flexDirection: "inline", justifyContent: "space-between"}}>
                    <button onClick={handleIsOpenChange} style={{backgroundColor: "transparent", border: "none", cursor: "pointer", margin: "none"}}>
                        {!isOpen &&
                        <MarkDownText variant={'body1'} style={{textDecoration: "underline", color:themeColor}} >
                            En savoir plus
                        </MarkDownText>
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
    const themeColor = theme.palette.text.primary.light;
    return (
        <>
            <MarkDownText variant={'body1'} style={{color:themeColor}}>{content.therapist.secondBlock[0].text}</MarkDownText>
            <MarkDownText variant={'body1'} style={{color:themeColor}}>{content.therapist.secondBlock[1].text}</MarkDownText>
            <MarkDownText variant={'body1'} style={{color:themeColor}}>{content.therapist.secondBlock[2].text}</MarkDownText>
            <MarkDownText variant={'body1'} style={{color:themeColor}}>{content.therapist.secondBlock[3].text}</MarkDownText>
        </>
    );
}

export default MoreInfosOnTherapist;