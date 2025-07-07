import * as React from 'react';
import {Blocks, SubtitlePurple, TextPurple, TextPurpleSmallerParagraphs} from "./Styles";
import MoreInfosPurpleIcons from "./MoreInfosPurpleIcons";
import {useState} from "react";
import content from '../../content.json';
import MarkdownText from '../components/MarkDownText';

function MoreInfosOnSwissCareSystem() {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpenChange = (isOpenFromIcon) => {
        setIsOpen(isOpenFromIcon);
    };

    return (
        <>
            <Blocks>
                <SubtitlePurple>
                    <MarkdownText>{content.generalInformations.firstBlock[2].text}</MarkdownText>
                </SubtitlePurple>
                <TextPurpleSmallerParagraphs>
                    <MarkdownText>{content.generalInformations.firstBlock[3].text}</MarkdownText>
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
                    {isOpen && <MoreInfosOnSwissCareSystemText/>}
                </div>
            </Blocks>
        </>
    );
}

function MoreInfosOnSwissCareSystemText() {
    return (
        <>
            <TextPurple>
                <MarkdownText>{content.generalInformations.firstBlockMoreInfos[0].text}</MarkdownText>
            </TextPurple>
            <TextPurple>
                <MarkdownText>{content.generalInformations.firstBlockMoreInfos[1].text}</MarkdownText>
            </TextPurple>
            <TextPurple>
                <MarkdownText>{content.generalInformations.firstBlockMoreInfos[2].text}</MarkdownText>
            </TextPurple>
            <TextPurple>
                <MarkdownText>{content.generalInformations.firstBlockMoreInfos[3].text}</MarkdownText>
            </TextPurple>
        </>
    );
}

export default MoreInfosOnSwissCareSystem;