import * as React from 'react';
import {PurpleLightBox, Blocks} from "../components/Styles";
import content from '../../content.json';
import StyledMarkdownText from '../components/StyledMarkdownText';
import {useTheme} from "@mui/material";

function Physiotherapy() {
    const theme = useTheme();
    return (
            <PurpleLightBox >
                <Blocks>
                    <StyledMarkdownText variant={'h2'} id={'physiotherapy'} style={{color:theme.palette.text.primary.dark}}>
                        {content.physiotherapy.firstBlock[0].text}
                    </StyledMarkdownText>
                    <StyledMarkdownText
                        variant={'body1'}
                        style={{color:theme.palette.text.primary.dark}}
                    >
                        {content.physiotherapy.firstBlock[1].text}
                    </StyledMarkdownText>
                        <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.dark}}>{content.physiotherapy.firstBlock[2].text}</StyledMarkdownText>
                </Blocks>
                <Blocks >
                        <StyledMarkdownText variant={'h3'} id={'physiotherapy'} style={{color:theme.palette.text.primary.dark}}>{content.physiotherapy.secondBlock[0].text}</StyledMarkdownText>
                        <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.dark}}>{content.physiotherapy.secondBlock[1].text}</StyledMarkdownText>
                        <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.dark}}>{content.physiotherapy.secondBlock[2].text}</StyledMarkdownText>
                </Blocks>
                <Blocks>
                    <StyledMarkdownText variant={'h3'} id={'physiotherapy'} style={{color:theme.palette.text.primary.dark}}>{content.physiotherapy.thirdBlock[0].text}</StyledMarkdownText>
                    <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.dark}}>{content.physiotherapy.thirdBlock[1].text}</StyledMarkdownText>
                    <StyledMarkdownText variant={'body1'} style={{color:theme.palette.text.primary.dark}}>{content.physiotherapy.thirdBlock[2].text}</StyledMarkdownText>
                </Blocks>
            </PurpleLightBox>
    )
}

export default Physiotherapy;
