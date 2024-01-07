import React, { Component } from "react";

class Bmi extends Component{
    constructor(props) {
        super(props)
        this.state = {
            ht: 0,
            wt: 0,
            res: 0
        }
        this.calculate = this.calculate.bind(this)
    }

    calculate(e) {
        e.preventDefault(e)
        let result = this.state.wt / (this.state.ht * this.state.ht)
        this.setState({
            res: result
        })
    }

    render() {
        return(
            <div className="container">
                <div className="title">
                    <h1>BMI Calculator</h1>
                </div>
                <div className="form">
                    <form onSubmit={this.calculate}>
                        <div className="form-item">
                            <label htmlFor="height">Height</label>
                            <input type="number" name="height" id="height" value={this.state.ht} onChange={(e) => this.setState({ ht: e.target.value })} />
                        </div>
                        <div className="form-item">
                            <label htmlFor="weight">Weight</label>
                            <input type="number" name="weight" id="weight" value={this.state.wt} onChange={(e) => this.setState({ wt: e.target.value })} />
                        </div>
                        <div className="form-item">
                            <input type="submit" value="Calculate" />
                        </div>
                    </form>
                </div>
                <div className="output">
                    <h1>BMI = {this.state.res}</h1>
                </div>
            </div>
        )
    }
}

export default Bmi