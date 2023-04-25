import React, { useState } from 'react'
import VectorLeft from "../assets/VectorLeft.png"
import VectorRight from "../assets/VectorRight.png"
import "../styles/Carousel.css"


function Carousel({pictures}) { // La fonction va pouvoir recevoir un tableau dans lequel les URL des images seront incorporés
    
    const totalPictures = pictures.length-1 // nombre d'images au maximum
    const [picture, setpicture] = useState(0)  // variable de compteur, défini au départ sur 0

    if (picture < 0) setpicture(totalPictures)  // si inférieur à zéro, défini le nombre d'images max
    if (picture > totalPictures) setpicture(0)  // si supérieur au max d'images, alors met à zéro
    
    return(
        <div className='carousel'>

            {/* affiche la première image */}
            <div className='div-image'>  
                <img className="classImage" src={pictures[picture]}  key={"car-"+picture} alt={"photo "+picture} />
            </div>

            {/* si plus d'une image,  ET que l'on clique sur le chevron alors le code suivant sera exécuté */}
            {totalPictures > 0 && ( 
                <div> {/* les boutons pour les chevrons droit et gauche, servent pour naviguer au sein du Carousel */}
                    <button onClick={() => setpicture(picture - 1)}>{picture}
                        <img className='classChevronGauche' src={VectorLeft}  alt={'flèche gauche pour changer de photo '+picture} />
                    </button>
                    <button onClick={() => setpicture(picture + 1)}>{picture}
                        <img className='classChevronDroit' src={VectorRight}  alt={'flèche droite pour changer de photo '+picture} />
                    </button>
                </div>
            )}
            {totalPictures > 0 && (
                // compteur d'images qui ne s'affiche qu'en version Desktop et lorsqu'il y a plusieurs images
                <div className='div-compteur'> 
                    <p className='compteurImages'>
                        {picture+1}/{totalPictures+1}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Carousel
