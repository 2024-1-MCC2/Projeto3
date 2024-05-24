const db = require('../db')

exports.createInscricao = async(req, res) =>{
    const {
        cpf, cNome, cCor, cDataNasc, cMunicipioNasc, cEstado, cRA, cRG, cRgDataExpedicao,
        cRgEstado, cEndereco, cNomePai, cRgPai, cNomeMae, cRgMae, cTelefone, cCelular, idEscS
    } = req.body

    console.log('Dados recebidos:', req.body);  // Log dos dados recebidos

    try {
        const [result] = await db.query(
            'INSERT INTO candidato (cpf, cNome, cCor, cDataNasc, cMunicipioNasc, cEstado, cRA, cRG, cRgDataExpedicao, cRgEstado, cEndereco, cNomePai, cRgPai, cNomeMae, cRgMae, cTelefone, cCelular, idEscS) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [cpf, cNome, cCor, cDataNasc, cMunicipioNasc, cEstado, cRA, cRG, cRgDataExpedicao, cRgEstado, cEndereco, cNomePai, cRgPai, cNomeMae, cRgMae, cTelefone, cCelular, idEscS]
        );
        res.status(201).send(`Candidato criado com o cpf: ${result.insertId}`);
    } catch (error) {
        console.error('Erro ao inserir no banco de dados:', error);  // Log do erro
        res.status(500).send(error.message);
    }
}

exports.getAllInscricao = async(req, res) =>{
    try {
        const [candidato] = await db.query('SELECT * FROM candidato')
        res.status(200).json(candidato);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
exports.getInscricaoById = async(req, res) =>{
    const id = req.params.id
    try{
        const [Inscricao] = await db.query('SELECT * FROM candidato WHERE id = ?', [id])
        if(Inscricao.length > 0){
            res.status(200).json(Inscricao[0])
        }else{
            res.status(404).send('Inscricao não Encontrada')
        }
    } catch (error){
        console.error(error)
        res.status(500).send(error.message)
    }
}
exports.updateInscricao = async(req, res) =>{
    const id = req.params.id
    const {cpf, cNome, cCor, cDataNasc, cMunicipioNasc, cEstado, cRA, cRG, cRgDataExpedicao, cRgEstado, cEndereco, cNomePai, cRgPai, cNomeMae, cRgMae, cTelefone, cCelular, idEscS} = req.body
    
    try{
        const fields = []
        const values = []
        if(cpf){
            fields.push('cpf = ?')
            values.push(cpf)
        }
        if(cNome){
            fields.push('cNome = ?')
            values.push(cNome)
        }
        if(cCor){
            fields.push('cCor = ?')
            values.push(cCor)
        }
        if(cDataNasc){
            fields.push('cDataNasc = ?')
            values.push(cDataNasc)
        }
        if(cMunicipioNasc){
            fields.push('cMunicipioNasc = ?')
            values.push(cMunicipioNasc)
        }
        if(cEstado){
            fields.push('cEstado = ?')
            values.push(cEstado)
        }
        if(cRA){
            fields.push('cRA = ?')
            values.push(cRA)
        }
        if(cRG){
            fields.push('cRG = ?')
            values.push(cRG)
        }
        if(cRgDataExpedicao){
            fields.push('cRgDataExpedicao = ?')
            values.push(cRgDataExpedicao)
        }
        if(cRgEstado){
            fields.push('cRgEstado = ?')
            values.push(cRgEstado)
        }
        if(cEndereco){
            fields.push('cEndereco = ?')
            values.push(cEndereco)
        }
        if(cNomePai){
            fields.push('cNomePai = ?')
            values.push(cNomePai)
        }
        if(cRgPai){
            fields.push('cRgPai = ?')
            values.push(cRgPai)
        }
        if(cNomeMae){
            fields.push('cNomeMae = ?')
            values.push(cNomeMae)
        }
        if(cRgMae){
            fields.push('cRgMae = ?')
            values.push(cRgMae)
        }
        if(cTelefone){
            fields.push('cTelefone = ?')
            values.push(cTelefone)
        }
        if(cCelular){
            fields.push('cCelular = ?')
            values.push(cCelular)
        }
        if(idEscS){
            fields.push('idEscS = ?')
            values.push(idEscS)
        }
        if(fields.length === 0){
            return res.status(400).send('Nenhum campo para atualizar')
        }
        values.push(id)
        const query = `UPDATE candidato SET ${fields.join(', ')} WHERE id = ?`
        const [result] = await db.query(query, values)
        if(result.affectedRows > 0){
            res.status(200).send('Foi atualizado!')
        } else {
            res.status(404).send('Não foi possível atualizar')
        }
    } catch (error){
        console.error('Erro ao atualizar o inscricao', error)
        res.status(500).send(error.message)
    }
}

exports.deleteInscricao = async(req, res) =>{
    const id = req.params.id
    try{
        const[result] = await db.query('DELETE FROM candidato WHERE id = ?', [id])
        if(result.affectedRows > 0){
            res.status(200).send('Inscricao deletada com sucesso')
        } else {
            res.status(404).send('Inscricao não encontrada')
        }
    } catch (error){
        console.error(error)
        res.status(500).send(error.message)
    }
}