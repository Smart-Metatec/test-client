import styled from "styled-components"

export const HeaderStyle = styled.header`
    background-color: ${({theme}) => theme.colors.darkBlue};
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 150px;
    }
    ul {
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        width: 20vw;
        li {
            a {
                text-decoration: none;
                color: white;
            }
        }
    }
`