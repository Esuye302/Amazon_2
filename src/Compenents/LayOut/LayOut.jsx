import React from 'react'
import Head from '../Header/Head'

const LayOut = ({ children }) => {
  // it accepts the component as a prop and renders it inside the layout component
  //we saying that the children prop is a component and it renders beneath the header
  // console.log(children)
  return (
    <div>
      <Head />
      {children}
    </div>
  )
}

export default LayOut