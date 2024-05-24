import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
    width: 150em;
    height: 100%;
    margin: 0 8px;
    flex-direction: row;
    padding: 2%;
    img{
        width: 100%;
        height: 100%;     
    }
    @media screen and (max-width: 900px) {
        display: flex;
        padding: 3px 4px;
        margin-right: 10px; 
        img{
        width: 100%;
        height: 100%;     
        }
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    font-size: 18px;
    @media screen and (max-width: 900px){
        display: flex;
        flex-wrap: wrap;
    }
`
const Text = styled.p`
    justify-content: center;
    text-align:justify;
    padding-right: 1.5em;
    margin-left: 1.2em;

    @media screen and (max-width: 900p){
        
    }
`
function ImageHome({ images }) {
    return (
        <Container>
            {images.map((image, index) => (
                <ImageContainer key={index}>
                    <img src={image.src} alt={image.alt} />
                </ImageContainer>
            ))}
            <Text>
                <p>A Educação de Jovens e Adultos (EJA) é uma modalidade da Educação Básica que permite ao estudante retomar e concluir os estudos, promovendo, dessa forma, a qualificação para conseguir melhores oportunidades no mercado de trabalhoe os meios para uma melhor compreensão de sua condição enquanto cidadão. As instituições municipais de ensino com oferta da modalidade EJA propiciam a conclusão em um ano do Ensino Fundamental I (1º ao 5º ano) e dois anos do Ensino Fundamental II (6º ao 9º ano) para pessoas a partir de 15 anos.<p>A Secretaria Municipal de Educação oferece a EJA nas UnidadesEducacionais e Entidades do MOVA-SPconveniadas com a SME, com formas diversificadas de atendimento que possibilitam aos jovens e adultos a continuidade dos estudos e conclusão do Ensino Fundamental.</p>
                </p>
            </Text>
        </Container>
    );
}
export default ImageHome;