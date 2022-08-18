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
        margin-top: 10rem;
        height: 30vh;
        form {
            padding: 3rem;
            border-radius: 10px;
            width: 30vw;
            height: 100%;
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
                }

                button {
                    font-size: 1em;
                    background-color: ${({theme}) => theme.colors.lightBlue};
                    border: 2px solid transparent;
                    margin: 2rem auto;
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
            padding: 3rem;
            border-radius: 10px;
            width: 30vw;
            height: 100%;
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

`