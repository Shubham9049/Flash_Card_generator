import React from 'react'
import {ErrorMessage} from "formik"


function ShowError({name}) {
  return (
    
      <div style={{color:"red"}}>
        <br />
        <ErrorMessage name={name}/>
      
    </div>
   
  )
}

export default ShowError
