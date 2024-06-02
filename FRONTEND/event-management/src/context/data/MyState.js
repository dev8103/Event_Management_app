import React from 'react'
import MyContext from './MyContext'

function MyState(props) {
  return (
    <MyContext.Provider>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState