import React, { Component } from 'react'
import "./main.container.component.css"
import TotalComopnent from './Total/total.component'
import FormInputComponent from './Form/input.component'
import { faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons'

export class MainContainerComponent extends Component {
    customTipInput = React.createRef();
    defaultState = {
        customers: '',
        bill: '',
        tip: '',
        tipPercent: 0,
        reset: true,
        tipPerCustomer: (0).toFixed(2),
        billPerCustomer: (0).toFixed(2)
    }
    state = {...this.defaultState}

    inputBillChange = (event) => {
        const _currentValue = event.target.value;
        if (_currentValue !== undefined && _currentValue !== null) {
            this.resetStatus(false)
        }
        this.setState({ bill: _currentValue }, this.calcTotalBill);
    }

    inputCustomerChange = (event) => {
        const _currentValue = event.target.value;
        if (_currentValue !== undefined && _currentValue !== null) {
            this.resetStatus(false)
        }
        this.setState({ customers: _currentValue }, this.calcTotalBill);
    }
    inputCustomTip = (event) => {
        this.setTipBtnStyle(event.target);
        const _currentValue = event.target.value;
        if (_currentValue !== undefined && _currentValue !== null) {
            this.resetStatus(false)
        }
        this.setState({ tip: _currentValue, tipPercent: 0 }, this.calcTotalBill);
    }
    updateTipAmount = (tipPercent) => {
        if (this.customTipInput?.current) {
            this.customTipInput.current.value = null;
        }
        this.setState({ tipPercent: tipPercent, tip: 0 }, this.calcTotalBill)
    }

    setTipBtnStyle = (target) => {
        if (target && target.parentElement) {
            Array.from(target.parentElement.children).forEach(ele => {
                if (ele.classList.contains("active")) {
                    ele.classList.remove("active")
                }
            })
        }
        target.classList.add("active")
    }

    resetStatus = (status, forceReset) => {
        this.setState({ reset: status });
        if (forceReset === true) {
            this.setState({...this.defaultState});
            if (this.customTipInput?.current) {
                const target = this.customTipInput.current;
                this.customTipInput.current.value = null;
                if (target && target.parentElement) {
                    Array.from(target.parentElement.children).forEach(ele => {
                        if (ele.classList.contains("active")) {
                            ele.classList.remove("active")
                        }
                    })
                }
            }
        }
    }

    calcTotalBill = () => {
        let tipAmout = this.state.tip;
        if (isFinite(this.state.tipPercent) && this.state.tipPercent > 0) {
            const _bill = this.state.bill;
            tipAmout = (_bill * this.state.tipPercent) / 100;
        }
        const tipPerCustomer = tipAmout / this.state.customers;
        const billPerCustomer = (this.state.bill / this.state.customers);
        if(isFinite(billPerCustomer) && isFinite(tipPerCustomer)){
            this.setState({ tipPerCustomer: tipPerCustomer.toFixed(2) })
            this.setState({ billPerCustomer: (billPerCustomer + tipPerCustomer).toFixed(2) })
        }
    }

    selectInput = (event)=>{
        event.target.focus();
        event.target.select();
    }

    render() {
        return (
            <div className="main-container">
                <div className="main-container-row">
                    <div className="calc-container">
                        <div className="form-input-row">
                            <label>Bill</label>
                            <FormInputComponent Icon={faDollarSign} Value={this.state.bill}  Placeholder="0"  onChange={this.inputBillChange} onClick={this.selectInput} />
                        </div>
                        <div className="form-input-row">
                            <label>Select Tip %</label>
                            <div className="tip-select-grid">
                                {[5, 10, 15, 25, 50].map((tip, index) => <button className="form-control" onClick={(e) => { this.setTipBtnStyle(e.target); this.updateTipAmount(tip) }} key={index} > {tip}%</button>)}
                                <input type="text" className="form-control input-text text-center" placeholder="$$" onChange={this.inputCustomTip} ref={this.customTipInput} onClick={this.selectInput}  />
                            </div>
                        </div>
                        <div className="form-input-row">
                            <label>Number of People</label>
                            <FormInputComponent Icon={faUser} Value={this.state.customers} Placeholder="0" onChange={this.inputCustomerChange}  onClick={this.selectInput}  />
                        </div>
                    </div>
                    <div className="total-container">
                        <TotalComopnent CustomerBill={this.state.billPerCustomer} CustomerTip={this.state.tipPerCustomer} />
                        <button className="form-control" disabled={this.state.reset} type="reset" onClick={() => this.resetStatus(true, true)}>RESET</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContainerComponent
