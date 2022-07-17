import React from "react";

export function classeOperacao(props) {
    return props.operation ? 'operation' : ''
}   

export function classeDouble(props) {
    return props.double ? 'double' : ''
}

export function classeTriple(props) {
    return props.triple ? 'triple' : ''
}

export function operacao(n1, op, n2) {
    switch (op) {
        case '+':
            return n1 + n2
            break;
        case '-': 
            return n1 - n2
            break
        case '*': 
            return n1 * n2
            break
        default: 
            return n1 / n2
            break
    }
}