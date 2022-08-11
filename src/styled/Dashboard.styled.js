import styled from "styled-components"

export const DashboardPage = styled.main`


`


export const Main = styled.section`
    display: flex;
    box-shadow: 0px 0px 50px 4px #00000030;
    border-radius: 10px;
    width: 80%;
    margin: 4rem auto;
    height: 70vh;
`

export const DashboardNestedRoutes = styled.div`
    width: 100%;
    flex: 5;
    margin: 20px;
    overflow: auto;
    position: relative;
    ::-webkit-scrollbar {
        width: 7px;
    }

    ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
        border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.colors.lightBlue};
        border-radius: 20px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${({theme}) => theme.colors.green};
    }
`