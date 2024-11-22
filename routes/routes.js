import express from 'express'
import { getAllDatos, getDato, createDato, updateDato, deleteDato } from '../controllers/DatoController.js'
const router = express.Router()

router.get('/', getAllDatos)
router.get('/:id', getDato)
router.post('/', createDato)
router.put('/:id', updateDato)
router.delete('/:id', deleteDato)

export default router
