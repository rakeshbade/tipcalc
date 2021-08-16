import React, { Component } from 'react'
import "./main.container.component.css"
import TotalComopnent from './Total/total.component'
import FormInputComponent from './Form/input.component'
import { faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons'

export class MainContainerComponent extends Component {
    state = {
        customers: undefined,
        bill: undefined,
        reset: true
    }

    OnInputChange = (event)=>{
       
    }
    
    render() {
        return (
            <div className="main-container">
                <div className="main-container-row">
                    <div className="calc-container">
                        <div className="form-input-row">
                            <label>Bill</label>
                         <FormInputComponent  Icon={faUser} Value={this.state.bill} onChange={this.OnInputChange} />
                        </div>
                        <div className="form-input-row">
                            <label>Select Tip %</label>
                            <div className="tip-select-grid">
                                <button className="form-control">5%</button>
                                <button className="form-control">10%</button>
                                <button className="form-control">15%</button>
                                <button className="form-control">25%</button>
                                <button className="form-control">50%</button>
                                <input type="text" className="form-control input-text text-center" placeholder="Custom" />
                            </div>
                        </div>
                        <div className="form-input-row">
                            <label>Number of People</label>
                            <FormInputComponent Icon={faDollarSign} Value={this.state.customers} />
                        </div>
                    </div>
                    <div className="total-container">
                        <TotalComopnent />
                        <button className="form-control" disabled={this.state.reset}>RESET</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default MainContainerComponent
