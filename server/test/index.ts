import * as chai from 'chai'
import chaiHttp, { request } from 'chai-http'
import UserAccess, { TUserAccessId } from '../../shared/users/accesses.ts'
import { testServer } from './server.ts'
import { Setup } from './setup.ts'
import { MetisFiles } from './suites/MetisFiles.ts'
import { MissionApiRoutes } from './suites/MissionApiRoutes.ts'
import { MissionSchema } from './suites/MissionSchema.ts'
import { RequestBody } from './suites/RequestBody.ts'
import { RequestParams } from './suites/RequestParams.ts'
import { RequestQuery } from './suites/RequestQuery.ts'
import { UserApiRoutes } from './suites/UserApiRoutes.ts'
import { UserSchema } from './suites/UserSchema.ts'
import { Teardown } from './teardown.ts'

// Use chai-http
chai.use(chaiHttp)

// Global variables
export const permittedUserAccess: TUserAccessId =
  UserAccess.default.AVAILABLE_ACCESSES.admin._id
export let agent = request.agent(testServer.expressApp)

// run tests
Setup()
MetisFiles()
MissionApiRoutes()
MissionSchema()
RequestBody()
RequestQuery()
RequestParams()
UserApiRoutes()
UserSchema()
Teardown()
