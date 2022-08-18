import styled from "styled-components"

export const SupportPage = styled.div`
    font-size: 1.4em;
    text-align: center;
    h1 {
        margin: 0px;
    }
    
    

    .btn-container {
        display: flex;
        justify-content: space-evenly;
        a {
            background-color: ${({theme}) => theme.colors.green};
            color: black;
            text-decoration: none;
            padding: 5px 20px;
            border-radius: 5px;
        }
        button {
            background-color: ${({theme}) => theme.colors.green};
            font-size: 1em;
            color: black;
            border: 2px solid transparent;
            border-radius: 5px;
            padding: 5px 20px;
            cursor: pointer;

            &:active {
                background-color: transparent;
                border: 2px solid ${({theme}) => theme.colors.green};
                color: black;
            }
        }
    }

`