import React , {useState} from 'react';
import { NavLink } from 'react-router-dom';
import FlechesBas from '../img/fleche-bas.svg';
import logo from '../img/levelup.png';
import DropDownRejoindre from './MenuDrop/dropdownrejoindre';
import DropDownParticulier from './dropparticulier';
import DropDownEntreprise from './dropentreprise';

export default function Menu() {

    const [showLinks, setShowLinks] = useState(false)
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }


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
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `} >
            <img className="logo" src={logo} alt="logo"  >
                </img>
         <ul className="header">
            <li className="menuItem slideInDown-1" >
                <NavLink  to="/" className={`navbar-link ${ ({isActive}) => (isActive? " activeLink " : undefined)}`}>
                    Accueil
                </NavLink>
            </li>
            <li className="menuItem slideInDown-2">
                <NavLink to="/sommes" className={`navbar-link ${ ({isActive}) => (isActive? " activeLink " : undefined)}`}>
                    Qui sommes-nous ?
                </NavLink>
            </li>
            <li className="menuItem slideInDown-3" onMouseEnter={handleMouseEnterEntreprise} onMouseLeave={handleMouseLeaveEntreprise}>
                <NavLink to="/entreprise"  className={`navbar-link ${ ({isActive}) => (isActive? " activeLink " : undefined)}`}>
                    {isDropDownVisibleEntreprise && <DropDownEntreprise />}
                    Je suis une entreprise
                </NavLink>
                
                <img className="fleche" src={FlechesBas} width="20px" alt="Flechesbas"></img>
            </li>
            <li className="menuItem slideInDown-4" onMouseEnter={handleMouseEnterParticulier} onMouseLeave={handleMouseLeaveParticulier}>
                <NavLink to="/particulier" className={`navbar-link ${ ({isActive}) => (isActive? " activeLink " : undefined)}`}>
                    {isDropDownVisibleParticulier && <DropDownParticulier />}
                    Je suis un particulier
                </NavLink>
                <img className="fleche" src={FlechesBas} width="20px" alt="Flechesbas"></img>
            </li>
            <li className="menuItem slideInDown-5">
                <NavLink to="/contacter" className={`navbar-link ${ ({isActive}) => (isActive? " activeLink " : undefined)}`}>
                    Nous-contacter
                </NavLink>
            </li>
            <li className="menuItem slideInDown-6" onMouseEnter={handleMouseEnterRejoindre} onMouseLeave={handleMouseLeaveRejoindre}>
                <NavLink to="/rejoindre" className={`navbar-link ${ ({isActive}) => (isActive? " activeLink " : undefined)}`}>
                    {isDropDownVisibleRejoindre && <DropDownRejoindre />}
                    Nous rejoindre
                </NavLink>
                <img className="fleche" src={FlechesBas} width="20px" alt="Flechesbas"></img>
            </li>
         </ul>
         <button className="navbar-burger" onClick={handleShowLinks}>
            <span className="burger-bar"></span>
         </button>
        </nav>
    )
}