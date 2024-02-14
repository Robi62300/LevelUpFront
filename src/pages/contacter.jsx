import React, {useEffect} from "react";
import BarreDeRecherche from "../components/BarreDeRecherche";

    

export default function NousContacter() {
 useEffect(() => {
     const container = document.querySelector(".search-bar");
     const searchIcons = document.querySelectorAll(".search-bar i");
    
     const handleClick = () => {
       container.classList.toggle("change");
     };
    
     searchIcons.forEach(searchIcon => {
       searchIcon.addEventListener("click", handleClick);
     });
    
     return () => {
       searchIcons.forEach(searchIcon => {
         searchIcon.removeEventListener("click", handleClick);
       });
     };
   },);
 
    return (
        <>
        <div className="container">
            <div className="titre">
            </div>
            <div className="search-bar">
                <BarreDeRecherche/>
            </div>
        </div>
    </>
    )
 }