const express = require('express')
const router = express.Router();
const FormController = require('../Controllers/FormController')

router.post('/', FormController.createInscricao)
router.put('/:cpf', FormController.updateInscricao)
router.get('/', FormController.getAllInscricao)
router.get('/:id', FormController.getInscricaoById)
router.delete('/:id', FormController.deleteInscricao)

module.exports = router