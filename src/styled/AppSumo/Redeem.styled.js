import styled from "styled-components"

export const RedeemPage = styled.main`
    height: 100vh;
    margin: auto;
    font-size: 1.1em;
    font-family: sans-serif;
    background-image: url("../images/background.jpg");
    padding-bottom: 1rem;
    box-sizing: border-box;
    color: black;

    header {
        width: fit-content;
        margin: auto;
        padding: 1rem;

        
        img {
            width: 300px;
        }

        #smt-logo {
            width: 400px;
        }

        .separator {
            font-size: 3em;
            margin: 0px 20px;
            color: white;
        }
    }

    section {
        box-sizing: border-box;
        width: 30%;
        padding: 1rem;
        margin: auto;
        color: white;

        h4 {
            color: ${({theme}) => theme.colors.green};
            font-size: 2em;
        }
    }

    form {
        width: 30%;
        margin: auto;
        box-shadow: 0px 0px 4px 1px #20202050;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border-radius: 10px;
        background-color: transparent;

        div {
            width: 100%;
            margin: auto;
            padding: 1rem;

            label {
                width: 100%;
                display: block;
                margin-bottom: 5px;
                color: white;
            }

            .field {
                display: block;
                width: 100%;
                font-size: 1.1em;
                padding: 5px;
                border-radius: 5px;
                border: 1px solid ${({theme}) => theme.colors.green};
                margin: auto;
                background-color: transparent;
                outline: none;
                color: white;

                &:focus {
                    border: 1px solid ${({theme}) => theme.colors.lightBlue};
                }
            }

            button {
                background-color: ${({theme}) => theme.colors.green};
                color: white;
                font-size: 1.1em;
                padding: 0.5rem 4rem;
                border-radius: 5px;
                border: 1px solid transparent;
                display: block;
                margin: auto;
                cursor: pointer;
                transition: 0.2s linear;
                width: 40%;

                &:hover {
                    background-color: ${({theme}) => theme.colors.orange};
                    color: white;
                }

                &:active {
                    border: 2px solid ${({theme}) => theme.colors.orange};
                    background-color: transparent;
                }
            }
        }

    }

    .success {
        font-size: 1.5em;
        h4 {
            font-size: 1.5em;
        }
    }

    .resend {
        button {
            display: block;
            margin: auto;
            background-color: ${({theme}) => theme.colors.lightBlue};
            font-size: 1.5em;
            border: 1px solid transparent;
            color: white;
            padding: 10px 40px;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.2s linear;

            &:hover {
                background-color: ${({theme}) => theme.colors.orange};
            }

            &:active {
                background-color: transparent;
                border: 2px solid ${({theme}) => theme.colors.orange};
                transition: 0s;
            }
        }
    }

    .error {
        display: block;
        width: 100%;
        font-size: 1.1em;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid red;
        margin: auto;
        background-color: transparent;
        outline: none;
        color: white;

        &:focus {
            border: 1px solid ${({theme}) => theme.colors.lightBlue};
        }
    }

    .error-message {
        color: red;
    }

    .login-link {
        color: white;
        text-align: center;
        
        a {
            color: ${({theme}) => theme.colors.green};
        }
    }
`
