import { TCommonTargetEnvJson } from 'metis/target-environments/index.ts'
import { TCommonTargetJson } from 'metis/target-environments/targets.ts'

/**
 * Represents a target environment.
 */
export type TTargetEnv = Omit<TCommonTargetEnvJson, 'targets'>

/**
 * Represents a target.
 */
export type TTarget = TCommonTargetJson
