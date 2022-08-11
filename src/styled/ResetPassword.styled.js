import styled from "styled-components"
import background from "../images/background.jpg"
export const ResetPasswordPage = styled.div`
    background-image: url(${background});
    height: 100vh;
    color: white;
    font-size: 1.5em;
    text-align: center;

    form {
        width: 40vw;
        margin: auto;
        > div {
            display: flex;
            flex-direction: column;
            margin: 2rem 0px;
            label {
                text-align: left;
                margin-bottom: 1rem;
                user-select: none;
            }
            div {
                position: relative;
                display: flex;
                input {
                    font-size: 1em;
                    padding: 5px;
                    border-radius: 5px;
                    outline: none;
                    border: 2px solid ${({theme}) => theme.colors.lightBlue};
                    background-color: transparent;
                    color: white;
                    width: 100%;

                    &:focus {
                        border: 2px solid ${({theme}) => theme.colors.green};
                    }
                }
                span {
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    position: absolute;
                    width: fit-content;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }
            

            button {
                font-size: 1em;
                background-color: ${({theme}) => theme.colors.green};
                border: 2px solid ${({theme}) => theme.colors.green};
                border-radius: 5px;
                color: white;
                cursor: pointer;
                user-select: none;

                &:active {
                    background-color: transparent;
                }
            }
        }
    }
`