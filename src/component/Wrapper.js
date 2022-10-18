import React from 'react'

const Wrapper = (props) => {
  return (
    
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <h1>Hello Wrapper</h1>  {props.children}</div>
  )
}

export default Wrapper
