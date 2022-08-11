import styled from "styled-components"
import background from "../../images/background.jpg"

export const CreateAccountPage = styled.main`
    background-image: url(${background});
    height: 100vh;
    color: white;

    > div {
        width: fit-content;
        margin: auto;
    }

    form {
        width: 40vw;
        margin: auto;
        font-size: 1.5em;
        div {
            width: 100%;
            margin: 2rem auto;
            label {
                width: 100%;
                /* margin-bottom: 30px; */
                /* border: 20px solid blue; */
            }

            input {
                margin-top: 0.5rem;
                outline: none;
                font-size: 1em;
                width: 100%;
                background-color: transparent;
                border: 2px solid ${({theme}) => theme.colors.green};
                padding: 0.5rem;
                border-radius: 5px;
                color: white;

                &:focus {
                    border: 2px solid ${({theme}) => theme.colors.lightBlue};
                }
            }

            button {
                margin: auto;
                display: block;
                background-color: ${({theme}) => theme.colors.lightBlue};
                border: 2px solid transparent;
                font-size: 1em;
                padding: 5px 40px;
                border-radius: 5px;
                color: white;
                cursor: pointer;

                &:active {
                    background-color: ${({theme}) => theme.colors.green};
                }
            }
        }
    }
    p {
        text-align: center;
        font-size: 1.25em;
        a {
            color: ${({theme}) => theme.colors.green};
            
        }
    }

    .complete {
        h1 {
            text-align: center;
            font-size: 3em;
        }
        
        button {
            display: block;
            margin: auto;
            font-size: 2em;
            background-color: ${({theme}) => theme.colors.green};
            color: black;
            border: 2px solid transparent;
            border-radius: 5px;
            padding: 5px 40px;
            cursor: pointer;

            &:active {
                background-color: ${({theme}) => theme.colors.lightBlue};
                color: white;
            }
        }
    }

`