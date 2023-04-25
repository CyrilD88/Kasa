import React from "react";
import {Link} from "react-router-dom";

import Data from "../Données.json";
import "../styles/Card.css";

function ApartmentCards() {
  return (
   
    <div className="logements">

    {/* liste la base de données */}
    {Data.map((apart) => {
        const { id, cover, title } = apart;

        // affiche la fiche logement sur la page d'accueil
        return (
            <div className="fiche-logement" key={id}>
                <Link to={{ pathname: "Apartment", search: "?_id="+id }}>
                    <img src={cover} alt={title} />
                    <h3>{title}</h3>
                </Link>
            </div>
        )
    })}
    </div>

  );
}

export default ApartmentCards;

