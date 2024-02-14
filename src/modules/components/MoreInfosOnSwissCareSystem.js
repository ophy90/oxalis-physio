import * as React from 'react';
import {Blocks, SubtitlePurple, TextPurple, TextPurpleSmallerParagraphs} from "./Styles";
import MoreInfosPurpleIcons from "./MoreInfosPurpleIcons";
import {useState} from "react";

function MoreInfosOnSwissCareSystem() {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpenChange = (isOpenFromIcon) => {
        setIsOpen(isOpenFromIcon);
    };

    return (
        <>
            <Blocks>
                <SubtitlePurple>
                    Notre système de santé Suisse et son système tarifaire
                </SubtitlePurple>
                <TextPurpleSmallerParagraphs>
                    Conditions de prise en charge des frais de physiothérapie par les assurances.
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
                La physiothérapie est une branche de la santé qui, sur prescription médicale, est prise en charge par
                l’assurance-maladie, ainsi que par l’assurance-accident, l’assurance-invalidité et militaire.
                Pour cette raison, les tarifs sont définis par les autorités cantonales et sont les mêmes dans tout le
                canton de Fribourg.
            </TextPurple>
            <TextPurple>
                Pour pouvoir bénéficier de séances à la maison, ceci doit avoir été spécifié par le·la médecin sur la
                prescription.
            </TextPurple>
            <TextPurple>
                Sachez qu’au-delà de 36 séances (par cas), votre médecin devra justifier par écrit la nécessité de la
                prise en charge auprès du·de la médecin-conseil de votre assurance.
                Il est toujours intéressant de rappeler que le remboursement des frais dépend votre franchise.
                Lorsque vous avez dépassé la franchise, vous payez la quote-part des frais totaux.
            </TextPurple>
        </>
    );
}

export default MoreInfosOnSwissCareSystem;