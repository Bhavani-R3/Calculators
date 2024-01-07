import React, { Component } from "react";

class Simple extends Component {
   constructor(props) {
    super(props);
    this.state = {
        pr: 0,
        du: 0,
        in: 0,
        total: 0,
        sint: 0
       }
   }

   // A = P ( 1 + rt)

   // change handler
   readValue(e) {
    console.log(e.target.value); // e.target => targets whole input element
    const { name, value } = e.target
    this.setState({
        [name]: value
    })
   }

   calculate(e) {
    e.preventDefault();
    let si = (this.state.pr * this.state.in * this.state.du) / 100
    let amount = this.state.pr * (1 + ((this.state.in/100) * this.state.du));

    this.setState({
        total: amount,
        sint: si
    })
   }

    render() {
        return(
            <div>
                <div className="title">
                    <h1>Simple Interest(Class)</h1>
                </div>
                <div className="contaimer">
                    <form autoComplete="off" onSubmit={(e) => this.calculate(e)}>
                        <div className="group">
                            <label htmlFor="pr">Principal Amount (&#8377;)</label>
                            <input type="number" name="pr" id="pr" value={this.state.pr} onChange={(e) => this.readValue(e)} required />
                        </div>
                        <div className="group"> 
                            <label htmlFor="in">Interest Rate (%)</label>
                            <input type="number" name="in" id="in" value={this.state.in} onChange={(e) => this.readValue(e)} required />
                        </div>
                        <div className="group">
                            <label htmlFor="du">Duration</label>
                            <input type="number" name="du" id="du" value={this.state.du} onChange={(e) => this.readValue(e)} required />
                        </div>
                        <div className="group">
                            <input type="submit" value="Calculate" />
                        </div>
                    </form>
                </div>
                <div className="container">
                    <div className="result">
                        <h1>Simple Interest = {this.state.sint}</h1>
                        <h1>Final Amount = {this.state.total}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Simple