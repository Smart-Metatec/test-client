import styled from "styled-components"

export const AdminLoginPage = styled.main`
    height: 100vh;
    background-image: url("../images/background.jpg");
    color: white;
    font-size: 1.5em;
    h1 {
        margin: 0px;
        text-align: center;
    }

    form {
        width: fit-content;
        margin: auto;
        margin-top: 20vh;
        div {
            margin-top: 1rem;
            position: relative;

            div {
                position: relative;
                .error {
                    color: red;
                    font-size: 0.75em;
                    position: absolute;
                    top: 50px;
                    left: 105%;
                    width: max-content;
                }
            }
            label {
                display: block;
            }
            input {
                font-size: 1em;
                border-radius: 5px;
                border: 1px solid ${({theme}) => theme.colors.green};
                background-color: transparent;
                padding: 5px 10px;
                color: white;
                outline: none;
                width: 30vw;
            }

            span {
                position: absolute;
                top: 40px;
                right: 20px;
                :hover {
                    cursor: pointer;
                }
            }
            button {
                font-size: 1em;
                padding: 5px;
                width: 100%;
                background-color: ${({theme}) => theme.colors.green};
                border-radius: 5px;
                display: block;
                margin: auto;

                :active {
                    background-color: ${({theme}) => theme.colors.lightBlue};
                }

                :hover {
                    cursor: pointer;
                }
            }
        }
    }

`