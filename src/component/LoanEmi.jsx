import React, { useState } from "react"

function LoanEmi() {
    const [inp, setInp] = useState({
        p: 0,
        ry: 0,
        t: 0
    })

    const [emi,setEmi] = useState(0)
    const [total,setTotal] = useState(0)

    const readInput = (e) => {
       const {name, value} = e.target;
       setInp({...inp, [name]: value})
    }

    const calculate = (e) => {
        e.preventDefault();
        let r = (inp.ry / 12) / 100
        setEmi(inp.p * r * (Math.pow((1+ r), inp.t)) / (Math.pow((1+r), inp.t - r)))
        setTotal(inp.p * (1 + ((inp.ry/100) * inp.t)));
    }

    return(
        <div>
            <div className="title">
                    <h1>Simple Interest(Class)</h1>
                </div>
                <div className="contaimer">
                    <form autoComplete="off" onSubmit={calculate}>
                        <div className="group">
                            <label htmlFor="p">Principal Amount (&#8377;)</label>
                            <input type="number" name="p" id="p" value={inp.p} onChange={(e) => readInput(e)} required />
                        </div>
                        <div className="group"> 
                            <label htmlFor="ry">Interest Rate (%)</label>
                            <input type="number" name="ry" id="ry" value={inp.ry} onChange={readInput} required />
                        </div>
                        <div className="group">
                            <label htmlFor="t">Duration</label>
                            <input type="number" name="t" id="t" value={inp.t} onChange={readInput} required />
                        </div>
                        <div className="group">
                            <input type="submit" value="Calculate" />
                        </div>
                    </form>
                </div>
                <div className="container">
                    <div className="result">
                        <h1>Simple Interest = {emi}</h1>
                        <h1>Final Amount = {total}</h1>
                    </div>
                </div>
        </div>
    )
}

export default LoanEmi