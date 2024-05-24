import React from "react";
import styled from "styled-components";
import Legislacao from '../Assets/Img/Legislacao.png'
import MaterialPed from '../Assets/Img/MaterialPed.png'
import Projetos from '../Assets/Img/Projetos.png'


const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 15em;
    background-color: #009640; 
    color: white;
    font-family: 'Lato', sans-serif;
    margin: 0 auto;
    width: 96%;
    max-width: 1200px;
    margin-bottom:5em;

    @media screen and (max-width: 1200px) {
        width: 96%;
        height: 35em;
        margin-bottom:12em;
        font-size: 0.34em;
        display: block;
        text-align: center;
    }
`;

const TextSect = styled.h1`
    color: rgba(255, 255, 255, 0.5);
    font-family: 'Anton';
    font-size: 3.5em;
    margin-bottom: 0.5em;
    padding-left:0.6em;
    

    @media screen and (max-width: 1200px) {
        font-size: 5.5em;
        padding-top:0.3em;
    }
`;

const InfoSect = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5em;
    font-size: 1.25em;
    color: #fff;
    margin-left:8em;
    padding-bottom:0.8em;

    @media screen and (max-width: 1200px) {
        flex-direction: row;
        align-items: center;
        gap: 1em;
        padding: 0; 
        font-size: 0.9em;
        padding-bottom: 1em;
        margin-right: 0;
    }
`;

const TextInfo = styled.p`
    color: #fff;
    margin: 0 1em;
    font-size: 1em;

    @media screen and (max-width: 1200px) {
        font-size: 3.2em;
        margin-top: auto;
    }
`;



const LinkSect = styled.a`
    text-decoration: none;
    color: white;
    &:hover img {
        transform: scale(1.1);
    }
    img {
    transition: transform 0.3s; }
    @media screen and (max-width:1200px){
        text-decoration: none;
    color: white;
    &:hover img {
        transform: scale(1.1);
    }
    img {
    transition: transform 0.3s; }
        
    }
`;

function SectionHome() {
    return (
        <SectionContainer>
            <TextSect>EDUCAÇÃO</TextSect>
            <InfoSect>
                <LinkSect href="https://drive.google.com/file/d/1GTeVlZ84gXHgEw_5c0rG5lDVT7tnZn8k/view?usp=sharing" target="_blank"><img src={Legislacao} alt="Legislação" /><TextInfo>Legislação</TextInfo></LinkSect>
                <LinkSect href="https://drive.google.com/file/d/1GTeVlZ84gXHgEw_5c0rG5lDVT7tnZn8k/view?usp=sharing" target="_blank"><img src={MaterialPed} alt="Material Pedagógico" /><TextInfo>Material Pedagógico</TextInfo></LinkSect>
                <LinkSect href="/Projetos"><img src={Projetos} alt="Projetos" /><TextInfo>Projetos</TextInfo></LinkSect>
            </InfoSect>
        </SectionContainer>
    );
}

export default SectionHome;
