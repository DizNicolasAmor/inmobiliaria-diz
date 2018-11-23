import styled from 'styled-components';

export const ComponentWrapper = styled.div`
    max-width: 900px;
    min-height: calc(100vh - 140px);
    box-sizing: border-box;
    background: #FCFCFC;
    margin: auto;
    padding: 6px;
    p {
        font-family: "Open Sans", Helvetica, Arial, sans-serif;
        font-size: 12px;
        line-height: 15px;
        text-align: justify;
        color: #444;
        letter-spacing: .05em;
        padding: 3px 12px;
        cursor: default;
    }
`;

export const ComponentBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    >div {
        width: 300px;
        &.center {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    .logo {
        padding: 18px;
        svg {
            width: 120px;
            height: 120px;
        }
    }
    .home__code {
        display: flex;
        align-items: center;
        &--icon {
            svg {
                width: 33px;
                height: 33px;
                margin: 9px;
            }
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
