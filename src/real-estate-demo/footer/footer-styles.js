import styled, { css } from 'styled-components';

export const FooterWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 18px;
    background: #3A3;
    height: 70px;
    box-sizing: border-box;
    ${props => props.isMobile && css`
        justify-content: center;
    `}
    .footer__text {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 15px;
        text-align: justify;
        color: #222;
        letter-spacing: .05em;
        padding: 3px 12px;
        cursor: default;
    }
    .footer__icon svg {
        width: 30px;
        height: 30px;
        margin: 6px;
        path {
            fill: #222 !important;
        }
    }
`;

export const OtherComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items; center;
    justify-content: space-around;
`;
