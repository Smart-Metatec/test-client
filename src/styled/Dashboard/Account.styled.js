import styled from "styled-components"


export const AccountPage = styled.div`
    section {
        display: flex;
        justify-content: space-around;
        font-weight: 700;
        span {
            font-weight: 500;
        }
    }
    h2 {
        text-align: center;
    }

    form {
        width: 80%;
        margin: auto;
        h1 {
            text-align: center;
        }
        > div {
            display: grid;
            grid-gap: 1rem;
            grid-template-columns: 1fr 1fr;
            > .field-container {
                width: 90%;
                margin: auto;
                label {
                    display: block;
                    width: 100%;
                    font-size: 1.2em;
                    margin-bottom: 10px;
                    
                }

                input {
                    width: 100%;
                    font-size: 1.2em;
                    border-radius: 5px;
                    border: 1px solid black;
                    padding: 5px;
                }

                .number {
                    display: flex;
                    width: 102%;
                    padding: 0px;
                    margin: 0px;

                    input {
                        width: 100%;
                        border-top-left-radius: 0px;
                        border-bottom-left-radius: 0px;
                    }
                }
            }
        }
        
    }

    .submit {
        font-size: 1.5em;
        padding: 5px 40px;
        border-radius: 5px;
        border: none;
        display: block;
        margin: 2rem auto;
        background-color: ${({theme}) => theme.colors.green};
        color: black;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        border: 2px solid transparent;

        &:hover {
            background-color: ${({theme}) => theme.colors.lightBlue};
            color: white;
        }

        &:active {
            background-color: transparent;
            border: 2px solid ${({theme}) => theme.colors.lightBlue};
            color: black;
        }

    }

`