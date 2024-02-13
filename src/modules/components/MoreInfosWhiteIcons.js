import * as React from 'react';
import IconClose from '../../assets/OXALIS_site_web_boutons_close_blanc.svg'
import IconOpen from '../../assets/OXALIS_site_web_boutons_open_blanc.svg'

function IconOpenWhite() {
    return(
        <img
            src={IconOpen}
            alt={"Icon white to give additional information"}
            style={{ cursor: 'pointer', height: '20px', width: '20px' }}
        />
    );
}

function IconCloseWhite() {
    return(
        <img
            src={IconClose}
            alt={"Icon white to close additional information\""}
            style={{height: '20px', width: '20px' }}
        />
    );
}

export default function MoreInfosWhiteIcons({isOpen, onIsOpenChange}) {

    const handleClick = () => {
        let newIsOpenStatus = !isOpen;
        onIsOpenChange(newIsOpenStatus)
    }

    return(
        <div onClick={handleClick} style={{cursor: 'pointer'}}>
            {isOpen ? <IconCloseWhite/> : <IconOpenWhite/> }
        </div>
    );
}

