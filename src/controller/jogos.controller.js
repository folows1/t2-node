const service = require('../service/jogos.service');

const checkAndValidadeRequest = (jogo) => {
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
    const errors = checkAndValidadeRequest(jogo)
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
    if (!time) {
        return res.status(400).send('O nome do time é obrigatório')
    }
    const jogosDoTime = await service.getByTeamName(time)
    if (jogosDoTime.length > 0) {
        res.send(jogosDoTime)
    } else {
        res.status(204).send('Nenhum jogo encontrado com o time informado')
    }

}

const getByDate = async (req, res) => {
    const data = req.params.data
    if (!data) {
        return res.status(400).send('A data é obrigatória - formato YYYY-MM-DD')
    }
    const jogosDaData = await service.getByDate(data)
    if (jogosDaData.length > 0) {
        res.send(jogosDaData)
    } else {
        res.status(204).send('Nenhum jogo encontrado com a data informada')
    }

}

const update = async (req, res) => {
    const id = Number(req.params.id)
    if (!id) {
        return res.status(400).send('O id do jogo é obrigatório')
    }
    const jogo = req.body

    await service.update(id, req.body)
    res.status(200).send('Jogo atualizado com sucesso!')
}

const remove = async (req, res) => {
    const id = req.params.id
    await service.remove(id)
    res.status(204).send('Jogo removido com sucesso!')
}

module.exports = {
    create,
    getAll,
    getByTeamName,
    getByDate,
    update,
    remove
}