import './Nav.css'
import React from "react";
import NavLink from './nav/NavLink';

export default props => 
    <aside className="menu-area">
        <nav className='menu'>
            {/* Refatorado criando componentes funcionais!! */}
            <NavLink path="/" icon="home" title="Início"/>
            <NavLink path="/users" icon="users" title="Usuários" />
        </nav>
    </aside>