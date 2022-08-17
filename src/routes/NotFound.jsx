import React from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <NotFoundStyle>
      <img src="../images/logo.png" alt="" />
      <h1>404</h1>
      <h3>Sorry, Page Not Found</h3>
      <button type='button' onClick={() => navigate("../")}>Go Back</button>
    </NotFoundStyle>
  )
}

const NotFoundStyle = styled.main`
  background-color: ${({theme}) => theme.colors.darkBlue};
  color: ${({theme}) => theme.colors.green};
  height: 100vh;
  text-align: center;
  font-size: 3em;

  img {
    width: 20vw;
    margin: 1rem;
  }
  h1 {
    margin: 0px;
  }

  button {
    background-color: ${({theme}) => theme.colors.lightBlue};
    font-size: .75em;
    color: white;
    padding: 10px 30px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      /* color: black; */
      /* background-color: ${({theme}) => theme.colors.green}; */
      box-shadow: 0px 0px 10px 2px ${({theme}) => theme.colors.lightBlue};
    }
  }

`

export default NotFound