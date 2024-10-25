import fs from 'fs'
import routerMap_files from 'metis/server/api/v1/files.ts'
import routerMap_info from 'metis/server/api/v1/info.ts'
import routerMap_logins from 'metis/server/api/v1/logins.ts'
import routerMap_missions from 'metis/server/api/v1/missions.ts'
import routerMap_sessions from 'metis/server/api/v1/sessions.ts'
import routerMap_targetEnvironments from 'metis/server/api/v1/target-environments.ts'
import routerMap_users from 'metis/server/api/v1/users.ts'
import MetisRouter from 'metis/server/http/router.ts'
import MetisServer, { IMetisServerOptions } from 'metis/server/index.ts'
import routerMap_tests from './api/v1/routes-test.ts'

const environmentFilePath = './environment-test.json'
let serverOptions: IMetisServerOptions = {}

console.log('Reading enviroment-test.json file...')

// If the environment file exists, read it.
if (fs.existsSync(environmentFilePath)) {
  let environmentData: any = fs.readFileSync(environmentFilePath, 'utf8')

  // Parse data to JSON.
  environmentData = JSON.parse(environmentData)

  // Join environment data with server options.
  serverOptions = { ...environmentData }
} else {
  console.error(
    'Environment file not found. Continuing with default options...',
  )
}

console.log('Starting METIS Test Server...')

// Create METIS server.
export let testServer: MetisServer = new MetisServer(serverOptions)

// Add routers.
testServer.addRouter(new MetisRouter('/api/v1/info/', routerMap_info))
testServer.addRouter(new MetisRouter('/api/v1/users/', routerMap_users))
testServer.addRouter(new MetisRouter('/api/v1/missions/', routerMap_missions))
testServer.addRouter(new MetisRouter('/api/v1/sessions/', routerMap_sessions))
testServer.addRouter(new MetisRouter('/api/v1/files/', routerMap_files))
testServer.addRouter(
  new MetisRouter('/api/v1/target-environments/', routerMap_targetEnvironments),
)
testServer.addRouter(new MetisRouter('/api/v1/logins/', routerMap_logins))
testServer.addRouter(new MetisRouter('/api/v1/tests/', routerMap_tests))

export default { testServer }
