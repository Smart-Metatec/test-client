import styled from "styled-components"

export const CommercePage = styled.div`
    font-size: 1.25em;

    header {
        display: flex;
        align-items: center;
        width: 100%;

        h1 {
            margin: 0px;
            width: calc(100% - 50px);
            text-align: center;
        }

        .back {
            font-size: 2em;
            width: 50px;
            cursor: pointer;
            transition: .2s ease-out;

            &:hover {
                color: ${({theme}) => theme.colors.orange};
            }
        }
    }

    .add {
        width: 70%;
        margin: 2rem auto;
        display: flex;
        justify-content: space-between;

        select {
            font-size: 1em;
            padding: 5px;
            border-radius: 5px;
            background-color: ${({theme}) => theme.colors.green};
            color: black;
            outline: none;
            border: 1px solid transparent;
            margin: 0px 10px;
            cursor: pointer;
        }

        input {
            font-size: 1em;
            border-radius: 5px;
            padding: 5px;
            width: 100%;
            border: 1px solid black;
            outline: none;

            &:focus {
                background-color: #ddd;
                border: 1px solid transparent;
            }
        }

        button {
            font-size: 1em;
            border-radius: 5px;
            padding: 5px 20px;
            width: 15%;
            margin: 0px 10px;
            border: 1px solid transparent;
            background-color: ${({theme}) => theme.colors.lightBlue};
            color: white;
            cursor: pointer;

            &:active {
                background-color: transparent;
                color: black;
                border: 1px solid ${({theme}) => theme.colors.lightBlue};
            }
        }
    }

    .error {
        color: red;
        text-align: center;
    }


    .headers {
        display: flex;
        width: 70%;
        margin: auto;
        justify-content: space-between;
        font-weight: 900;
        border-bottom: 1px solid black;
        margin-bottom: 1rem;
        box-sizing: border-box;
        padding: 10px;

        div {
            width: 100%;
        }

        div:last-child {
            text-align: right;
        }
    }

    .display {
        width: 70%;
        margin: auto;
    }

`