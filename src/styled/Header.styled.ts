import styled from "styled-components"

export const HeaderComponent = styled.header`
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: auto;
    align-items: center;
    margin-top: 1rem;
    img {
        height: 100px;
    }
    nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        ul {
            width: 100%;
            justify-content: center;
            display: flex;
            list-style-type: none;
            padding: 0;
            margin: 0;
            li {
                margin: 0px 20px;
                font-size: 1.5em;
                a {
                    text-decoration: none;
                }
            }
        }

        button {
            background: ${({theme}) => theme.colors.lightBlue};
            color: white;
            border: 2px solid transparent;
            padding: 5px 20px;
            height: fit-content;
            font-size: 1.5em;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s ease-in-out;

            &:hover {
                background-color: ${({theme}) => theme.colors.green};
                color: black;

            }

            &:active {
                background-color: transparent;
                border: 2px solid ${({theme}) => theme.colors.green};
            }
        }
    }
`