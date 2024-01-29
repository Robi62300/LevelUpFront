import { NavLink } from 'react-router-dom';
import React from "react";

export default function DropDownEntreprise() {
    return (
        <div className='menu-drop-entreprise'>         
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
                <div className='toto'>
                    <div className='rectangle'></div>  
                    <li className='lidropdown'>
                        <NavLink to="/formations" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                            Formations
                        </NavLink>
                    </li> 
                </div>
            </ul>
        </div>
    )
}