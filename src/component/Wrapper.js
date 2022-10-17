import React from 'react'

const Wrapper = (props) => {
  return (
    <div className="max-w-sm rounded border-2 border-blue-500 overflow-hidden shadow-lg">
        <h1>Hello Wrapper</h1>  {props.children}</div>
  )
}

export default Wrapper
