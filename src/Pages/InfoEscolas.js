import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import EscolasCard from '../Components/EscolasCard'
import Marcos from '../Assets/Img/Marcos.png'
import Rodrigo from '../Assets/Img/Rodrigo.png'
import MariaIsabel from '../Assets/Img/MariaIsabel.png'
import Barbara from '../Assets/Img/Barbara.png'
import Fernando from '../Assets/Img/Fernando.png'
import Laudiceia from '../Assets/Img/LaudiceiaSouza.png'
import Leonardo from '../Assets/Img/Leonardo.png'
import Alex from '../Assets/Img/Alex.png'
import Odair from '../Assets/Img/Odair.png'
import RodrigoCir from '../Assets/Img/rodrigoprofCirc.png'

function InfoEscolas() {
    return(
        <div>
            <Header/>
            <EscolasCard 
                characters={[
                    {src: Fernando, alt:"Persona4", nome:"Fernando Ribeiro", description:"Diretor"},
                    {src: Laudiceia, alt:"Persona5", nome:"Laudiceia Sousa", description:"Coordenadora"},
                    {src: Odair, alt:"Persona6", nome:"Odair", description:"Ciências"},
                    {src: Rodrigo, alt:"Persona2", nome:"Rodrigo", description:"Arte"},
                    {src: Barbara, alt:"Persona7", nome:"Barbara", description:"Filosofia"},
                    {src: Alex, alt:"Persona8", nome:"Alex", description:"Geografia"},
                    {src: Leonardo, alt:"Persona8", nome:"Leonardo", description:"Espanhol"},
                    {src: RodrigoCir, alt:"Persona8", nome:"Rodrigo", description:"História"},
                    {src: MariaIsabel, alt:"Persona3", nome:"Maria Isabel", description:"Português"},
                    {src: Marcos, alt:"Persona1", nome:"Marcos", description:"Matemática"},
                ]}
            />
            <Footer/>
        </div>
        
    );
}
export default InfoEscolas