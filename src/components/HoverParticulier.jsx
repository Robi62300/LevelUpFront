import { MdOutlineStarPurple500 } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import React from "react";

export default function HomeParticulier() {
    return(
        <div className='Hover-Particulier'>
            <ul>
                <h3 className='h3-hover'>
                    Voici nos différents programmes pour les particulier :
                </h3>
                <li className='li-hover'>
                    <MdOutlineStarPurple500 className="icon-hover"/>
                    <NavLink to="/bilandecompetences" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                            Bilan de compétences
                    </NavLink>
                </li>
                <li className='li-hover'>
                    <MdOutlineStarPurple500 className="icon-hover"/>
                    <NavLink to="/formations" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                            Formation
                    </NavLink>
                </li>
                <li className='li-hover'>
                    <MdOutlineStarPurple500 className="icon-hover"/>
                    <NavLink to="/coaching" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                            Coaching
                    </NavLink>
                </li>
                <li className='li-hover'>
                    <MdOutlineStarPurple500 className="icon-hover"/>
                    <NavLink to="/accompagnementvae" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                            Accompagnement VAE
                    </NavLink>
                </li>
            </ul>
        </div>  
    );
}