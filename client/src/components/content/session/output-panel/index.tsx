import { useEffect, useState } from 'react'
import ClientMissionForce from 'src/missions/forces/index.ts'
import ClientMissionNode from 'src/missions/nodes/index.ts'
import { useEventListener } from 'src/toolbox/hooks.tsx'
import ExecutionStarted from './ExecutionStarted.tsx'
import './index.scss'
import Output from './Output.tsx'

/**
 * A panel for displaying messages in the session.
 */
export default function OutputPanel({
  force,
  selectNode,
}: TOutputPanel_P): JSX.Element {
  /* -- STATE -- */
  const [outputs, setOutputs] = useState<ClientMissionForce['outputs']>(
    force.outputs,
  )

  /* -- EFFECTS -- */

  // Listen for new outputs.
  useEventListener(force, 'output', () => {
    setOutputs([...force.outputs])
  })

  // Update outputs when force changes.
  useEffect(() => setOutputs(force.outputs), [force.outputs])

  /* -- RENDER -- */
  return (
    <div className='OutputPanel'>
      <div className='BorderBox'>
        {outputs.map((output) => {
          switch (output.key) {
            case 'execution-started':
              return (
                <ExecutionStarted
                  output={output}
                  selectNode={selectNode}
                  key={`output-${output._id}_time-${output.time}`}
                />
              )
            default:
              return (
                <Output
                  output={output}
                  selectNode={selectNode}
                  key={`output-${output._id}_time-${output.time}`}
                />
              )
          }
        })}
      </div>
    </div>
  )
}

/* ---------------------------- TYPES FOR OUTPUT PANEL ---------------------------- */

/**
 * Prop type for `OutputPanel`.
 */
type TOutputPanel_P = {
  /**
   * The force to render the message(s) for.
   */
  force: ClientMissionForce
  /**
   * Selects a node.
   * @param node The node to select.
   */
  selectNode: (node: ClientMissionNode | null) => void
}
