import React , {useState} from 'react';
import { NavLink } from 'react-router-dom';
import FlechesBas from '../img/fleche-bas.svg';
import logo from '../img/levelup.png';
import DropDownRejoindre from './dropdownrejoindre';
import DropDownParticulier from './dropparticulier';
import DropDownEntreprise from './dropentreprise';

export default function Menu() {

    //DropDown pour Rejoindre
    const [isDropDownVisibleRejoindre, setDropdownVisibleRejoindre] = useState(false);
    const handleMouseEnterRejoindre = () => {
        setDropdownVisibleRejoindre(true);
    };
    const handleMouseLeaveRejoindre = () => {
        setDropdownVisibleRejoindre(false);
    };

    //DropDown pour les Entreprises
    const [isDropDownVisibleEntreprise, setDropdownVisibleEntreprise] = useState(false);
    const handleMouseEnterEntreprise = () => {
        setDropdownVisibleEntreprise(true);
    };
    const handleMouseLeaveEntreprise = () => {
        setDropdownVisibleEntreprise(false);
    };
    
    //DropDown pour les Particuliers
    const [isDropDownVisibleParticulier, setDropdownVisibleParticulier] = useState(false);
    const handleMouseEnterParticulier = () => {
        setDropdownVisibleParticulier(true);
    };
    const handleMouseLeaveParticulier = () => {
        setDropdownVisibleParticulier(false);
    };

    return (
        <header className="menu" >
            <img className="logo" src={logo} width="207" alt="logo"  >
                </img>
         <ul className="header">
            <li className="menuItem" >
                <NavLink to="/" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                    Accueil
                </NavLink>
            </li>
            <li className="menuItem">
                <NavLink to="/sommes" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                    Qui sommes-nous?
                </NavLink>
            </li>
            <li className="menuItem" onMouseEnter={handleMouseEnterEntreprise} onMouseLeave={handleMouseLeaveEntreprise}>
                <NavLink to="/entreprise"  className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                    {isDropDownVisibleEntreprise && <DropDownEntreprise />}
                    Je suis une entreprise
                </NavLink>
                <img className="fleche" src={FlechesBas} width="20px" alt="Flechesbas"></img>
            </li>
            <li className="menuItem" onMouseEnter={handleMouseEnterParticulier} onMouseLeave={handleMouseLeaveParticulier}>
                <NavLink to="/particulier" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                    {isDropDownVisibleParticulier && <DropDownParticulier />}
                    Je suis un particulier
                </NavLink>
                <img className="fleche" src={FlechesBas} width="20px" alt="Flechesbas"></img>
            </li>
            <li className="menuItem">
                <NavLink to="/contacter" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                    Nous-contacter
                </NavLink>
            </li>
            <li className="menuItem" onMouseEnter={handleMouseEnterRejoindre} onMouseLeave={handleMouseLeaveRejoindre}>
                <NavLink to="/rejoindre" className={({ isActive }) => (isActive ? " activeLink " : undefined)}>
                    {isDropDownVisibleRejoindre && <DropDownRejoindre />}
                    Nous rejoindre
                </NavLink>
                <img className="fleche" src={FlechesBas} width="20px" alt="Flechesbas"></img>
            </li>
         </ul>
        </header>
    )
}