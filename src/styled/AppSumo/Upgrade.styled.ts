import styled from "styled-components"
import background from "../images/background.jpg"

export const UpgradePage = styled.div`
    background-image: url(${background});
    height: 100vh;
    text-align: center;
    font-size: 1.5em;
    color: white;
    header {
        padding-top: 5rem;
    }

    main {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 7em;
        height: 30vh;
        form {
            padding: 2em;
            border-radius: 10px;
            width: 20em;
            height: 12em;
            background-color: ${({theme}) => theme.colors.darkBlue};
            background-color: white;
            color: black;
            div {
                label {
                    display: block;
                    text-align: left;
                    margin: 10px 0px;
                }
                input {
                    background-color: transparent;
                    font-size: 1em;
                    background-color: #ddd;
                    border: 2px solid transparent;
                    color: black;
                    border-radius: 5px;
                    width: 100%;
                    outline: none;
                    padding: 5px;
                    margin-top: 10px;
                }

                button {
                    font-size: 1em;
                    background-color: ${({theme}) => theme.colors.lightBlue};
                    border: 2px solid transparent;
                    margin: 2em auto;
                    padding: 5px 20px;
                    border-radius: 5px;
                    color: white;
                    cursor: pointer;
                    margin: 1rem;
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
        }

        .user-info {
            background-color: white;
            color: black;
            padding: 2em;
            border-radius: 10px;
            width: 20em;
            height: 12em;
            display: flex;
            justify-content: space-around;
            
            .labels {
                text-align: left;
                div {
                    margin: 5px 0px;
                }
            }

            .data {
                text-align: left;
                div {
                    margin: 5px 0px;
                }
            }

        }
    }

    .error {
        color: red;
        text-align: left;
    }

    @media screen and (max-width: 1300px) {
        font-size: 1.25em;
    }
    @media screen and (max-width: 1050px) {
        font-size: 1em;
    }
    @media screen and (max-width: 850px) {
        main {
            flex-direction: column;
            height: 60vh;
        }
    }
    @media screen and (max-width: 450px) {
        header {
            img {
                width: 80vw;
            }
        }
        main {
            form {
                width: 15em;
                div {
                    button {
                        font-size: 0.75em;
                        padding: 4px 10px;
                    }
                }
            }
            .user-info {
                width: 15em;
            }
        }
    }


`