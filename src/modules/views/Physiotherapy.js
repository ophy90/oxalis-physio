import * as React from 'react';
import {SubtitlePurple, TextPurple, PurpleLightBox, Blocks} from "../components/Styles";
import content from '../../content.json';
import MarkdownText from '../components/MarkDownText';
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material";

function Physiotherapy() {
    const theme = useTheme();
    return (
            <PurpleLightBox >
                <Blocks>
                    <Typography variant={'h2'} id={'physiotherapy'} style={{color:theme.palette.text.primary.dark}}>
                        <MarkdownText>{content.physiotherapy.firstBlock[0].text}</MarkdownText>
                    </Typography>
                    <TextPurple>
                        <MarkdownText>{content.physiotherapy.firstBlock[1].text}</MarkdownText>
                    </TextPurple>
                    <TextPurple>
                        <MarkdownText>{content.physiotherapy.firstBlock[2].text}</MarkdownText>
                    </TextPurple>
                </Blocks>
                <Blocks >
                    <SubtitlePurple>
                        <MarkdownText>{content.physiotherapy.secondBlock[0].text}</MarkdownText>
                    </SubtitlePurple>
                    <TextPurple>
                        <MarkdownText>{content.physiotherapy.secondBlock[1].text}</MarkdownText>
                    </TextPurple>
                    <TextPurple>
                        <MarkdownText>{content.physiotherapy.secondBlock[2].text}</MarkdownText>
                    </TextPurple>
                </Blocks>
                <Blocks>
                    <SubtitlePurple>
                        <MarkdownText>{content.physiotherapy.thirdBlock[0].text}</MarkdownText>
                    </SubtitlePurple>
                    <TextPurple>
                        <MarkdownText>{content.physiotherapy.thirdBlock[1].text}</MarkdownText>
                    </TextPurple>
                    <TextPurple>
                        <MarkdownText>{content.physiotherapy.thirdBlock[2].text}</MarkdownText>
                    </TextPurple>
                </Blocks>
            </PurpleLightBox>
    )
}

export default Physiotherapy;
