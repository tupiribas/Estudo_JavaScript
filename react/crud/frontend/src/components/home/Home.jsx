import React from "react";
import Main from "../template/Main";

export default props => 
    <Main icon="home" title="Início"
        subtitle="Projeto do capítulo de React.">
        <div className='display-4'>
            Bem-vindo
        </div>
        <hr />
        <p className="mb-0">
            Sistema de cadastramento, desenvolvido em React.
        </p>
    </Main>