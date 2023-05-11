import React from 'react'

function Alert(props) {
    const capitalize = (str) => {
        const lower = str.toLowerCase();
        return (lower[0].toUpperCase() + lower.slice(1))

    }
    return (
    <div style={{height:'30px'}} className="mb-4">
        {props.alert && 
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type==='success'?'success':'failure ')}:{" "+props.alert.message}</strong>
            
        </div>}
        </div>


    )
}

export default Alert
