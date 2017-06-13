
const express = require('express')
const router = express.Router()
const api = require('../controllers/houseController')

router.get('/', api.getAll)
router.get('/:id', api.getById)
router.post('/', api.insertHouse)
router.put('/:id', api.updateHouse)
router.delete('/:id', api.deleteHouse)

module.exports = router
