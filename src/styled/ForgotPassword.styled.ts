import styled from "styled-components"
import background from "../images/background.jpg"

export const ForgotPage = styled.div`
    background-image: url(${background});
    height: 100vh;
    box-sizing: border-box;
    margin: 0px;
    color: white;
    font-size: 1.5em;
    text-align: center;
    button {
        background-color: ${({theme}) => theme.colors.green};
        font-size: 1em;
        margin-top: 1rem;
        border: 2px solid transparent;
        border-radius: 5px;
        cursor: pointer;

        &:active {
            background-color: transparent;
            border: 2px solid ${({theme}) => theme.colors.green};
            color: white;
        }
    }

    .login {
        font-size: 1.25em;
        padding: 5px 20px;
    }
    img {
        display: block;
        margin: auto;
    }
    form {
        width: fit-content;
        margin: auto;
        div {
            display: flex;
            flex-direction: column;
            label {
                font-size: 1.25em;
                margin-bottom: 1rem;
            }

            input {
                font-size: 1em;
                padding: 5px;
                border-radius: 5px;
                border: 2px solid ${({theme}) => theme.colors.lightBlue};
                background-color: transparent;
                outline: none;
                color: white;

                &:focus {
                    border: 2px solid ${({theme}) => theme.colors.green};
                }
            }

            
        }
    }

    .error {
        color: red;
        text-align: center;
        margin-top: 1rem;
    }

`