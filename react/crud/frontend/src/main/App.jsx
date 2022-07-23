import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from "react";

import Footer from "../components/template/Footer";
import Logo from "../components/template/Logo";
import Main from "../components/template/Main";
import Nav from "../components/template/Nav";

export default props => 
    <div className='app'>
        <Logo />
        <Nav />
        <Main icon="home" title="Início"
            subtitle="Projeto do capítulo de React."/>
        <Footer />
    </div>