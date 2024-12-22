import express from 'express'
import cors from 'cors'

import * as trpcExpress from '@trpc/server/adapters/express'

import { trpcRouter } from './trpc'

const PORT = process.env.PORT || 5000

const expressApp = express()

expressApp.use(cors())
expressApp.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  })
)

expressApp.get('/ping', (req, res) => {
  res.json({ message: 'pong' })
})

expressApp.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`)
})
