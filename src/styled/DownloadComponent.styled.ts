import styled from "styled-components"

export const DownloadComponent = styled.div`
    div {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        justify-content: space-between;
        border-top: 1px solid grey;
        border-bottom: 1px solid grey;
        padding: 0px 5rem;
        align-items: center;
        font-size: 1.5em;

        button {
            background-color: ${({theme}) => theme.colors.orange};
            border: 2px solid transparent;
            border-radius: 5px;
            color: white;
            height: fit-content;
            padding: 5px 20px;
            font-size: 0.75em;
            cursor: pointer;
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
`