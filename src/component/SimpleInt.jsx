import React, { useState } from "react";

function SimpleInt() {
    const [p,SetP] = useState(0);
    const [r,SetR] = useState(0);
    const [t,SetT] = useState(0);

    const [si,setSi] = useState(0)
    const [total,setTotal] = useState(0)

    const calculate = function(e) {
        e.preventDefault();
        setSi((p * r * t) / 100)
        setTotal(p * (1 + ((r/100) * t)));
    }

    return(
        <div>
            <div className="title">
                <h1>Forms In Functional Component</h1>
            </div>

            <div className="container">
                <form autoComplete="off" onSubmit={calculate}>
                    <div className="form-item">
                        <label htmlFor="p">Principal</label>
                        <input type="number" name="p" id="p" value={p} onChange={ (e) => SetP(e.target.value) } required />
                    </div>
                    <div className="form-item">
                        <label htmlFor="r">Rate of Interest</label>
                        <input type="number" name="r" id="r" value={r} onChange={ (e) => SetR(e.target.value) } required />
                    </div>
                    <div className="form-item">
                        <label htmlFor="t">Time</label>
                        <input type="number" name="t" id="t" value={t} onChange={ (e) => SetT(e.target.value) } required />
                    </div>
                    <div className="form-item">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <div className="container">
                    <h1>Simple Interest = {si}</h1>
                    <h1>Total = {total}</h1>
                </div>
            </div>
        </div>
    )
}

export default SimpleInt