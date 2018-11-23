import styled from 'styled-components';

export const ListWrapper = styled.div`
    max-width: 1100px;
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

    .grid {
        width: 100%;
        overflow: hidden;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas: "filter filter filter filter"  "products products products products";
      }
    #filter {
        grid-area: filter;
    }
    #products {
        grid-area: products;
    }
    @media screen and (min-width: 450px) {
        .grid {
            min-width: 300px;
            grid-template-areas: "filter products products products";
        }
   }
`;

export const ProductsWrapper = styled.div`

    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    padding: 20px;
    display: grid;
    grid-gap: 10px 10px;
    grid-template-columns: repeat(1, 1fr);

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
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

export const FilterWrapper = styled.div`
    box-sizing: content-box;
    padding: 6px;
    button {
        margin: 5px 5px 5px 5px;
    }
    button {
        border: none;
        border-radius: 3px;
        font-family: 'Roboto',"Helvetica Neue", Arial, sans-serif;
        font-size: 12px;
        letter-spacing: 0.6px;
        color: #FCFCFC;
        background: #AAA;
        margin: 1px;
        padding: 9px 12px;
        text-transform: uppercase;
        cursor: pointer;
        -webkit-transition: 0.3s ease-in-out;
        transition: 0.3s ease-in-out;
        &.active {
            background: #6C6;
        }
        &:hover {
            opacity: .8;
        }
        &:focus {
            outline-color: transparent;
        }
    }

    .filter {
        &__title,
        &__subtitle {
            font-family: 'Roboto',"Helvetica Neue", Arial, sans-serif;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.6px;
            color: #333;
            margin: 12px 0;
            cursor: default;
        }
        &__subtitle {
            font-size: 12px;
            margin: 6px 0;
        }
        &__select {
            display: flex;
            align-items: center;
            justify-content: space-between;
            select {
                width: 120px;
                background: #FFF;
                border-radius: 3px;
                &:hover,
                &:focus {
                    outline-color: transparent;
                }
            }
        }
    }
    input {
        min-width: 210px;
        box-sizing: border-box;
        padding: 3px;
        margin: 6px;
        color: #333;
        border-radius: 3px;
        cursor: text;
        letter-spacing: .5px;
        background: #fff;
        &:hover {
          border-color: #CFC;
        }
        &:hover,
        &:focus {
            outline-color: transparent;
        }
    }
`;

export const ProductWrapper = styled.a`
    border-radius: 3px;
    box-shadow: 1px 1px 2px #040;
    width: 100%;
    min-width: 150px;
    height: 210px;
    background: White;
    margin: 5px;
    padding: 10px;
    border: 0.5px solid lightgrey;
    box-sizing: border-box;
    text-decoration: none;
    &:hover {
        box-shadow: 2px 2px 5px #040;
        cursor: pointer;
    }
    .product {
        &__image {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__hr {
            display: block;
            width: 100px;
            height: 1px;
            background: #222;
            margin: 6px auto;
        }
        &__price,
        &__title {
            font-family: 'Roboto',"Helvetica Neue", Arial, sans-serif;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.6px;
            color: #222;
            margin: 12px 0;
            &:hover {
                text-decoration: none;
            }
        }
        &__price {
            text-align: center;
        }
        &__title {
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.3px;
            text-align: left;
        }
        &:hover {
            cursor: pointer;
            text-decoration: none;
        }
    }
`;
