import styled from "styled-components"

export const CountryDropDownComponent = styled.div`
    
    height: 100%;
    position: relative;
    width: 100%;

    input {
        border: 1px solid black;
        border-radius: 5px;
        padding: 5px;
    }
    ul {
        position: absolute;
        display: ${(props) => props.show ? "block" : "none"};
        top: -330px;
        height: 300px;
        overflow: auto;
        background-color: white;
        backdrop-filter: blur(5px);
        color: black;
        list-style-type: none;
        margin: 20px;
        padding: 0px;
        border: 2px solid ${({theme}) => theme.colors.darkBlue};
        border-radius: 10px;

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

        li {
            padding: 5px;
            display: flex;

            img {
                width: 20px;
            }
            span {
                padding-left: 20px;   
                flex: 5
            }
            &:hover {
                background-color: ${({theme}) => theme.colors.green};
                cursor: pointer;
            }
        }

    }

`