import styled from 'styled-components'

export const DialDrop = styled.div`
    width: 150px;
    background-color: ${({theme}) => theme.colors.green};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    position: relative;
    cursor: pointer;

    img {
        width: 20px;
        height: fit-content;
    }

    div {
        text-align: center;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
            width: 30px;
        }
    }

    #dial-code {
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            margin-right: 5px;
        }
    }

    ul {
        display: ${(props) => props.show ? "block" : "none"};
        position: absolute;
        height: 300px;
        width: 400px;
        overflow: auto;
        list-style-type: none;
        background-color: white;
        top: 40px;
        z-index: 2;
        margin: 0px;
        padding: 10px;
        border: 2px solid ${({theme}) => theme.colors.darkBlue};
        border-radius: 5px;

        li {
            padding: 5px;

            span {
                word-wrap: break-word;
            }

            &:hover {
                background-color: ${({theme}) => theme.colors.green};
                cursor: pointer;
            }
        }


        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-track {
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.colors.lightBlue};
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background-color: ${({theme}) => theme.colors.green};
        }
    }
`