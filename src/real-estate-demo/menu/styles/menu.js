import styled, { css, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
        margin: 0;
        padding: 0;
        background: #FCFCFC;
	}
`;

export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 18px;
    background: #FCFCFC;
    .brand,
    button {
        font-family: Trattatello;;
        font-size: 14px;
        letter-spacing: 0.6px;
        margin: 3px;
        padding: 6px;
        cursor: default;
        color: #333;
        text-transform: uppercase;
    }
    button {
        font-size: 12px;
        border: none;
        background: transparent;
        border-bottom: 1px solid transparent;
        cursor: pointer;
        -webkit-transition: 0.3s ease-in-out;
        transition: 0.3s ease-in-out;
        &:hover {
            border-bottom: 1px solid Green;
            opacity: .8;
        }
        &:focus-within {
            outline: none;
        }
    }
    ${props => props.isMobile && css`
        box-sizing: border-box;
        height: 70px;
        .icon-menu {
            position: fixed;
            top: 18px;
            right: 18px;
            cursor: pointer;
            z-index: 10;
            svg {
                width: 24px;
                height: 24px;
                path {
                    fill: Green;
                }
            }
        }
    `}
`;
export const Backdrop = styled.div`
    opacity: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #222;
    z-index: 3;
    transition: opacity 0.3s ease-in-out;
    &.active {
        visibility: visible;
        opacity: .4;
    }
    &.inactive {
        opacity: 0;
        z-index: -1;
    }
`;
export const MenuMobile = styled.div`
    opacity: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    padding: 18vh 30px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    background-color: LightGrey;
    z-index: 4;
    transition: opacity 0.3s ease-in-out;
    &.active {
        visibility: visible;
        opacity: 1;
    }
    &.inactive {
        opacity: 0;
        z-index: -1;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .button-mobile {
        margin: 0 auto;
        font-size: x-large;
        background: none;
        border-bottom: 1px solid #FFF;
        width: auto;
    }
`;
