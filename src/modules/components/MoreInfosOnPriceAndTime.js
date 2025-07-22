import * as React from 'react';
import {Blocks} from "./Styles";
import MoreInfosPurpleIcons from "./MoreInfosPurpleIcons";
import {useState} from "react";
import content from '../../content.json';
import StyledMarkdownText from './StyledMarkdownText';
import {useTheme} from "@mui/material";

function MoreInfosOnPriceAndTime() {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpenChange = (isOpenFromIcon) => {
        setIsOpen(isOpenFromIcon);
    };

    const theme = useTheme();

    return (
        <>
            <Blocks>
                <StyledMarkdownText variant={'h3'} style={{ color:theme.palette.text.primary.dark}}>{content.generalInformations.secondBlock[0].text}</StyledMarkdownText>
                <StyledMarkdownText variant={'body1'} style={{color: theme.palette.text.primary.dark}} >{content.generalInformations.secondBlock[1].text}</StyledMarkdownText>
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
                    {isOpen && <MoreInfosOnPriceAndTimeText/>}
                </div>
            </Blocks>
        </>
    );
}

function MoreInfosOnPriceAndTimeText() {
    const theme = useTheme();
    return (
        <>
            <StyledMarkdownText variant={'body1'} style={{color: theme.palette.text.primary.dark}}>{content.generalInformations.secondBlockMoreInfos[0].text}</StyledMarkdownText>
            <StyledMarkdownText variant={'body1'} style={{color: theme.palette.text.primary.dark}}>{content.generalInformations.secondBlockMoreInfos[1].text}</StyledMarkdownText>
            <StyledMarkdownText variant={'body1'} style={{color: theme.palette.text.primary.dark}}>{content.generalInformations.secondBlockMoreInfos[2].text}</StyledMarkdownText>
            <StyledMarkdownText variant={'body1'} style={{color: theme.palette.text.primary.dark}}>{content.generalInformations.secondBlockMoreInfos[3].text}</StyledMarkdownText>
            <StyledMarkdownText variant={'body1'} style={{color: theme.palette.text.primary.dark}}>{content.generalInformations.secondBlockMoreInfos[4].text}</StyledMarkdownText>
            <StyledMarkdownText variant={'body1'} style={{color: theme.palette.text.primary.dark}}>{content.generalInformations.secondBlockMoreInfos[5].text}</StyledMarkdownText>
        </>
    );
}

export default MoreInfosOnPriceAndTime;