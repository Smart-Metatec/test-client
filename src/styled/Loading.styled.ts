import styled, { keyframes } from "styled-components"

const spin = keyframes`
    0% {
        transform: rotate(45deg);
        width: 300px;
        height: 300px;
        top: calc(50% - 150px);
        left: calc(50% - 150px);

    }
    50% {
        transform: rotate(225deg);
        width: 100px;
        height: 100px;
        top: calc(50% - 50px);
        left: calc(50% - 50px);
    }
    100% {
        transform: rotate(405deg);
        width: 300px;
        height: 300px;
        top: calc(50% - 150px);
        left: calc(50% - 150px);
    }
`

export const LoadingComponent = styled.div`


    .spinner {
        position: absolute;
        top: calc(50% - 150px);
        left: calc(50% - 150px);
        width: 300px;
        height: 300px;
        /* background-color: black; */
        animation: ${spin} 2s linear infinite;
        div {
            position: absolute;
            &:nth-child(1) {
                border-radius: 50%;
                top: 0;
                left: 0;
                width: 20px;
                height: 20px;
                background-color: ${({theme}) => theme.colors.green};
            }
            &:nth-child(2) {
                border-radius: 50%;
                top: 0;
                right: 0;
                width: 20px;
                height: 20px;
                background-color: ${({theme}) => theme.colors.orange};
            }
            &:nth-child(3) {
                border-radius: 50%;
                bottom: 0;
                left: 0;
                width: 20px;
                height: 20px;
                background-color: ${({theme}) => theme.colors.lightBlue};
            }
            &:nth-child(4) {
                border-radius: 50%;
                bottom: 0;
                right: 0;
                width: 20px;
                height: 20px;
                background-color: ${({theme}) => theme.colors.darkBlue};
            }
        }

        
    }
    span {
        display: block;
        text-align: center;
        font-size: 3em;
        width: 100%;
        margin-top: 2rem;
    }

`