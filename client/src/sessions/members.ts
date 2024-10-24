import { TCommonMissionForce } from 'metis/shared/missions/forces/index.ts'
import SessionMember from 'metis/shared/sessions/members/index.ts'
import MemberRole, {
  TMemberRoleId,
} from 'metis/shared/sessions/members/roles.ts'
import { TCommonUser } from 'metis/shared/users/index.ts'
import { TClientMissionTypes } from 'src/missions/index.ts'
import ClientUser from 'src/users/index.ts'
import SessionClient from './index.ts'

/**
 * Client-side representation of a session member.
 */
export default class ClientSessionMember extends SessionMember<TClientMissionTypes> {
  public constructor(
    _id: TCommonUser['_id'],
    user: ClientUser,
    role: MemberRole | TMemberRoleId,
    forceId: TCommonMissionForce['_id'] | null,
    session: SessionClient,
  ) {
    if (typeof role === 'string') role = MemberRole.get(role)
    super(_id, user, role, forceId, session)
  }
}
