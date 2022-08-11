import styled from "styled-components"

export const WorkMatePage = styled.div`
    font-size: 1.25em;
    header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        /* margin-bottom: 2rem; */

        h1 {
            margin: 0px;
            width: 100%;
            text-align: center;
        }

        .back {
            font-size: 3em;
            cursor: pointer;
            transition: .2s ease-out;

            &:hover {
                color: ${({theme}) => theme.colors.orange};
            }
        }
    }

    main {
        .add {
            margin: 2rem auto;
            width: 60%;

            input {
                font-size: 1em;
                border-radius: 5px;
                border: 1px solid black;
                padding: 5px;
                width: 80%;
                outline: none;

                &:focus {
                    background-color: #ddd;
                    border: 1px solid transparent;
                }
            }

            button {
                font-size: 1em;
                margin: 0px 10px;
                border-radius: 5px;
                border: 1px solid transparent;
                background-color: ${({theme}) => theme.colors.lightBlue};
                color: white;
                padding: 5px 20px;
                width: 15%;
            }
        }

        .headers {
            display: flex;
            justify-content: space-between;
            font-weight: 900;
            border-bottom: 1px solid black;
            div {
                width: 100%;
                padding: 10px;
            }
            div:last-child {
                text-align: right;
            }
        }

        .headers, .display {
            width: 80%;
            margin: auto;
        }

        .display {
            margin-top: 1rem;
        }

        .display-item {
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            box-sizing: border-box;

            &:nth-child(odd){
                background-color: #ddd;
            }
            div {
                width: 100%;
                .delete {
                    color: red;
                    cursor: pointer;
                    font-size: 1.5em;
                    margin-right: 10px;
                }
            }

            div:last-child {
                text-align: right;
            }


        }
    }

`