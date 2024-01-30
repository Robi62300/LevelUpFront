import { MdOutlineStarPurple500 } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import React from "react";

export default function HomeEntreprise() {
    return(
        <div className='Hover-Home'>
            <ul>
                <h3 className='h3-hover'>
                    Voici nos différents programmes pour les entreprises :
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
                    <NavLink to="/recrutement" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                        Recrutement
                    </NavLink>
                </li>
                <li className='li-hover'>
                    <MdOutlineStarPurple500 className="icon-hover"/>
                    <NavLink to="/entretienannuel" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                            Entretien annuel
                    </NavLink>
                </li>
            </ul>
        </div>  
    );
}