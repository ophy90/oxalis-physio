import * as React from 'react';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Logo from '../../assets/OXALIS_logo_blanc.png';
import Cross from '../../assets/OXALIS_bouton_croix_blanc.svg';
import {useEffect, useState} from "react";
import {Drawer, useTheme} from "@mui/material";
import Menu from '../../assets/OXALIS_site_web_boutons_menu.svg';
import {DrawerContainer, HeaderToolbox, MenuButton, RelativeSvg} from "../components/StylesSmallScreenMenu";
import content from '../../content.json';
import Typography from "@mui/material/Typography";
import oxalisTheme from "../theme";


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

const DisplayMobile = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <HeaderToolbox>
            <Toolbar sx={{display: 'flex', flexDirection: 'row'}}>
                <Box sx={{display: 'flex', flexGrow: 0, justifyContent: 'center', height: '100%', alignItems: 'center'}} onClick={() => setDrawerOpen(true)}>
                    <MenuButton>
                        <img alt={'bouton de menu'} src={Menu} style={{height: 10}}/>
                    </MenuButton>
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
                    <DrawerContainer sx={{ textAlign: 'center'}}>
                        <RelativeSvg>
                                <Box
                                    component="img"
                                    src={Cross}
                                    height="32px"
                                    width="24px"
                                    alt="cross white"
                                    sx={{ position: 'absolute', bottom: 32}}
                                    onClick={() => setDrawerOpen(false)}
                                />
                        </RelativeSvg>
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
                           }}>{content.home.homeLink}</a>
                        <a href='#physiotherapy'
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
                           }}>{content.home.firstLink}</a>
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
                        >{content.home.secondLink}</a>
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
                        >{content.home.thirdLink}</a>
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
                                },}}
                        >{content.home.fourthLink}</a>
                    </DrawerContainer>
                </Drawer>
            </Toolbar>
        </HeaderToolbox>
    );
}

const DisplayDesktop = () => {
    const theme = useTheme();
    return (
        <Toolbar sx={{justifyContent: 'space-between'}}>
            <Box sx={{display: 'flex', flex: 1, justifyContent: 'space-between'}}>
                <Typography variant="body2">
                    <a href='#physiotherapy'
                       style = {{
                           color: oxalisTheme.palette.text.primary.light,
                           textDecoration: 'none'
                        }}
                    >{content.home.firstLink}</a>
                </Typography>
                <Typography variant="body2">
                <a
                    href='#aPropos'
                    style = {{
                        color: oxalisTheme.palette.text.primary.light,
                        textDecoration: 'none'
                    }}
                >
                    {content.home.secondLink}
                </a>
                </Typography>
            </Box>
            <Box sx={{display: 'flex', flex: 1.5, justifyContent: 'center'}}>
                <a
                    href='#accueil'
                    style = {{
                        color: oxalisTheme.palette.text.primary.light,
                        textDecoration: 'none'
                    }}
                >
                    <img src={Logo} alt={'logo'} style={{height: 30}}/>
                </a>
            </Box>
            <Box sx={{display: 'flex', flex: 1, justifyContent: 'space-between'}}>
                <Typography variant={'body2'}>
                    <a
                        href='#informations'
                        style = {{
                            color: oxalisTheme.palette.text.primary.light,
                            textDecoration: 'none'
                        }}
                    >{content.home.thirdLink}</a>
                </Typography>
                <Typography variant={'body2'}>
                    <a
                        href={'#contact'}
                        style = {{
                            color: oxalisTheme.palette.text.primary.light,
                            textDecoration: 'none'
                        }}
                    >{content.home.fourthLink}</a>
                </Typography>
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
        <div className="topnav" id="myTopnav">
            <ElevationScroll>
                <AppBar position="fixed" color={'transparent'} style={{color: 'transparent', backgroundColor: 'none'}}>
                    {mobileView ? <DisplayMobile/> : <DisplayDesktop/>}
                </AppBar>
            </ElevationScroll>
        </div>
    );
}

export default AppAppBar;
