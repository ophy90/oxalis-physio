import * as React from 'react';
import {Blocks} from "./Styles";
import MoreInfosPurpleIcons from "./MoreInfosPurpleIcons";
import {useState} from "react";
import content from '../../content.json';
import StyledMarkdownText from './StyledMarkdownText';
import {useTheme} from "@mui/material";

function MoreInfosOnSwissCareSystem() {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpenChange = (isOpenFromIcon) => {
        setIsOpen(isOpenFromIcon);
    };

    const theme = useTheme();
    return (
        <>
            <Blocks>
                <div style={{display: "flex", flexDirection: "inline", justifyContent: "space-between"}}>
                    <button onClick={handleIsOpenChange} style={{backgroundColor: "transparent", border: "none", cursor: "pointer"}}>
                        {!isOpen &&
                        <StyledMarkdownText variant={'body1'} style={{textDecoration: "underline", color: theme.palette.text.primary.dark}} >
                            En savoir plus
                        </StyledMarkdownText>
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
    const themeColor = theme.palette.text.primary.dark;
    return (
        <>
            <StyledMarkdownText variant={'body1'} style={{color: themeColor}}>{content.generalInformations.secondBlock[0].text}</StyledMarkdownText>
            <StyledMarkdownText variant={'body1'} style={{color: themeColor}}>{content.generalInformations.secondBlock[1].text}</StyledMarkdownText>
            <StyledMarkdownText variant={'body1'} style={{color: themeColor}}>{content.generalInformations.secondBlock[2].text}</StyledMarkdownText>
            <StyledMarkdownText variant={'body1'} style={{color: themeColor}}>{content.generalInformations.secondBlock[3].text}</StyledMarkdownText>
        </>
    );
}

export default MoreInfosOnSwissCareSystem;