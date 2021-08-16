import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./total.component.css"
export class TotalComopnent extends Component {
    static propTypes = {

    }

    render() {
        return (
                <div>
                    <div className="subtotal-content">
                        <label>Tip Amount <em>/ person</em></label>
                        <div className="subtotal-amount">$0.00</div>
                    </div>
                    <div className="subtotal-content">
                        <label>Total <em>/ person</em></label>
                        <div className="subtotal-amount">$0.00</div>
                    </div>
                </div>
        )
    }
}

export default TotalComopnent
