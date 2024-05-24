import React, {useState, useEffect} from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import styled from 'styled-components'

Modal.setAppElement('#root')

const ModalContent = styled.div`
position:relative;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    height:500px;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`
const ModalHeader = styled.h2`
    margin-bottom: 10px;
    text-align: center;
    font-size: 1em;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    border-radius: 0.9em;
    border: 0.01em solid;
    width:15em;
    padding: 0.2em 0;
    margin: 0.10em; 
`

const Button = styled.button`
    display: flex;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background: #007bff;
    color: #fff;
    cursor: pointer;
    &:hover{
        background: #394c73;
    }
`
const CancelButton = styled(Button)`
    background: #ccc;
    &:hover{
        background: #999;
    }
`

function EditInscricaoModal({isOpen, onRequestClose, candidato, setRefresh, setEditInscricao}){
    const [cpf, setcpf] = useState('')
    const [cNome, setcNome] = useState('')
    const [cCor, setcCor] = useState('')
    const [cDataNasc, setcDataNasc] = useState('')
    const [cMunicipioNasc, setcMunicipioNasc] = useState('')
    const [cEstado, setcEstado] = useState('')
    const [cRA, setcRA] = useState('')
    const [cRG, setcRG] = useState('')
    const [cRgDataExpedicao, setcRgDataExpedicao] = useState('')
    const [cRgEstado, setcRgEstado] = useState('')
    const [cEndereco, setcEndereco] = useState('')
    const [cNomePai, setcNomePai] = useState('')
    const [cRgPai, setcRgPai] = useState('')
    const [cNomeMae, setcNomeMae] = useState('')
    const [cRgMae, setcRgMae] = useState('')
    const [cTelefone, setcTelefone] = useState('')
    const [cCelular, setcCelular] = useState('')
    const [idEscS, setidEscS] = useState('')
    

    useEffect(() =>{
        if (candidato){
            setcpf(candidato.cpf)
            setcNome(candidato.cNome)
            setcCor(candidato.cCor)
            setcDataNasc(candidato.cDataNasc) 
            setcMunicipioNasc(candidato.cMunicipioNasc)
            setcEstado(candidato.cEstado)
            setcRA(candidato.cRA)
            setcRG(candidato.cRG)
            setcRgDataExpedicao(candidato.cRgDataExpedicao)
            setcRgEstado(candidato.cRgEstado) 
            setcEndereco(candidato.cEndereco)    
            setcNomePai(candidato.cNomePai)
            setcRgPai(candidato.cRgPai)
            setcNomeMae(candidato.cNomeMae)
            setcRgMae(candidato.cRgMae)
            setcTelefone(candidato.cTelefone)   
            setcCelular(candidato.cCelular)
            setidEscS(candidato.idEscS)
            
        }
    }, [candidato])

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const formData = new FormData()
        if (cpf) formData.append('cpf', cpf)
        if (cNome) formData.append('cNome', cNome)
        if (cCor) formData.append('cCor', cCor)
        if (cDataNasc) formData.append('cDataNasc', cDataNasc)
        if (cMunicipioNasc) formData.append('cMunicipioNasc', cMunicipioNasc)
        if (cEstado) formData.append('cEstado', cEstado)
        if (cRA) formData.append('cRA', cRA)
        if (cRG) formData.append('cRG', cRG)
        if (cRgDataExpedicao) formData.append('cRgDataExpedicao', cRgDataExpedicao)
        if (cRgEstado) formData.append('cRgEstado', cRgEstado)
        if (cEndereco) formData.append('cEndereco', cEndereco)
        if (cNomePai) formData.append('cNomePai', cNomePai)
        if (cRgPai) formData.append('cRgPai', cRgPai)
        if (cNomeMae) formData.append('cNomeMae', cNomeMae)
        if (cRgMae) formData.append('cRgMae', cRgMae)
        if (cTelefone) formData.append('cTelefone', cTelefone)
        if (cCelular) formData.append('cCelular', cCelular)
        if (idEscS) formData.append('idEscS', idEscS)

        try{
            const response = await axios.put(`http://localhost:5000/api/formulariosite/${candidato.id}`, formData, {
                headers: {
                    'Content-Type':'multipart/form-data',
                }
            })
            if (response.status === 200) {
                // Atualizar a lista de inscrições
                setRefresh((prev) => !prev);
                // Limpar o estado de edição
                setEditInscricao(null);
                // Fechar o modal
                onRequestClose();
            } else {
                // Se a resposta não foi bem-sucedida, exibir uma mensagem de erro
                // Isso pode ser feito definindo um estado de mensagem de erro e exibindo-o na interface do usuário
                console.error('Erro ao atualizar os dados:', response.data);
            }
        } catch (error) {
            // Tratar diferentes tipos de erros de maneira específica
            console.error('Erro ao atualizar os dados:', error);
            // Exibir mensagem de erro na interface do usuário
            // Isso pode ser feito definindo um estado de mensagem de erro e exibindo-o na interface do usuário
        }
    }
    
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Editar inscricao"
            style={{
                content:{
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    border: 'none',
                    padding: '0',
                    overflow: 'visible',
                },
                overlay:{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
            }}
        >
            <ModalContent>
                <ModalHeader>Editar cadastro</ModalHeader>
                <Form onSubmit={handleSubmit}>            
                    <Input type="text" value={cpf} onChange={(e) => setcpf(e.target.value)} placeholder="CPF do candidato" />
                    <Input type="text" value={cNome} onChange={(e) => setcNome(e.target.value)} placeholder="Nome do Candidato"/>
                    <Input type="text" value={cCor} onChange={(e) => setcCor(e.target.value)} placeholder="Cor do candidato"/>
                    <Input type="text" value={cDataNasc} onChange={(e) => setcDataNasc(e.target.value)} placeholder="Data de Nascimento"/>
                    <Input type="text" value={cMunicipioNasc} onChange={(e) => setcMunicipioNasc(e.target.value)} placeholder="Municipio de Nascimento"/>
                    <Input type="text" value={cEstado} onChange={(e) => setcEstado(e.target.value)} placeholder="Estado Nascimento"/>
                    <Input type="text" value={cRA} onChange={(e) => setcRA(e.target.value)} placeholder="Número do RA"/>
                    <Input type="text" value={cRG} onChange={(e) => setcRG(e.target.value)} placeholder="Número do RG"/>
                    <Input type="text" value={cRgDataExpedicao} onChange={(e) => setcRgDataExpedicao(e.target.value)} placeholder="Data de Expedicao do RG"/>
                    <Input type="text" value={cRgEstado} onChange={(e) => setcRgEstado(e.target.value)} placeholder="UF Expedicao do RG"/>
                    <Input type="text" value={cEndereco} onChange={(e) => setcEndereco(e.target.value)} placeholder="Endereco do Candidato"/>
                    <Input type="text" value={cNomePai} onChange={(e) => setcNomePai(e.target.value)} placeholder="Nome do Pai"/>
                    <Input type="text" value={cRgPai} onChange={(e) => setcRgPai(e.target.value)} placeholder="RG do Pai"/>
                    <Input type="text" value={cNomeMae} onChange={(e) => setcNomeMae(e.target.value)} placeholder="Nome do Mae"/>
                    <Input type="text" value={cRgMae} onChange={(e) => setcRgMae(e.target.value)} placeholder="RG do Mae"/>
                    <Input type="text" value={cTelefone} onChange={(e) => setcTelefone(e.target.value)} placeholder="Telefone com DDD"/>
                    <Input type="text" value={cCelular} onChange={(e) => setcCelular(e.target.value)} placeholder="Celular com DDD"/>
                    <Input type="text" value={idEscS} onChange={(e) => setidEscS(e.target.value)} placeholder="Id Escola"/>
                    <Button type="submit" >Atualizar</Button>
                    <CancelButton type="button" onClick={onRequestClose}>Cancelar</CancelButton>
                </Form>
            </ModalContent>
        </Modal>
    )
}

export default EditInscricaoModal