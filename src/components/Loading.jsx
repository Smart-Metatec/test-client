import React from 'react'

import {LoadingComponent} from "../styled/Loading.styled"

const Loading = () => {
  return (
    <LoadingComponent>
       {/* <span>Loading...</span>  */}
        <div className='spinner'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </LoadingComponent>
  )
}

export default Loading