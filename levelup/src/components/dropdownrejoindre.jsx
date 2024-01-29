import { NavLink } from 'react-router-dom';
import React from "react";

export default function DropDownRejoindre() {
    return (
        <div className='menu-drop-rejoindre'>         
            <ul className='dropdown'>
                <div className='toto'>
                    <div className='rectangle'></div>  
                        <li className='lidropdown'>
                        <NavLink to="/recrutement" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                                Nous recutons
                            </NavLink>
                        </li>
                </div>
                <div className='toto'>
                    <div className='rectangle'></div>  
                        <li className='lidropdown'>
                        <NavLink to="/dejaconsultant" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                                Je suis déjà consultant
                        </NavLink>
                        </li> 
                </div>
                <div className='toto'>
                    <div className='rectangle'></div>  
                    <li className='lidropdown'>
                        <NavLink to="/devenirconsultant" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                                Je souhaite devenir consultant
                        </NavLink>
                    </li> 
                </div>
            </ul>
        </div>
    )
}