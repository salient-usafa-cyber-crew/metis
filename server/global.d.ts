import RolesFile from 'metis/sessions/members/roles.ts'
import ForceArgFile from 'metis/target-environments/args/force-arg.ts'
import NodeArgFile from 'metis/target-environments/args/node-arg.ts'
import AccessesFile from 'metis/users/accesses.ts'
import UserFile from 'metis/users/index.ts'
import PermissionsFile from 'metis/users/permissions.ts'

/**
 * Represents the role of a member in a session.
 */
export class MemberRole extends RolesFile.default {}

/**
 * The force argument type for a target.
 */
export class ForceArg extends ForceArgFile.default {}

/**
 * The node argument type for a target.
 */
export class NodeArg extends NodeArgFile.default {}

/**
 * Represents any permission that can be assigned to a user.
 */
export class UserPermission extends PermissionsFile.default {}

/**
 * Represents the access of a user using METIS.
 */
export class UserAccess extends AccessesFile.default {}

/**
 * Represents a user in the METIS system.
 */
export class User extends UserFile.default {}
