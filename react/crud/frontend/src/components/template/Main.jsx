import './Main.css'
import React, { Fragment } from "react";

import Header from "./Header";

export default props => 
    <Fragment>
        <Header {...props}/>
        <main className="content">
            Conteúdo
        </main>
    </Fragment>