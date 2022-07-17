import React from "react";
import { filhosDoPai } from "../utils/ultils";

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {filhosDoPai(props)}
        </ul>
    </div>
