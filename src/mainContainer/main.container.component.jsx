import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./main.container.component.css"

export class MainContainerComponent extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="main-container">
                <div className="calc-container">
                    <div className="form-input-row">
                        <label>Bill</label>
                        <input type="text" />
                    </div>
                    <div className="form-input-row">
                        <label>Select Tip %</label>
                        <div className="tip-select-grid">
                            <button>5%</button>
                            <button>10%</button>
                            <button>15%</button>
                            <button>25%</button>
                            <button>50%</button>
                            <button>Custom</button>
                        </div>
                    </div>
                    <div className="form-input-row">
                        <label>Number of People</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="total-container">
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
                    <button>RESET</button>

                </div>
            </div>
        )
    }
}

export default MainContainerComponent
