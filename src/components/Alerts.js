import React from 'react'

export default function Alerts(props) {
  return (
    <div className="text" style={{height:'5px'}}>
    {props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show mt-5`} role="alert">
  <strong>{props.alert.type}</strong>:{props.alert.msg}
  
</div>
}
</div>
  )
}
