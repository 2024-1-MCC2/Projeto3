import styled from 'styled-components'
import Logo from '../Assets/Img/Logo.png'


const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5em 2em;
    max-width: 100%;
    margin: auto;
`
const FormContainer = styled.div`
    text-align: center;
    flex: 4;
`
const Form = styled.form``
const Input = styled.input`
    display: block;
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 1.2em;
`
const SearchInput = styled(Input)`
    width: 50%;
    margin: 0 auto 20px auto;
`
const Button = styled.button`
    padding: 1em 3em;
    border: none;
    border-radius: 0.5em;
    
    background-color: #009640;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #FFF500;
    }
`
const TextoContato = styled.h1`
    justify-content: center;
`
const ImageInsc = styled.img`
 display: flex;
 align-content:start;
  width: 10em;
 
`

function ContactForm(){
    return(
            <ContactContainer>
                <FormContainer>
                    <Form>
                        <a href="/">
                        <ImageInsc src={Logo} alt={""}/>
                        </a>
                        <TextoContato> FORMULÁRIO DE CONTATO</TextoContato>
                        <SearchInput type="text" placeholder="Nome" />
                        <SearchInput type="email" placeholder="E-mail" />
                        <SearchInput type="text" placeholder= "Assunto" />
                        <SearchInput type="text" placeholder= "Celular" />
                        <SearchInput type="textarea" placeholder= "Mensagem" />
                        <Button type="submit">Enviar</Button>
                    </Form>    
                </FormContainer>
            </ContactContainer>
    )
}
export default ContactForm