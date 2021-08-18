import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./input.component.css"

function FormInputComponent(props) {
    return (
        <div className="form-icon">
            { props.Icon ? <FontAwesomeIcon icon={props.Icon} className="icon"/> : ""}
            <input type="text" className="form-control input-text text-right" placeholder={props.Placeholder}  value={props.Value} onChange={props.onChange} onFocus={props.onClick}/>
        </div>
    )
}

export default FormInputComponent
