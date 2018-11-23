import styled from 'styled-components';

export const ComponentWrapper = styled.div`
    max-width: 900px;
    min-height: calc(100vh - 140px);
    box-sizing: border-box;
    background: #FCFCFC;
    margin: auto;
    padding: 6px;
    p,
    li,
    .subtitle {
        font-family: "Open Sans", Helvetica, Arial, sans-serif;
        font-size: 12px;
        line-height: 15px;
        text-align: justify;
        color: #444;
        letter-spacing: .05em;
        padding: 3px 12px;
        cursor: default;
    }
    .subtitle {
        font-size: 16px;
        line-height: 21px;
        font-weight: 600;
        margin-top: 18px;
    }
    .pictures {
        &__wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            button {
                width: 150px;
                height: 100px;
                margin: 9px 9px;
                overflow: hidden;
                box-shadow: 1px 1px 3px;
                img {
                    width: 100%;
                    border-radius: 3px;
                    cursor: pointer;
                }
            }
        }
    }
    .attributes-container {
        padding: 0% 9%;
    }
    .center {
        text-align: center;
        .margin-top;
        margin-top: 50px;
    }
`;

export const Title = styled.h1`
    font-family: 'Roboto',"Helvetica Neue", Arial, sans-serif;
    font-size: 20px;
    text-align: center;
    letter-spacing: 1px;
    color: #333333;
    cursor: default;
`;

export const CustomHr = styled.div`
    display: block;
    width: 50px;
    height: 1px;
    background: #00CC00;
    margin: 6px auto;
    margin-bottom: 30px;
    cursor: default;
`;

export const Backdrop = styled.div`
    opacity: .4;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #222;
    z-index: 3;
    transition: opacity 0.3s ease-in-out;
`;

export const Modal = styled.div`
    .modal__picture {
        position: fixed;
        width: 50%;
        height: auto;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 4;
        transition: opacity 0.3s ease-in-out;
        padding: 0;
        border: none;
        margin: 0;
        background: transparent;
        &:focus,
        &:focus-within {
            outline: none;
        }
        img {
            width: 100%;
            height: auto;
        }
    }
`;
