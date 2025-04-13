import React from 'react'

export default function AlertInfo(props) {
    const capitalize = (word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height: '40px'}}>
      {props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
          <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
      </div>}
    </div>
  )
}
