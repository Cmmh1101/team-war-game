import React from 'react'

export default function Controls(props) {
  return (
    <div className='row'>
      <div id="controlla"className="col d-flex justify-content-center mx-auto mb-3
      ">

                
        <button id="reset" className="col-2 m-1" onClick={props.shuffle} >{props.buttText}</button>
      </div>
    </div>
  )
}
