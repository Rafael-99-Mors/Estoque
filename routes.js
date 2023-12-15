const EstoqueController = require("./controllers/EstoqueController")
const router = require('express').Router()

router.get('/Estoque', EstoqueController.index)
router.post('/Estoque', EstoqueController.store)
router.get('/Estoque/:id', EstoqueController.show)
router.put('/Estoque/:id', EstoqueController.update)
router.delete('/Estoque/:id', EstoqueController.destroy)

module.exports = router