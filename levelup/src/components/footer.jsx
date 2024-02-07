import React  from 'react';
import Qualiopi from '../img/truc.png';
import { NavLink } from 'react-router-dom';
import { RiFacebookBoxFill, RiInstagramLine, RiLinkedinBoxFill, RiYoutubeFill } from "react-icons/ri";

export default function Footer() {

    return (
        <footer className="bas-de-page">
            <div className="col">
                <div className="tata">
                    <h3 className="titre-footer">
                        Entreprise
                    </h3>
                    <div className="col-entreprise">   
                        <ul>
                            <li className="li-footer">
                                <NavLink to="/bilandecompetences" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                                    Bilan de compétences
                                </NavLink>
                            </li>
                            <li className="li-footer">
                                <NavLink to="/formations" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                                    Formation
                                </NavLink>
                            </li>
                            <li className="li-footer">
                                <NavLink to="/recrutement" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                                    Recrutement
                                </NavLink>
                            </li>
                            <li className="li-footer">
                                <NavLink to="/entretienannuel" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                                    Entretien annuel
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tata">
                    <h3 className="titre-footer">
                        Particuliers
                    </h3>
                    <div className="col-particuliers">
                        <ul>
                            <li className="li-footer">
                                <NavLink to="/bilandecompetences" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                                    Bilan de compétences
                                </NavLink>
                            </li>
                            <li className="li-footer">
                                <NavLink to="/accompagnementvae" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                                    Accompagnement VAE
                                </NavLink>
                            </li>
                            <li className="li-footer">
                                <NavLink to="/coaching" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                                    Coaching
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tata">
                    <h3 className="titre-footer">
                        Réseaux sociaux
                    </h3>
                    <div className="col-entreprise">   
                        <ul>
                            <li className="li-social">
                                <RiLinkedinBoxFill className='icon-footer' />
                                Linkedin
                            </li>
                            <li className="li-social">
                                <RiFacebookBoxFill className='icon-footer'/>
                                Facebook
                            </li>
                            <li className="li-social">
                                <RiInstagramLine className='icon-footer'/>
                                Instagram
                            </li>
                            <li className="li-social">
                                <RiYoutubeFill className='icon-footer'/>
                                Youtube
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tata">
                    <h3 className="titre-footer">
                        Informations
                    </h3>
                    <div className="col-entreprise">   
                        <ul>
                            <li className="li-footer">Mentions légales</li>
                            <li className="li-footer">Politique de confidentialité</li>
                            <li className="li-footer">Conditions Générales de Vente</li>
                        </ul>
                    </div>
                </div>
                <div className="tata">
                    <h3 className="titre-footer">
                        Notre société
                    </h3>
                    <div className="col-entreprise">   
                        <ul>
                            <li className="li-footer">Centre Level'up - 54 rue de Sèvres</li>
                            <li className="li-footer">75007 Paris</li>
                            <li className="li-footer">centre.levelup@gmail.com</li>
                            <li className="li-footer">66 33 55 22 11</li>
                        </ul>
                    </div>
                </div>
                <img className="Qualiopi" src={Qualiopi} alt="logo"  >
                </img>
             </div>       
        </footer>
    )

}