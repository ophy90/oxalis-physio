import * as React from 'react';
import {Blocks, SubtitlePurple, TextPurple, TextPurpleSmallerParagraphs} from "./Styles";
import MoreInfosPurpleIcons from "./MoreInfosPurpleIcons";
import {useState} from "react";
import content from '../../content.json';
import MarkdownText from '../components/MarkDownText';

function MoreInfosOnPriceAndTime() {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpenChange = (isOpenFromIcon) => {
        setIsOpen(isOpenFromIcon);
    };

    return (
        <>
            <Blocks>
                    <SubtitlePurple>
                         <MarkdownText>{content.generalInformations.secondBlock[0].text}</MarkdownText>
                    </SubtitlePurple>
                    <TextPurpleSmallerParagraphs>
                        <MarkdownText>{content.generalInformations.secondBlock[1].text}</MarkdownText>
                    </TextPurpleSmallerParagraphs>
                <div style={{display: "flex", flexDirection: "inline", justifyContent: "space-between"}}>
                    <button onClick={handleIsOpenChange} style={{backgroundColor: "transparent", border: "none", cursor: "pointer"}}>
                        {!isOpen &&
                        <TextPurple style={{textDecoration: "underline"}} >
                                    En savoir plus
                        </TextPurple>
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
    return (
        <>
            <TextPurple>
                <MarkdownText>{content.generalInformations.secondBlockMoreInfos[0].text}</MarkdownText>
            </TextPurple>
            <TextPurple>
                <MarkdownText>{content.generalInformations.secondBlockMoreInfos[1].text}</MarkdownText>
            </TextPurple>
            <TextPurple>
                <MarkdownText>{content.generalInformations.secondBlockMoreInfos[2].text}</MarkdownText>
            </TextPurple>
            <TextPurple>
                <MarkdownText>{content.generalInformations.secondBlockMoreInfos[3].text}</MarkdownText>
            </TextPurple>
            <TextPurple>
                <MarkdownText>{content.generalInformations.secondBlockMoreInfos[4].text}</MarkdownText>
            </TextPurple>
            <TextPurple>
                <MarkdownText>{content.generalInformations.secondBlockMoreInfos[5].text}</MarkdownText>
            </TextPurple>
        </>
    );
}

export default MoreInfosOnPriceAndTime;