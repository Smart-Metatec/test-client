import styled from "styled-components"


export const ProductsPage = styled.div`
    font-size: 1.5em;

    .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        button {
            height: fit-content;
            background-color: ${({theme}) => theme.colors.lightBlue};
            color: white;
            border: 2px solid transparent;
            font-size: 0.75em;
            padding: 5px 20px;
            border-radius: 5px;
            cursor: pointer;
            position: absolute;

            &:active {
                background-color: transparent;
                border: 2px solid ${({theme}) => theme.colors.lightBlue};
                color: black;
            }
        }
        h1 {
            font-size: 1.25em;
            text-align: center;
            width: fit-content;
            margin: 1rem auto;
        }
    }



    .redeem-container {
        display: flex;
        justify-content: right;
        button {
            font-size: 1em;
            padding: 5px 20px;
            background-color: ${({theme}) => theme.colors.lightBlue};
            color: white;
            border: 2px solid transparent;
            border-radius: 5px;
            cursor: pointer;
            
            transition: .3s ease-in-out;
            
            &:hover {
                background-color: ${({theme}) => theme.colors.green};
                color: black;
            }

            &:active {
                background-color: transparent;
                border: 2px solid ${({theme}) => theme.colors.green};
                transition: none;
            }
        }
    }
    .header {
        display: flex;
        justify-content: space-around;
        border-bottom: 2px solid ${({theme}) => theme.colors.darkBlue};
        padding: 1rem;
        font-weight: 900;

        div {
            width: 150px;
            text-align: center;
        }
    }


`