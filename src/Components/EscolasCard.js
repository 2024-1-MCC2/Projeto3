import styled from 'styled-components'
import ContatoEscolas from './ContatoEscolas'
import '../Components/CSSFiles/ContatoEscolas.css'
import Aside from '../Components/Aside'


const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: fit-content;
    max-width: 52em;
    justify-content: space-around;
    align-items: center;
    position: relative;
    min-width: 300px;
`
const ImageCard = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    width: 9em;
    height: 12em;
    border-radius: 50%;
    background:linear-gradient(90deg, rgba(0,150,64,1) 0%, rgba(255,245,0,1) 35%, rgba(255,0,0,1) 100%);
    margin-bottom: 10em;
`
const StyledImage = styled.img`  //gradient
    display:flex;
    margin:0.5em;
    width: 8em;
    height: 11em;
    
`
const SubTitle = styled.h2`
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    height: fit-content;
    width: 70%;
    color: black;
    margin:0 auto;
    font-family: 'Montserrat';

    
`
const Description = styled.p` 
    display: flex;
    justify-content: center;
    position: relative;
    color: black;
    font-family: 'Montserrat';
    width: 100%;
   
    
`
const  TotalCard = styled.div`
display: flex;
flex-direction: column;
 padding: 4em;
`
const  AsideContainer = styled.div`
display: flex;


`
function EscolasCard({ characters }) {
    return (
        <TotalCard>
            <AsideContainer>
             <Aside />
            <Container> 
                {characters.map((character, index) => (
                    <ImageCard className="image-card" key={index}>
                        <StyledImage src={character.src} alt={character.alt} />
                        <SubTitle>{character.nome}</SubTitle>
                        <Description>{character.description}</Description>
                    </ImageCard>
                ))}
                
               
            </Container>
            </AsideContainer>
            <ContatoEscolas
                    email="example@email.com"
                    whatsapp="+1234567890"
                    telefone="+0987654321"
                    horario="9am - 5pm"
                    endereco="123 Main St, City, State"
                />
        </TotalCard>
    )
}
export default EscolasCard