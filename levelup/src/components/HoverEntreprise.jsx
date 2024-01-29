import { NavLink } from 'react-router-dom';
import React from "react";

export default function HomeEntreprise() {
    return(
        <div className='Hover-Entreprise'>
            <ul className='ul-hover'>
                    <h3 className='h3-hover'>
                        Voici nos différents programmes pour les entreprises :
                    </h3>
                    <li className='li-hover'>Bilan de compétences</li>
                    <li className='li-hover'>Formations</li>
                    <li className='li-hover'>Recrutement</li>
                    <li className='li-hover'>Entretien annuel</li>
            </ul>
        </div>  
    );
}