import React from "react";
import './Button.css';

import { classeOperacao, 
        classeDouble, 
        classeTriple } from "../utils/utils";

export default props => {
    let classes = 'button '
    classes += classeOperacao(props)
    classes += classeDouble(props)
    classes += classeTriple(props)

    return (
        <button 
        onClick={
            e => props.click && props.click(props.label)
        }
        className={classes}>
            {props.label}
        </button>
    )
}