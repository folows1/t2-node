const service = require('../service/jogos.service');

const checkAndValidateRequest = (jogo) => {
    let errors = []
    const { mandante, visitante, data, estadio, horario } = jogo
    if (!mandante) {
        errors.push('O campo mandante é obrigatório')
    }
    if (!visitante) {
        errors.push('O campo visitante é obrigatório')
    }
    if (!data) {
        errors.push('O campo data é obrigatório')
    }
    if (!estadio) {
        errors.push('O campo estádio é obrigatório')
    }
    if (!horario) {
        errors.push('O campo horário é obrigatório')
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
        errors.push('O campo data deve estar no formato YYYY-MM-DD')
    }
    return errors;
}

const checkAndValidateUpdateRequest = (jogo) => {
    let errors = []
    const { gols_mandante, gols_visitante } = jogo
    if (!gols_mandante && gols_mandante !== 0) {
        errors.push('O campo gols_mandante é obrigatório')
    }
    if (!gols_visitante && gols_visitante !== 0) {
        errors.push('O campo gols_visitante é obrigatório')
    }
    if (isNaN(gols_mandante) || isNaN(gols_visitante)) {
        errors.push('O campo gols deve ser um número')
        return errors
    }
    if (gols_mandante < 0 || gols_visitante < 0) {
        errors.push('Os gols não podem ser negativos')
    }
    return errors;
}

const formatRequestBody = (jogo) => {
    return {
        mandante: jogo.mandante,
        visitante: jogo.visitante,
        data: jogo.data,
        estadio: jogo.estadio,
        horario: jogo.horario,
        gols_mandante: 0,
        gols_visitante: 0
    }
}

const create = async (req, res) => {
    const jogo = req.body
    const errors = checkAndValidateRequest(jogo)
    if (errors.length > 0) {
        return res.status(400).json({ errors })
    }
    const formattedJogo = formatRequestBody(jogo)
    const jogoCriado = await service.create(formattedJogo)
    res.status(201).send(jogoCriado)
}

const getAll = async (req, res) => {
    const jogos = await service.getAll();
    if (jogos.length > 0) {
        res.send(jogos)
    } else {
        res.status(204).send('Nenhum jogo cadastrado')
    }
}

const getByTeamName = async (req, res) => {
    const time = req.params.time
    const jogosDoTime = await service.getByTeamName(time)
    if (jogosDoTime.length > 0) {
        return res.send(jogosDoTime)
    } 
    return res.status(204).send('Nenhum jogo encontrado do time informado')
}

const getByDate = async (req, res) => {
    const data = req.params.data
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
        return res.status(400).send('A data deve estar no formato YYYY-MM-DD')
    }
    const jogosDaData = await service.getByDate(data)
    if (jogosDaData.length > 0) {
        return res.send(jogosDaData)
    } 
    return res.status(204).send('Nenhum jogo encontrado com a data informada')
}

const update = async (req, res) => {
    const id = req.params.id
    if (isNaN(id)) {
        return res.status(400).send('O id do jogo deve ser um número')
    }
    const jogo = req.body
    const errors = checkAndValidateUpdateRequest(jogo)
    if (errors.length > 0) {
        return res.status(400).json({ errors })
    }
    const formattedBody = {
        gols_mandante: jogo.gols_mandante,
        gols_visitante: jogo.gols_visitante
    }
    const [jogoAtualizado] = await service.update(id, formattedBody)
    console.log('jogoAtualizado - update', jogoAtualizado)
    if (jogoAtualizado) {
        return res.status(200).send('Jogo atualizado com sucesso')
    }
    return res.status(404).send('Jogo não encontrado')
}

const remove = async (req, res) => {
    const id = req.params.id
    if (isNaN(id)) {
        return res.status(400).send('O id do jogo deve ser um número')
    }
    const jogoRemovido = await service.remove(id)
    console.log('jogoRemovido - remove', jogoRemovido)
    if (jogoRemovido) {
        return res.status(200).send('Jogo removido com sucesso')
    }
    return res.status(404).send('Jogo não encontrado')

}

module.exports = {
    create,
    getAll,
    getByTeamName,
    getByDate,
    update,
    remove
}