import React from 'react'

export default function CheckBox() {
  return (
    <div className="ltr:mr-3 rtl:ml-3">
    
    <input
        type="checkbox"
        id={`chk-`}
        checked={  false}
        onClick={(event) => event.stopPropagation()}
        className="form-checkbox"
    />
</div>
  )
}
