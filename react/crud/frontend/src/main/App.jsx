import './App.css'
import React from "react";
import Footer from "../components/template/Footer";
import Logo from "../components/template/Logo";
import Main from "../components/template/Main";
import Nav from "../components/template/Nav";

export default props => 
    <div className='app'>
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>