import React from 'react'
import Banner from '../components/Banner'
import ApartmentCards from '../components/Card' 




import "../styles/Home.css"

function Home() {
    return (
   
        <div className='main'>
                <Banner>
                    <div className="banner bannerOne">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </Banner>
          
                <ApartmentCards/>
               
        </div>
        
    )
}

export default Home