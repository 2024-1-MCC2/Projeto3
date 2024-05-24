import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Ejacarousel from '../Assets/Img/ejacarousel.png'
import ejacar from '../Assets/Img/ejacar.jpeg'
import CarInsc from '../Assets/Img/carInsc.png'
import styled from 'styled-components'


const CarEdit = styled.div`
    font-family:'monserat';
    color: #333;
    margin-bottom:1.3em;
    background-color: #f8f8f8;
    max-width: 1200px;
    width: 70%;
    margin: 0 auto;
    padding: 0 20px; 
`

const CarText = styled.p`
    font-size: 1.2em;
    text-decoration: none;
    background-color: yellow;
    color: black;
    border: 2px solid green; /* Adiciona uma borda sólida de 2px com cor cinza */
    padding: 10px; /* Adiciona preenchimento dentro da borda */
    &:hover{
        transform: scale(1.1);
        text-decoration: none;
    }

`



const HomeCarousel = () => (
    <Carousel autoPlay interval={4000} infiniteLoop showThumbs={false}>
        <CarEdit>
        <a href="./inscricao"><img src={CarInsc} alt={"Imagem 2"} /><CarText>Inscrições abertas!</CarText></a>
        </CarEdit>
        <CarEdit>
            <a href="./escolas"><img src={ejacar} alt={"Imagem 2"} /><CarText>Confira as escolas que incluem o Eja.</CarText></a>
        </CarEdit>
        <CarEdit>
        <a href="./Faq"><img src={Ejacarousel} alt={"Imagem 2"} /><CarText>Dúvidas? Entre em contato.</CarText></a>
        </CarEdit>

    </Carousel>
)

export default HomeCarousel