import styled from "styled-components"

export const ProductComponent = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    border-bottom: 2px solid ${({theme}) => theme.colors.orange};
    div {
        width: 150px;
        text-align: center;

        button {
            background-color: ${({theme}) => theme.colors.green };
            border: 2px solid transparent;
            border-radius: 5px;
            font-size: 0.8em;
            padding: 5px 20px;
            cursor: pointer;
            transition: .3s ease-in-out;

            &:hover {
                background-color: ${({theme}) => theme.colors.lightBlue};
                color: white;
            }

            &:active {
                background-color: transparent;
                border: 2px solid ${({theme}) => theme.colors.lightBlue};
                color: black;
                transition: none;
            }
        }

        .download {
            background-color: ${({theme}) => theme.colors.orange };
            border: 2px solid transparent;
            border-radius: 5px;
            font-size: 0.8em;
            padding: 5px 20px;
            cursor: pointer;
            transition: .3s ease-in-out;
            color: white;

            &:hover {
                background-color: ${({theme}) => theme.colors.lightBlue};
                color: white;
            }

            &:active {
                background-color: transparent;
                border: 2px solid ${({theme}) => theme.colors.lightBlue};
                color: black;
                transition: none;
            }
        }
    }

`