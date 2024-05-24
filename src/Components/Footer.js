import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    display: flex;
    background-color: #009640; 
    color: #fff;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;

    @media screen and (max-width: 900px) {
        display: block;
        text-align: center;
        
    }
`
const EjaFooter = styled.p`
    width: 33,33%;
    display: flex;
    flex-direction: column;
    font-family: 'Bree Serif', serif;
    font-size: 3.125em;
    padding: 0.5em;

    @media screen and (max-width: 900px) {
        font-size: 2.3em;
        margin-top: 0;
        padding: 0;
    }
   
`
const EmbuFooter = styled.p`
    display: flex;
    flex-direction: column;
    font-size: 0.425em;
    margin-top: auto;
    
    @media screen and (max-width: 900px) {
        margin-top: 0;
        padding: 0;
        font-size:0.425em;
        margin-bottom:0;
    }
    
    `
const ColumnFooter = styled.div`

    justify-content: center;
    padding: 1em 1em;
    @media screen and (max-width: 900px) {
       padding: 0; 
       font-size: 0.9em;
       margin: 0;
    }
`

const Midias = styled.div`
    color: #fff;
    padding-left: 1em;
    @media screen and (max-width: 900px) {
       padding: 0; 
       font-size: 0.9em;
       padding-bottom: 1em;
    }
`
const FootText = styled.p`
`
const FootMidias = styled.a`
    display: inline;
    font-size: 1.25em;
    color: #fff;
    padding: 0.313em;
    margin-left:0;
    @media screen and (max-width: 900px) {
        margin-top:0;
    }
    
`

const LineFooter = styled.div`
    border-left: 0.25em solid white;
    height: 7.375em;
    @media screen and (max-width: 900px) {
        border-left: none;
        height: 0;
    }
`

function Footer() {
    return (
        <FooterContainer>
            <EjaFooter>EJA<EmbuFooter>EMBU DAS ARTES</EmbuFooter></EjaFooter>
            <LineFooter></LineFooter>
            <ColumnFooter>
                <p>SECRETARIA MUNICIPAL DE EDUCAÇÃO <br />Av. Rotary, 3483 - Parque Industrial Ramos de Freitas - Embu das Artes &ensp; Telefone: (11) 5990-3901 Ramal 3</p>
            </ColumnFooter>
            <LineFooter></LineFooter>
            <Midias>
                <FootText>Redes Sociais</FootText>
                <FootMidias href="#"><i class="fab fa-facebook social-icon"></i></FootMidias>
                <FootMidias href="#"><i class="fab fa-whatsapp social-icon"></i></FootMidias>
                <FootMidias href="#"><i class="fab fa-instagram social-icon"></i></FootMidias>
            </Midias>
        </FooterContainer>
    )

}

export default Footer