import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"50vh"
    }}>

        <ClimbingBoxLoader />
    </div>
)
}

export default Loader