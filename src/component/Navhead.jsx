import React, {  } from "react";
import { NavLink } from "react-router-dom";

function Navhead() {
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to={`/simpleinterest`}>SimpleInterest</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/compoundinterest`}>CompoundInterest</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/loanemi`}>Loan EMI</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/bmi`}>BMI</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navhead