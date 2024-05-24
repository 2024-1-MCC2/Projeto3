import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EditInscricaoModal from './EditInscricaoModal'
import {
    ListContainer,
    InscricaoCard,
    InscricaoInfo,
    InscricaoNome,
    InscricaoDescricao,
    Actions,
    ActionButton
} from '../styles/InscricaoListStyle'

function InscricaoList({refresh, setRefresh}) {
    const [formulariosite, setFormularioSite] = useState([])
    const [editInscricao, setEditInscricao] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        fetchFormularioSite()
    }, [refresh])

    const fetchFormularioSite = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/formulariosite')
            setFormularioSite(response.data)
        } catch (error) {
            console.error('erro ao buscar formulario', error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/formulariosite/${id}`)
            fetchFormularioSite()
        } catch (error) {
            console.error('Erro ao deletar o Inscricao', error)
        }
    }

    // const handleEdit = async (id) => {
    //     try {
    //         const response = await axios.get(`http://localhost:5000/api/formulariosite/${id}`)
    //         setEditInscricao(response.data)
    //         setIsModalOpen(true)
    //     } catch (error) {
    //         console.error('Erro ao buscar o Inscricao para edição', error)
    //     }
    // }

    return (
        <ListContainer>
            {formulariosite.map((inscricao) => (
                <InscricaoCard key={inscricao.id}>
                    <InscricaoInfo>
                        <InscricaoNome>{inscricao.cpf}</InscricaoNome>
                        <InscricaoNome>{inscricao.cNome}</InscricaoNome>
                        <InscricaoDescricao>{inscricao.cCor}</InscricaoDescricao>
                        <InscricaoDescricao>{inscricao.cDataNasc}</InscricaoDescricao>
                        <InscricaoDescricao>{inscricao.cMunicipioNasc}</InscricaoDescricao>
                        <InscricaoDescricao>{inscricao.cEstado}</InscricaoDescricao>
                        <InscricaoDescricao>{inscricao.cRA}</InscricaoDescricao>
                        <InscricaoDescricao>{inscricao.cRG}</InscricaoDescricao>
                        <InscricaoDescricao>{inscricao.cRgDataExpedicao}</InscricaoDescricao>
                        <InscricaoDescricao>{inscricao.cRgEstado}</InscricaoDescricao>
                        <InscricaoDescricao>{inscricao.cEndereco}</InscricaoDescricao>
                        <InscricaoDescricao>{inscricao.cNomePai}</InscricaoDescricao>
                        <InscricaoDescricao>{inscricao.cRgPai}</InscricaoDescricao>
                        <InscricaoDescricao>{inscricao.cNomeMae}</InscricaoDescricao>
                        <InscricaoDescricao>{inscricao.cRgMae}</InscricaoDescricao>
                        <InscricaoDescricao>{inscricao.cTelefone}</InscricaoDescricao>
                        <InscricaoDescricao>{inscricao.cCelular}</InscricaoDescricao>
                        <InscricaoDescricao>{inscricao.idEscS}</InscricaoDescricao>
                        <Actions>
                            <ActionButton onClick={() => handleDelete(inscricao.id)}>Deletar</ActionButton>
                            {/* <ActionButton onClick={() => handleEdit(inscricao.id)}>Editar</ActionButton> */}
                        </Actions>
                    </InscricaoInfo>
                </InscricaoCard>
            ))}
            {editInscricao && (
                <EditInscricaoModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    inscricao={editInscricao}
                    setRefresh={setRefresh}
                    setEditInscricao={setEditInscricao}
                />
            )}
        </ListContainer>
    )
}
export default InscricaoList