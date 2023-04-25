import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'





import Collapse from '../components/Collapse'
import Carousel from '../components/Carousel'

import "../styles/Apartment.css"
import Data from "../Données.json"

const arrayStars = [1, 2, 3, 4, 5]

function Card() {
    // récupère l'ID de l'URL
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));
    
    // cherche l'id dans le fichier logements.json
    const record = Data.find(element => element.id === idLogement)
    
   

    // test l'utilisation de useMemo
    const equipements = record.equipments.map((element, index) => (
          <li className='description-content' key={"equip-"+index.toString()}>{element}</li>
        ))
    

    return (
        <div className="main">
        <div className='logement'>
        

                {/* carousel d'images */}
                <Carousel pictures={record.pictures}/>

                {/* 1 - affiche le titre, l'emplacement et les tags */}
                <div className='ficheLogement'>
                    <div className='div-description'>
                        <h1>{record.title}</h1>
                        <h4>{record.location}</h4>
                        <div className='div-tags'>
                            { record.tags.map((element, index) => {
                                return(<p className='tags' key={"tags-"+index}>{element}</p>)
                            })}
                        </div>
                    </div>


                    {/* 2 - Affiche le nom du propriétaireet sa photo */}
                    <div className='bloc-stars'>
                        <div className='div-etoiles'>
                            <p>{record.host.name}</p>
                            <img src={record.host.picture} alt={record.title} />
                        </div>
                        
                        {/* 3 - Mets et colorie les étoiles */}
                        <div className='stars'>
                            {
                                arrayStars.map(element => {
                                    const nbreEtoiles = parseInt(record.rating)
                                    return(<span key={"star-"+element} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>)
                                })
                            }
                        </div>
                    </div>
                </div>


                {/* affiche la description et les équipements */}
                <div className='collapseLogement'>
                    <Collapse title="Description" content={record.description} />
                    <Collapse title="Equipements" content={equipements} />
                </div>

           
        </div>
        </div>
    )
}

export default Card
