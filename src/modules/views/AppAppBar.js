import * as React from 'react';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Logo from '../../assets/OXALIS_logo_blanc.png';
import Cross from '../../assets/OXALIS_bouton_croix_blanc.svg';
import {useEffect, useState} from "react";
import {makeStyles} from "@mui/styles";
import {Drawer} from "@mui/material";
import Menu from '../../assets/OXALIS_site_web_boutons_menu.svg';


function ElevationScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });


    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
        style: trigger ? {backgroundColor: 'rgba(60, 60, 60, 0.4)'} : {backgroundColor: 'transparent'},
    });
}

const useStyles = makeStyles(() => ({
    header: {
        "@media (max-width: 800px)": {
            paddingLeft: 0,
        }
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        color: 'white',
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
        cursor: 'pointer'
    },
    drawerContainer: {
        padding: "20px 30px",
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'relative',
    },
    relativeSvg: {
        position: "absolute",
        left: '70px',
        top: '100px',
    }
}));

const DisplayMobile = () => {
    const {header, menuButton, drawerContainer, relativeSvg} = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <Toolbar className={header} sx={{display: 'flex', flexDirection: 'row'}}>
            <Box sx={{display: 'flex', flexGrow: 0, justifyContent: 'center', height: '100%', alignItems: 'center'}} onClick={() => setDrawerOpen(true)}>
                <img className={menuButton} alt={'bouton de menu'} src={Menu} style={{height: 10}}/>
            </Box>
            <Box sx={{display: 'flex', flexGrow: 1, justifyContent: 'center'}}>
                <img src={Logo} alt={'logo'} style={{height: 30}}/>
            </Box>
            <Drawer
                {...{
                    anchor: "left",
                    open: drawerOpen,
                    onClose: () => setDrawerOpen(false),
                }}
                PaperProps={{
                    style: {width: '100%', backgroundColor: '#BD94AA'}
                }}
            >
                <div className={drawerContainer}>
                    <div className={relativeSvg}>
                            <Box
                                component="img"
                                src={Cross}
                                height="32px"
                                width="24px"
                                alt="cross white"
                                sx={{ position: 'absolute', bottom: 32}}
                                onClick={() => setDrawerOpen(false)}
                            />
                    </div>
                    <a href='#accueil'
                       variant="h6"
                       underline="underline"
                       color="white"
                       height='12px'
                       onClick={() => setDrawerOpen(false)}
                       style={{
                           fontSize: '40px',
                           fontFamily: 'dahlia-bold',
                           textDecoration: 'none',
                           color: '#ffffff',
                           hover: {
                               "&:hover": {
                                   textDecoration: 'underline'
                               },
                           }
                       }}>{'Accueil'}</a>
                    <a href='#pneumacorps'
                       variant="h6"
                       underline="underline"
                       color="white"
                       height='12px'
                       onClick={() => setDrawerOpen(false)}
                       style={{
                           fontSize: '40px',
                           fontFamily: 'dahlia-bold',
                           textDecoration: 'none',
                           color: '#ffffff',
                           '&:hover': {
                               textDecoration: 'underline'
                           },
                       }}>{'Pneumacorps'}</a>
                    <a
                        href='#aPropos'
                        variant="h6"
                        underline="none"
                        color="primary"
                        onClick={() => setDrawerOpen(false)}
                        style={{
                            fontSize: '40px',
                            fontFamily: 'dahlia-bold',
                            textDecoration: 'none',
                            color: '#ffffff',
                            '&:hover': {
                                textDecoration: 'underline'
                            },
                        }}
                    >{'À propos'}</a>
                    <a
                        href='#informations'
                        variant="h6"
                        underline="none"
                        color="primary"
                        onClick={() => setDrawerOpen(false)}
                        style={{
                            fontSize: '40px',
                            fontFamily: 'dahlia-bold',
                            textDecoration: 'none',
                            color: '#ffffff',
                            '&:hover': {
                                textDecoration: 'underline'
                            },
                        }}
                    >{'Informations'}</a>
                    <a
                        href='#contact'
                        variant="h6"
                        underline="none"
                        color="primary"
                        onClick={() => setDrawerOpen(false)}
                        style={{
                            fontSize: '40px',
                            fontFamily: 'dahlia-bold',
                            textDecoration: 'none',
                            color: '#ffffff',
                            '&:hover': {
                                textDecoration: 'underline'
                            },
                        }}
                    >{'Contact'}</a>
                </div>
            </Drawer>
        </Toolbar>
    );
}

const DisplayDesktop = () => {
    return (
        <Toolbar sx={{justifyContent: 'space-between'}}>
            <Box sx={{display: 'flex', flex: 1, justifyContent: 'space-between'}}>
                <a href='#pneumacorps'
                   variant="h6"
                   underline="none"
                   color="white"
                   height='12px'
                   style={{
                       fontSize: '12px',
                       textShadow: '0 0 1px white',
                       textDecoration: 'none',
                       color: 'white'
                   }}>{'PNEUMACORPS'}</a>
                <a
                    href='#aPropos'
                    variant="h6"
                    underline="none"
                    color="primary"
                    style={{
                        fontSize: '12px',
                        textShadow: '0 0 1px white',
                        textDecoration: 'none',
                        color: 'white'
                    }}
                >{'À PROPOS'}</a>
            </Box>
            <Box sx={{display: 'flex', flex: 1.5, justifyContent: 'center'}}>
                <img src={Logo} alt={'logo'} style={{height: 30}}/>
            </Box>
            <Box sx={{display: 'flex', flex: 1, justifyContent: 'space-between'}}>
                <a
                    href='#informations'
                    variant="h6"
                    underline="none"
                    color="primary"
                    style={{
                        fontSize: '12px',
                        textShadow: '0 0 1px white',
                        textDecoration: 'none',
                        color: 'white'
                    }}
                >{'INFORMATIONS PRATIQUES'}</a>
                <a
                    href={'#contact'}
                    variant="h6"
                    underline="none"
                    color="primary"
                    style={{
                        fontSize: '12px',
                        textShadow: '0 0 1px white',
                        textDecoration: 'none',
                        color: 'white'
                    }}
                >{'CONTACT'}</a>
            </Box>
        </Toolbar>);
}

function AppAppBar() {
    const [state, setState] = useState({
        mobileView: false,
    });
    const {mobileView} = state;
    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 800
                ? setState((prevState) => ({...prevState, mobileView: true}))
                : setState((prevState) => ({...prevState, mobileView: false}));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);
    return (
        <div class="topnav" id="myTopnav">
            <ElevationScroll>
                <AppBar position="fixed" color={'transparent'} style={{color: 'transparent', backgroundColor: 'none'}}>
                    {mobileView ? <DisplayMobile/> : <DisplayDesktop/>}
                </AppBar>
            </ElevationScroll>
            {/* <Toolbar /> */}
        </div>
    );
}

export default AppAppBar;
