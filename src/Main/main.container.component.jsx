import React, { Component } from 'react'
import "./main.container.component.css"
import TotalComopnent from './Total/total.component'
import FormInputComponent from './Form/input.component'
import { faDollarSign, faUser } from '@fortawesome/free-solid-svg-icons'

export class MainContainerComponent extends Component {
    customTipInput = React.createRef();
    state = {
        customers: '',
        bill: '',
        tip: '',
        tipPercent: 0,
        reset: true,
        tipPerCustomer: (0).toFixed(2),
        billPerCustomer: (0).toFixed(2)
    }

    inputBillChange = (event) => {
        const _currentValue = event.target.value;
        if(_currentValue !== undefined && _currentValue !== null){
            this.resetStatus(false)
        }
        this.setState({ bill: _currentValue }, this.calcTotalBill);
    }

    inputCustomerChange = (event)=>{
        const _currentValue = event.target.value;
        if(_currentValue !== undefined && _currentValue !== null){
            this.resetStatus(false)
        }
        this.setState({customers: _currentValue}, this.calcTotalBill);
    }
    inputCustomTip = (event)=>{
        this.setTipBtnStyle(event);
        const _currentValue = event.target.value;
        if(_currentValue !== undefined && _currentValue !== null){
            this.resetStatus(false)
        }
        this.setState({tip: _currentValue, tipPercent: 0}, this.calcTotalBill);
    }
    updateTipAmount = (tipPercent)=>{
        if(this.customTipInput?.current){
            this.customTipInput.current.value = null;
        }
        this.setState({tipPercent: tipPercent, tip: 0}, this.calcTotalBill)
    }

    setTipBtnStyle = (event)=>{
        if(event.target && event.target.parentElement){
            Array.from(event.target.parentElement.children).forEach(ele=>{
                if(ele.classList.contains("active")){
                    ele.classList.remove("active")
                }
            })
        }
        event.target.classList.add("active")
    }

    resetStatus = (status, forceReset) => {
        this.setState({ reset: status });
        if (forceReset === true) {
            this.setState({ bill: '', customers: '' })
        }
    }

    calcTotalBill = () => {
        let tipAmout = this.state.tip;
        if(isFinite(this.state.tipPercent) && this.state.tipPercent > 0){
            const _bill = this.state.bill;
            tipAmout = (_bill * this.state.tipPercent)/100;
        }
        const totalTipAmount = tipAmout / this.state.customers;
        const billAmount = this.state.bill / this.state.customers;
        if(isFinite(totalTipAmount)){
            this.setState({tipPerCustomer:  totalTipAmount.toFixed(2)})
        }
        if(isFinite(billAmount)){
            this.setState({billPerCustomer: billAmount.toFixed(2)})
        }
    }


    render() {
        return (
            <div className="main-container">
                <div className="main-container-row">
                    <div className="calc-container">
                        <div className="form-input-row">
                            <label>Bill</label>
                            <FormInputComponent Icon={faUser} Value={this.state.bill} onChange={this.inputBillChange} />
                        </div>
                        <div className="form-input-row">
                            <label>Select Tip %</label>
                            <div className="tip-select-grid">
                                {   [5,10,15,25,50].map((tip,index)=><button className="form-control" onClick={(e)=>{this.setTipBtnStyle(e); this.updateTipAmount(tip)}} key={index}> {tip}%</button>)}
                                <input type="text" className="form-control input-text text-center" placeholder="Custom" onChange={this.inputCustomTip} ref={this.customTipInput}  />
                            </div>
                        </div>
                        <div className="form-input-row">
                            <label>Number of People</label>
                            <FormInputComponent Icon={faDollarSign}  Value={this.state.customers} onChange={this.inputCustomerChange} />
                        </div>
                    </div>
                    <div className="total-container">
                        <TotalComopnent CustomerBill={this.state.billPerCustomer} CustomerTip={this.state.tipPerCustomer}/>
                        <button className="form-control" disabled={this.state.reset} type="reset" onClick={() => this.resetStatus(true, true)}>RESET</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainContainerComponent
