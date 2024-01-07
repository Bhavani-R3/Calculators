import React, { useState } from "react"

function SimpleObject() {
    const [inp, setInp] = useState({
        p: 0,
        r: 0,
        t: 0
    })

    const [si,setSi] = useState(0)
    const [total,setTotal] = useState(0)

    const readInput = (e) => {
       const {name, value} = e.target;
       setInp({...inp, [name]: value})
    }

    const calculate = (e) => {
        e.preventDefault();
        setSi((inp.p * inp.r * inp.t) / 100)
        setTotal(inp.p * (1 + ((inp.r/100) * inp.t)));
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
                            <label htmlFor="r">Interest Rate (%)</label>
                            <input type="number" name="r" id="r" value={inp.r} onChange={readInput} required />
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
                        <h1>Simple Interest = {si}</h1>
                        <h1>Final Amount = {total}</h1>
                    </div>
                </div>
        </div>
    )
}

export default SimpleObject