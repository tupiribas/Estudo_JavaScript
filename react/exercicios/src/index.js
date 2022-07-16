import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Primeiro from "./componentes/Primeiro";
import Bomdia from "./componentes/Bomdia";
import Multi, { Boatarde, Boanoite } from "./componentes/Multiplos";

// ReactDOM.render(<Bomdia nome="Guilherme" />, document.getElementById('root'))
ReactDOM.render(
    <Fragment>
        <Multi.Boatarde nome="Tupi"/>
        <Boanoite nome="Mestre"/>
    </Fragment>    
, document.getElementById('root'))
