const { Op } = require('sequelize')
const { jogos } = require('../model/index')

const create = async data => {
    await jogos.create(data)
}

const getAll = async () => {
    return await jogos.findAll()
}

const getById = async idJogo => {
    return await jogos.findAll({
        where: {
            id: idJogo
        }
    })
}

const update = async (idJogo, data) => {
    return await jogos.update(data, {
        where: {
            id: idJogo
        }
    })
}

const remove = async idJogo => {
    return await jogos.destroy({
        where: {
            id: idJogo
        }
    })
}

const getByTeamName = async nomeTime => {

    return await jogos.findAll({
        where: {
            [Op.or]: [
                { mandante: nomeTime },
                { visitante: nomeTime }
            ]
        }
    })
}

const getByDate = async dataJogo => {
    return await jogos.findAll({
        where: {
            data: dataJogo
        }
    })
}

module.exports = {
    create,
    getAll,
    getById,
    update,
    remove,
    getByTeamName,
    getByDate
}