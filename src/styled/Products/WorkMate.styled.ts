import styled from "styled-components"

export const WorkMatePage = styled.div`
    font-size: 1.25em;
    height: 80%;
    header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

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
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;

        a {
            font-size: 1.25em;
            height: 4rem;
            width: 30%;
            text-align: center;
            margin: 20px;
            background-color: ${({theme}) => theme.colors.lightBlue};
            line-height: 4rem;
            border-radius: 10px;
            display: block;
            color: white;
            text-decoration: none;

            &:hover {
                box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.lightBlue};
            }

            &:active {
                background-color: ${({theme}) => theme.colors.green};
                box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.green};
                color: black;
            }
        }

        h2 {
            height: 4rem;
            margin: 20px;
        }

        button {
            background-color: ${({theme}) => theme.colors.lightBlue};
            color: white;
            border: none;
            font-size: 1.25em;
            margin: 20px;
            padding: 20px 60px;
            border-radius: 10px;
            height: 4rem;
            width: 30%;
            cursor: pointer;

            &:hover {
                box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.lightBlue};
            }

            &:active {
                background-color: ${({theme}) => theme.colors.green};
                box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.colors.green};
                color: black;
            }
        }
    }
`