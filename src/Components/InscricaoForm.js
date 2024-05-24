import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Logo from '../Assets/Img/Logo.png'


const InscInput = styled.input`
    border-radius: 0.9em;
    border: 0.01em solid;
    width: 35%;
    padding: 1.1em;
    margin: 0.5em;
    margin-left:8em;
 
  @media screen and (max-width:1200px) {
    border-radius: 0.9em;
    border: 0.01em solid;
    width:20em;
    margin: 0.5em;
    margin-left: 4em;
 }  
 `
 const ButtonInsc = styled.button`
       display: inline-block;
        margin: 10px;
        margin-left: 30em;
        padding: 10px 30px;
        font-size: 18px;
        background-color: #009640;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      &:hover{
         background-color: #FFF100;
     }
 @media screen and (max-width:1200px) { 
    display: block;
    margin: 1em auto; 
    padding: 10px 30px;
    font-size: 18px;
    background-color: #009640;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 200px; 
    text-align: center;
      &:hover{
         background-color: #FFF100;
     }
}
 `
const ButtonVoltar = styled.button`
        
        margin: 10px;
        padding: 10px 30px;
        font-size: 18px;
        background-color: #009640;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      &:hover{
         background-color: #FFF100;
     }
 @media screen and (max-width:1200px) { 
    display: block;
    margin: 1em auto; 
    padding: 10px 30px;
    font-size: 18px;
    background-color: #009640;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 200px; 
    text-align: center;
      &:hover{
         background-color: #FFF100;
     }
}
 `
 const ImgInsc = styled.img`
 display: flex;
 align-content:start;
 margin-left: 1em;
 margin-top: 0.5em;
  width: 10em;
 `

 const TextInscri = styled.h1`
margin-left: 10em;


@media screen and (max-width:1200px){
    margin-left: 1em;
}
`




function InscricaoForm({ fetchFormularioSite }) {
    const initialState = {
        cpf: '',
        cNome: '',
        cCor: '',
        cDataNasc: '',
        cMunicipioNasc: '',
        cEstado: '',
        cRA: '',
        cRG: '',
        cRgDataExpedicao: '',
        cRgEstado: '',
        cEndereco: '',
        cNomePai: '',
        cRgPai: '',
        cNomeMae: '',
        cRgMae: '',
        cTelefone: '',
        cCelular: '',
        idEscS: ''
    }
    const [formData, setFormData] = useState(initialState)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            // Enviar dados do formulário para o servidor
            await axios.post('http://localhost:5000/api/formulariosite', formData);

            // Limpar o formulário
            setFormData(initialState);

            // Atualizar a lista de formulários no componente pai
            fetchFormularioSite();
        } catch (error) {
            console.error('Erro ao enviar o cadastro', error);
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
            <a href="/"><ImgInsc src={Logo} alt={""}/></a>
            </div>
            <TextInscri>Cadastro do Candidato:</TextInscri>
            <InscInput type="text" name="cpf" value={formData.cpf} onChange={handleChange} placeholder="CPF" required/>
            <InscInput type="text" name="cNome" value={formData.cNome} onChange={handleChange} placeholder="Nome" required/>
            <InscInput type="text" name="cCor" value={formData.cCor} onChange={handleChange} placeholder="Cor do candidato" required/>
            <InscInput type="text" name="cDataNasc" value={formData.cDataNasc} onChange={handleChange} placeholder="Data de Nascimento" required/>
            <InscInput type="text" name="cMunicipioNasc" value={formData.cMunicipioNasc} onChange={handleChange} placeholder="Municipio de Nascimento"required/>
            <InscInput type="text" name="cEstado" value={formData.cEstado} onChange={handleChange} placeholder="Estado Nascimento" required/>
            <InscInput type="text" name="cRA" value={formData.cRA} onChange={handleChange} placeholder="Número do RA" required/>
            <InscInput type="text" name="cRG" value={formData.cRG} onChange={handleChange} placeholder="Número do RG" required/>
            <InscInput type="text" name="cRgDataExpedicao" value={formData.cRgDataExpedicao} onChange={handleChange} placeholder="Data de Expedicao do RG" required/>
            <InscInput type="text" name="cRgEstado" value={formData.cRgEstado} onChange={handleChange} placeholder="UF Expedicao do RG" required/>
            <InscInput type="text" name="cEndereco" value={formData.cEndereco} onChange={handleChange} placeholder="Endereco do Candidato" required/>
            <InscInput type="text" name="cNomePai" value={formData.cNomePai} onChange={handleChange} placeholder="Nome do Pai" required/>
            <InscInput type="text" name="cRgPai" value={formData.cRgPai} onChange={handleChange} placeholder="RG do Pai" required/>
            <InscInput type="text" name="cNomeMae" value={formData.cNomeMae} onChange={handleChange} placeholder="Nome do Mae" required/>
            <InscInput type="text" name="cRgMae" value={formData.cRgMae} onChange={handleChange} placeholder="RG do Mae" required/>
            <InscInput type="text" name="cTelefone" value={formData.cTelefone} onChange={handleChange} placeholder="Telefone com DDD" required/>
            <InscInput type="text" name="cCelular" value={formData.cCelular} onChange={handleChange} placeholder="Celular com DDD" required/>
            <InscInput type="text" name="idEscS" value={formData.idEscS} onChange={handleChange} placeholder="Id Escola" required/>
            <ButtonInsc type="submit">Enviar</ButtonInsc> 
            <a href="/"><ButtonVoltar type="button">Voltar</ButtonVoltar></a> 
            <TextInscri>Dados Cadastrados</TextInscri> 
        </form> 
    )
}

export default InscricaoForm

