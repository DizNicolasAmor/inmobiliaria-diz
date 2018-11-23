import styled from 'styled-components';

export const FaqWrapper = styled.div`
    background: #FCFCFC;
    padding: 30px;
    min-height: calc(100vh - 140px);
    box-sizing: border-box;
`;

export const FaqQuestionWrapper = styled.div`
    max-width: 900px;
    background: #FCFCFC;
    margin: auto;
    padding: 6px;
    button {
        font-family: "Open Sans", Helvetica, Arial, sans-serif;
        font-size: 14px;
        letter-spacing: 0.5px;
        color: #333;
        background: none;
        border: none;
        width: 100%;
        text-align: left;
        padding: 6px 3px;
        -webkit-transition: 0.3s;
        transition: 0.3s;
        cursor: pointer;
        &:focus,
        &:focus-within {
            outline: none;
        }
        &:hover {
            color: #222;
        }
        .toogle-collapse {
            display: inline-block;
            margin-right: 9px;
        }
    }
    .faq__answer--item {
        font-family: "Open Sans", Helvetica, Arial, sans-serif;
        font-size: 12px;
        line-height: 15px;
        text-align: justify;
        color: #444;
        letter-spacing: .05em;
        padding: 3px 12px;
        cursor: default;
    }
    ul li {
        margin-left: 30px;
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
