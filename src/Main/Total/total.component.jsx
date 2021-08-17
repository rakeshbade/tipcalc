import React from 'react'
import "./total.component.css"

function TotalComponent(props) {
    return (
        <div>
            <div className="subtotal-content">
                <label>Tip Amount <em>/ person</em></label>
                <div className="subtotal-amount">${props.CustomerTip}</div>
            </div>
            <div className="subtotal-content">
                <label>Total <em>/ person</em></label>
                <div className="subtotal-amount">${props.CustomerBill}</div>
            </div>
        </div>
    )
}

export default TotalComponent
