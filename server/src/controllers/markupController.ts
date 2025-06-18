import { Router, Request, Response } from 'express'
import { asyncHandler } from '../utils/asyncHandler.js'

export const markupController = Router()

markupController.get('/', asyncHandler(async (req: Request, res: Response) => {
  res.json({
    message: 'Markup service endpoint',
    version: '1.0.0'
  })
}))

markupController.post('/process', asyncHandler(async (req: Request, res: Response) => {
  const { content } = req.body

  if (!content) {
    return res.status(400).json({
      error: 'Content is required'
    })
  }

  res.json({
    message: 'Content received',
    content
  })
}))