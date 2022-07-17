import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Primeiro from "./componentes/Primeiro";
import Bomdia from "./componentes/Bomdia";
import Multi, { Boatarde, Boanoite } from "./componentes/Multiplos";
import Saudacao from "./componentes/Componente";
import Pai from "./componentes/Pai";
import Filho from "./componentes/Filho";

// ReactDOM.render(<Bomdia nome="Guilherme" />, document.getElementById('root'))
ReactDOM.render(
    <Fragment>
        {/* <Multi.Boatarde nome="Tupi"/>
        <Boanoite nome="Mestre"/> */}
        {/* <Saudacao tipo="Bom dia" nome="Tupi"/> */}
        {/* <Pai nome="Tupiracy" sobrenome="Guedes" /> */}
        <Pai nome="Tupiracy" sobrenome="Guedes">
            <Filho nome="Flávio" />
            <Filho nome="André" />
            <Filho nome="Carla" />
        </Pai>
    </Fragment>    
, document.getElementById('root'))
