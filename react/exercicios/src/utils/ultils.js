import React from "react";

{/* Mapeia TODOS os elementos filhos, clona as props do pai 
    e aplica aos filhos (por.ex.: sobrenome="Guedes" em todos 
    os filhos)*/}
export function filhosDoPai(props) {
    return React.Children.map(props.children, filhos => {
        return React.cloneElement(filhos, {
            ...props, ...filhos.props
        })
    })
}
