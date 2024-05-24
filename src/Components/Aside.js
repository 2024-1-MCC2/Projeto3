import React from "react"
import styled from "styled-components"
import ejabus from '../Assets/Img/ejabus.png'
import comidaesc from '../Assets/Img/comidaesc.png'
import livroesc from '../Assets/Img/livroesc.png'
import wifi from '../Assets/Img/wifi.png'

const AsideEdit = styled.aside`
    background-color: green;
    padding: 1.25em;
    border-radius: 1.125em;
    
    display: flex;
    flex-direction: column;
   
    align-items: center;
    width: 12.5em; 
    height: 40em;
    // @media screen and (max-width:900px )
    // {
    //     background-color: green;
    //     border-radius: 18px;
    //     text-align: center;
    //     margin: 3em;
    //     width: 18em; 
    //     height: 20em;
    // }
`
const EscEdit = styled.h3`
    
    display: flex;
    color: #FFF;
    text-align: center;
    @media screen and (max-width:900px )
    {
        font-size:0.9em;
    }
    margin-bottom: 1em;
`

const Imagens = styled.img`
    display: flex;
    margin-top: 2em;
    
   
`
function Aside() {
    return (
        <AsideEdit>
            <Imagens src={ejabus} alt={""} />
            <EscEdit>Transporte adaptado</EscEdit>
            <Imagens src={comidaesc} alt={""} />
            <EscEdit>Jantar</EscEdit>
            <Imagens src={livroesc} alt={""} />
            <EscEdit>Acompanhamento Pisicopedagógico</EscEdit>
            <Imagens src={wifi} alt={""} />
            <EscEdit>Wi-fi</EscEdit>
        </AsideEdit>
    )
}
export default Aside