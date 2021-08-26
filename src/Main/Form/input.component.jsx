import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./input.component.css"

function FormInputComponent(props) {
    return (
        <React.Fragment>
        <label htmlFor={props.Name}>{props.Name}</label>
        <div className="form-icon">
            { props.Icon ? <FontAwesomeIcon icon={props.Icon} className="icon"/> : ""}
            <input type="text" className="form-control input-text text-right" name={props.Name} id={props.Name} placeholder={props.Placeholder}  value={props.Value} onChange={props.onChange} onFocus={props.onClick}/>
        </div>
        </React.Fragment>
    )
}

export default FormInputComponent
