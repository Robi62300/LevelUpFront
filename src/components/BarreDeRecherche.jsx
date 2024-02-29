import React from "react";
import { PiMagnifyingGlass } from "react-icons/pi";
import { HiXMark } from "react-icons/hi2";

export default function BarreDeRecherche () {
    return(
        <div className="search-bar">
            <input type="text" placeholder="Rechercher..." />
            <i><PiMagnifyingGlass /></i>
            <i><HiXMark /></i>
        </div>
    )
}