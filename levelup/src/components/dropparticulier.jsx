import { NavLink } from 'react-router-dom';
import React from "react";

export default function DropDownParticulier() {
    return (
        <div className='menu-drop-particulier'>         
            <ul className='dropdown'>
                <div className='toto'>
                    <div className='rectangle'></div>  
                    <li className='lidropdown'>
                        <NavLink to="/bilandecompetences" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                            Bilan de compétences
                        </NavLink>
                    </li> 
                </div>
                <div className='toto'>
                    <div className='rectangle'></div>  
                    <li className='lidropdown'>
                        <NavLink to="/coaching" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                            Coaching
                        </NavLink>
                    </li> 
                </div>
                <div className='toto'>
                    <div className='rectangle'></div>  
                    <li className='lidropdown'>
                        <NavLink to="/accompagnementvae" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                            Accompagnement VAE
                        </NavLink>
                    </li> 
                </div>
            </ul>
        </div>
    )
}