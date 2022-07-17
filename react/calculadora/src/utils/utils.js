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