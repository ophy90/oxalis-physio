import * as React from 'react';
import {Blocks, TextWhite} from "./Styles";
import MoreInfosWhiteIcons from "./MoreInfosWhiteIcons";
import {useState} from "react";
import content from '../../content.json';
import MarkDownText from "./MarkDownText";


function MoreInfosOnTherapist() {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpenChange = (isOpenFromIcon) => {
        setIsOpen(isOpenFromIcon);
    };

    return (
        <>
            <Blocks>
                <div style={{display: "flex", flexDirection: "inline", justifyContent: "space-between"}}>
                    <button onClick={handleIsOpenChange} style={{backgroundColor: "transparent", border: "none", cursor: "pointer", margin: "none"}}>
                        {!isOpen &&
                        <TextWhite style={{textDecoration: "underline"}} >
                            En savoir plus
                        </TextWhite>
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
    return (
        <>
            <TextWhite>
                <MarkDownText>{content.therapist.firstBlockMoreInfos[0].text}</MarkDownText>
            </TextWhite>
            <TextWhite>
                <MarkDownText>{content.therapist.firstBlockMoreInfos[1].text}</MarkDownText>
            </TextWhite>
            <TextWhite>
                <MarkDownText>{content.therapist.firstBlockMoreInfos[2].text}</MarkDownText>
            </TextWhite>
            <TextWhite>
                <MarkDownText>{content.therapist.firstBlockMoreInfos[3].text}</MarkDownText>
            </TextWhite>
        </>
    );
}

export default MoreInfosOnTherapist;