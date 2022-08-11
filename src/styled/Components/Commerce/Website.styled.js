import styled from "styled-components"

export const WebsiteItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border-radius: 5px;
    font-size: 0.8em;
    &:nth-child(odd){
        background-color: #ddd;
    }

    div {
        width: 100%;
    }

    div:last-child {
        text-align: right;
    }

    .delete {
        color: red;
        cursor: pointer;
        font-size: 1.5em;
    }


`