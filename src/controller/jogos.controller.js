const service = require('../service/jogos.service');

const create = async (req, res) => {
    await service.create(req.body);
    res.status(201).send('Jogo criado com sucesso!');
}

const getAll = async (req, res) => {
    const jogos = await service.getAll();
    res.status(200).send(jogos);
}

const getByTeamName = async (req, res) => {
    const time = req.params.time
    res.send(await service.getByTeamName(time))
}

const getByDate = async (req, res) => {
    const data = req.params.data
    res.send(await service.getByDate(data))
}

const update = async (req, res) => {
    const id = req.params.id
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