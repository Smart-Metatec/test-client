import React from 'react'
import styled from 'styled-components'

const ListHeader = ({headings}) => {
  return (
    <ListHeaderStyle>
        <div id='heading-container'>
            {headings.map((heading, index) => (
                <div key={index}>{heading}</div>
            ))}
        </div>
        <div id='line'></div>
    </ListHeaderStyle>
  )
}

const ListHeaderStyle = styled.div`
    #heading-container {
        display: flex;
        width: 100%;
        justify-content: space-between;
        font-weight: 500;
        font-size: 1.5em;
        margin-bottom: 20px;

        div {
            width: 100%;
        }
    }

    #line {
        height: 2px;
        width: 100%;
        background-color: ${({theme}) => theme.colors.green};
    }

`

export default ListHeader