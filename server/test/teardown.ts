import { expect } from 'chai'
import MissionModel from '../database/models/missions.ts'
import UserModel from '../database/models/users.ts'
import { testLogger } from '../logging/index.ts'

/**
 * Deletes all the data that was created from the tests.
 */
export function Teardown(): void {
  return after(async function () {
    try {
      // Deletes all missions in the test database
      let deletedMissions = await MissionModel.deleteMany({}).exec()
      expect(deletedMissions.acknowledged).to.equal(true)

      // Deletes all users in the test database
      let deletedUsers = await UserModel.deleteMany({}).exec()
      expect(deletedUsers.acknowledged).to.equal(true)
    } catch (error) {
      testLogger.error(error)
      throw error
    }
  })
}
