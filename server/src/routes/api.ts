import { Router } from 'express'
import { markupController } from '../controllers/markupController.js'

export const apiRouter = Router()

apiRouter.get('/', (req, res) => {
  res.json({
    message: 'API is working',
    version: '1.0.0'
  })
})

apiRouter.use('/markup', markupController)