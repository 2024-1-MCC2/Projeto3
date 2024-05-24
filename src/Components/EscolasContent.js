import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import '../Components/CSSFiles/BioStyling.css'  
const Container = styled.div`
    max-width: 910px;
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: left;
    @media screen and (max-width: 900px) {
        max-width: 330px;
        align-items: center;
    }
`
const Content = styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;
    background-color: #fff;
    padding: 20px;
    border-radius: 15px;
    box-shadow:  9px 8px 5px 1px rgba(0, 128, 0, 0.5);
`
const TextContainer = styled.div`
    font-family: 'Orelega One';
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Text = styled.p`
    font-family: 'Orelega One';
    text-align: justify;
    font-size: 22px;

    @media screen and (max-width: 1200px) {
        font-size:  15px;
        padding: 10px 10px;
        font-weight: bold;
        margin-top: -4px;
    }

`
const Title = styled.h2`
    padding: 10px 10px;
    border: none;
    height: 1em;
    border-radius: 15px;
    background-color: #009640;
    text-decoration: none;
    color: #000;
    margin:10px;
    cursor: pointer;
    &:hover{
        background-color: rgba(255,245,0,0.5);
        
    }
    align-self: flex-start;

        @media screen and (max-width: 900px){
            align-items: center;
            font-size: 20px;
            border-radius: 15px;
            background-color: rgba(0,150,64,1);
            height: 1.6em;
        }
`
const End = styled.p`
    text-align: justify;
    font-size: 22px;

    @media screen and (max-width: 900px) {
        font-size:  15px;
        padding: 1px 1px;
        color: gray;
        font-style: italic;
        margin-bottom: -20px;
    }

    cursor: pointer;
    &:hover{
        background-color: #FFDA00;
        text-decoration: underline;
    }

`
function EscolasContent({ imageEscolas }) {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate("/InfoEscolas")
    }
    const endereco = "Escolas.endereco";
    const handleClique = () => {
        const urlBase = "https://www.google.com/maps/place/Av.+Rotary,+3613+-+Vila+Pereque,+Embu+das+Artes+-+SP,+06816-155/@-23.643798,-46.8088476,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce54a104c27ec1:0x42f5d3400187debd!8m2!3d-23.643798!4d-46.8088476!16s%2Fg%2F11td1fzlxr?entry=ttu";
        const url = urlBase + encodeURIComponent(endereco);
        window.open(url, "_blank");
    }
    return (
        <Container>
            {imageEscolas.map((Escolas, index) => (
                <Content key={index}>
                    <TextContainer className='Container-Escolas'>
                        <Title className='Escolas-name' onClick={handleBack}>{Escolas.name}</Title>
                        <Text className='Escolas-text'>{Escolas.text}</Text>
                        <End className='Escolas-end' onClick={handleClique}>{Escolas.endereco}</End>
                    </TextContainer>
                </Content>
            ))}
           
        </Container>
    )
}
export default EscolasContent