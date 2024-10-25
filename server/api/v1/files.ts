import express, { Router } from 'express'
import { TMetisRouterMap } from 'metis/server/http/router.ts'
import MetisServer from 'metis/server/index.ts'
import { auth } from 'metis/server/middleware/users.ts'

const routerMap: TMetisRouterMap = (
  router: Router,
  server: MetisServer,
  done: () => void,
) => {
  /* ---------------------------- READ ------------------------------ */

  /* ---------------------------- ROUTES ---------------------------- */

  router.use('/', auth({}), express.static(server.fileStore.directory))
  done()
}

export default routerMap
