import * as React from 'react';
import IconClose from '../../assets/OXALIS_site_web_boutons_close_violet.svg'
import IconOpen from '../../assets/OXALIS_site_web_boutons_open_violet.svg'

function IconOpenPurple() {
    return(
        <img
            src={IconOpen}
            alt={"Icon purple to give additional information"}
            style={{ cursor: 'pointer', height: '20px', width: '20px' }}
        />
    );
}

function IconClosePurple() {
    return(
        <img
            src={IconClose}
            alt={"Icon purple to close additional information\""}
            style={{height: '20px', width: '20px' }}
        />
    );
}

export default function MoreInfosPurpleIcons({isOpen, onIsOpenChange}) {

    const handleClick = () => {
        let newIsOpenStatus = !isOpen;
        onIsOpenChange(newIsOpenStatus)
    }

    return(
        <div onClick={handleClick} style={{cursor: 'pointer'}}>
            {isOpen ? <IconClosePurple/> : <IconOpenPurple/> }
        </div>
    );
}

