import * as React from 'react';
import {Blocks} from "./Styles";
import MoreInfosPurpleIcons from "./MoreInfosPurpleIcons";
import {useState} from "react";
import content from '../../content.json';
import MarkdownText from '../components/MarkDownText';
import {useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";

function MoreInfosOnSwissCareSystem() {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpenChange = (isOpenFromIcon) => {
        setIsOpen(isOpenFromIcon);
    };

    const theme = useTheme();

    return (
        <>
            <Blocks>
                <Typography variant={'h3'} style={{ color:theme.palette.text.primary.dark}}>
                    <MarkdownText>{content.generalInformations.firstBlock[2].text}</MarkdownText>
                </Typography>
                <Typography variant={'body1'} style={{ color:theme.palette.text.primary.dark}}>
                    <MarkdownText>{content.generalInformations.firstBlock[3].text}</MarkdownText>
                </Typography>
                <div style={{display: "flex", flexDirection: "inline", justifyContent: "space-between"}}>
                    <button onClick={handleIsOpenChange} style={{backgroundColor: "transparent", border: "none", cursor: "pointer"}}>
                        {!isOpen &&
                        <Typography variant={'body1'} style={{textDecoration: "underline", color: theme.palette.text.primary.dark}} >
                            En savoir plus
                        </Typography>
                        }
                    </button>
                    <MoreInfosPurpleIcons onIsOpenChange={handleIsOpenChange} isOpen={isOpen}/>
                </div>
                <br/>
                <div>
                    {isOpen && <MoreInfosOnSwissCareSystemText/>}
                </div>
            </Blocks>
        </>
    );
}

function MoreInfosOnSwissCareSystemText() {
    const theme = useTheme();
    return (
        <>
            <Typography variant={'body1'} style={{color: theme.palette.text.primary.dark}}>
                <MarkdownText>{content.generalInformations.firstBlockMoreInfos[0].text}</MarkdownText>
            </Typography>
            <Typography variant={'body1'} style={{color: theme.palette.text.primary.dark}}>
                <MarkdownText>{content.generalInformations.firstBlockMoreInfos[1].text}</MarkdownText>
            </Typography>
            <Typography variant={'body1'} style={{color: theme.palette.text.primary.dark}}>
                <MarkdownText>{content.generalInformations.firstBlockMoreInfos[2].text}</MarkdownText>
            </Typography>
            <Typography variant={'body1'} style={{color: theme.palette.text.primary.dark}}>
                <MarkdownText>{content.generalInformations.firstBlockMoreInfos[3].text}</MarkdownText>
            </Typography>
        </>
    );
}

export default MoreInfosOnSwissCareSystem;