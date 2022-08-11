import styled, { keyframes } from "styled-components"

const navSlide = keyframes`
    from {
        transform: translateX(0px);
    }
    to {
        transform: translateX(20px);
    }

`

const lineGrow = keyframes`
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }

`

export const NavComponent = styled.nav`
    flex: 1;
    border-right: 2px solid ${({theme}) => theme.colors.green};
    section {
        svg {
            display: block;
            text-align: center;
            width: fit-content;
            margin: 1rem auto;
            color: lightgray;
            font-size: 7em;
        }
        h4 {
            text-align: center;
            font-size: 1.5em;
            margin: 0;
            margin-bottom: 2rem;
        }
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: fit-content;
        margin: auto;
        li {
            font-size: 1.5em;
            margin: 10px 0px;
            width: fit-content;
            text-align: left;
            a {
                color: ${({theme}) => theme.colors.lightBlue};
                text-decoration: none;
                transform: translateX(0px);
                transition: transform .3s ease-in-out;
            }

            .active {
                position: relative;
                display: block;
                color: ${({theme}) => theme.colors.orange};
                animation: ${navSlide} .3s ease-in-out forwards;
                transform: translateX(0px);
                &::after {
                    content: "";
                    position: absolute;
                    right: 0px;
                    top: 100%;
                    height: 2px;
                    width: 100%;
                    background-color: ${({theme}) => theme.colors.orange};
                    animation: ${lineGrow} .3s ease-in-out forwards
                }
            }
        }
    }

`