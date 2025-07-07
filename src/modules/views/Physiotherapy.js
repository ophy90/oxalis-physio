import * as React from 'react';
import {HeaderTitlePurple, SubtitlePurple, TextPurple, PurpleLightBox, Blocks} from "../components/Styles";
import content from '../../content.json';
import MarkdownText from '../components/MarkDownText';

function Physiotherapy() {
    return (
            <PurpleLightBox >
                <Blocks>
                    <HeaderTitlePurple id={'physiotherapy'}>
                        <MarkdownText>{content.physiotherapy.firstBlock[0].text}</MarkdownText>
                    </HeaderTitlePurple>
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
