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
    const themeColor = theme.palette.text.primary.dark;

    return (
        <>
            <Blocks>
                <div style={{display: "flex", flexDirection: "inline", justifyContent: "space-between"}}>
                    <button onClick={handleIsOpenChange} style={{backgroundColor: "transparent", border: "none", cursor: "pointer"}}>
                        {!isOpen &&
                        <StyledMarkdownText variant={'body1'} style={{textDecoration: "underline", color:themeColor}} >
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
    const themeColor = theme.palette.text.primary.dark;
    return (
        <>
            <StyledMarkdownText variant={'body1'} style={{color:themeColor}}>{content.generalInformations.fourthBlock[0].text}</StyledMarkdownText>
            <StyledMarkdownText variant={'body1'} style={{color:themeColor}}>{content.generalInformations.fourthBlock[1].text}</StyledMarkdownText>
            <StyledMarkdownText variant={'body1'} style={{color:themeColor}}>{content.generalInformations.fourthBlock[2].text}</StyledMarkdownText>
            <StyledMarkdownText variant={'body1'} style={{color:themeColor}}>{content.generalInformations.fourthBlock[3].text}</StyledMarkdownText>
            <StyledMarkdownText variant={'body1'} style={{color:themeColor}}>{content.generalInformations.fourthBlock[4].text}</StyledMarkdownText>
            <StyledMarkdownText variant={'body1'} style={{color:themeColor}}>{content.generalInformations.fourthBlock[5].text}</StyledMarkdownText>
        </>
    );
}

export default MoreInfosOnPriceAndTime;