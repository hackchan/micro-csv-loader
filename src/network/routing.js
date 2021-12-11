import { Router } from 'express'

import routerCSV from '../api/components/csv/router'

const routers = (app) => {
  const router = Router()
  app.use('/api/v1', router)
  router.use('/csv', routerCSV)
}

export default routers
