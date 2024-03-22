import express from 'express'
import { CreateQuery, DeleteQueryByID, GetQueries, GetQueryByID, UpdateQuery } from '../Controllers/questionController.js'
import { CheckToken } from '../Middlewares/checkToken.js'
import { CheckAdmin } from '../Middlewares/checkAdmin.js'

const router = express.Router()


// Post

router.post('/',CheckToken, CheckAdmin, CreateQuery)


// Get

router.get('/', GetQueries)

router.get('/:id', GetQueryByID)


// Delete

router.delete('/:id',CheckToken, CheckAdmin, DeleteQueryByID)


// Put

router.put('/:id',CheckToken, CheckAdmin, UpdateQuery)


export default router