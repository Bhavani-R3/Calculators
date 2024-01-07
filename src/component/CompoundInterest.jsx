import React, { Component } from "react";

class CompoundInterest extends Component{
    constructor(props) {
        super(props)
        this.state = {
            p: 0,
            t: 0,
            r: 0,
            ci: 0,
            a: 0
        }
        this.calculate = this.calculate.bind(this);
    }
    
    calculate(e) {
        e.preventDefault()
        let cint = (this.state.p * Math.pow((1+(this.state.r/100)), this.state.t)) - this.state.p;
        let amt = this.state.p * (1 + ((this.state.r/100) * this.state.t));
        this.setState({
                ci: cint,
                a: amt
            })
        }

    render() {
        return(
            <div className="container">
                <div className="title">
                    <h1>Compound Interest</h1>
                </div>
                <div className="form">
                    <form onSubmit={this.calculate}>
                        <div className="form-item">
                            <label htmlFor="p">Principle Amount</label>
                            <input type="text" name="p" id="p" value={this.state.p} onChange={(e) => this.setState({ p: e.target.value })} />
                        </div>
                        <div className="form-item">
                            <label htmlFor="t">Time</label>
                            <input type="text" name="t" id="t" value={this.state.t} onChange={(e) => this.setState({ t: e.target.value })} />
                        </div>
                        <div className="form-item">
                            <label htmlFor="r">Rate of Interest</label>
                            <input type="text" name="r" id="r" value={this.state.r} onChange={(e) => this.setState({ r: e.target.value })} />
                        </div>
                        <div className="form-item">
                            <input type="submit" value="Calculate" />
                        </div>
                    </form>
                </div>
                <div className="output">
                    <h1>Compound Interest = {this.state.ci}</h1>
                    <h1>Total Amount = {this.state.a}</h1>
                </div>
            </div>
        )
    }
}

export default CompoundInterest 