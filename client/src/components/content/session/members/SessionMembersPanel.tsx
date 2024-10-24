import SessionClient from 'src/sessions/index.ts'
import SessionMembers from './SessionMembers.tsx'
import './SessionMembersPanel.scss'

/**
 * A panel displaying the members in the session.
 */
export default function SessionMembersPanel({
  session,
}: TSessionMembersPanel_P): JSX.Element | null {
  /* -- RENDER -- */

  return (
    <div className='SessionMembersPanel'>
      <div className='BorderBox'>
        <SessionMembers session={session} />
      </div>
    </div>
  )
}

/**
 * The props for `SessionMembersPanel` component.
 */
export type TSessionMembersPanel_P = {
  /**
   * The session client with the members to display.
   */
  session: SessionClient
}
