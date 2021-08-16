import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./input.component.css"

function FormInputComponent(props) {
    return (
        <div className="form-icon">
            <FontAwesomeIcon icon={props.Icon} className="icon"/>
            <input type="text" className="form-control input-text text-right " placeholder="0"  value={props.Value} onChange={props.onChange}/>
        </div>
    )
}

export default FormInputComponent
