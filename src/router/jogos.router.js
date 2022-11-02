const express = require('express')
const controller = require('../controller/jogos.controller')

const router = express.Router()

router.get('/', controller.getAll)
router.get('/time/:time', controller.getByTeamName)
router.get('/data/:data', controller.getByDate)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router
