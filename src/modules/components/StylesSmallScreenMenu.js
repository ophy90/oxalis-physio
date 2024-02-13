import {styled } from "@mui/material";

export const StyledHeaderToolbox = styled('div')({
    "@media (max-width: 800px)": {
        paddingLeft: 0,
    }
})

export const HeaderToolbox = ({ children, style }) => {
    return <StyledHeaderToolbox style={style}>{children}</StyledHeaderToolbox>;
};

export const MenuButtonStyled = styled('div')({
    fontFamily: "Open Sans, sans-serif",
    color: 'white',
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    cursor: 'pointer'
})

export const MenuButton = ({ children, style }) => {
    return <MenuButtonStyled style={style}>{children}</MenuButtonStyled>;
};

export const DrawerContainerStyled = styled('div')({
    padding: "20px 30px",
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
})

export const DrawerContainer = ({ children, style }) => {
    return <DrawerContainerStyled style={style}>{children}</DrawerContainerStyled>;
};

export const RelativeSvgStyled = styled('div')({
    position: "absolute",
    left: '70px',
    top: '100px',
})

export const RelativeSvg = ({ children, style }) => {
    return <RelativeSvgStyled style={style}>{children}</RelativeSvgStyled>;
};

