import Footer from '../content/general-layout/Footer.tsx'
import Navigation, {
  TNavigation,
} from '../content/general-layout/Navigation.tsx'
import AuthPage from './AuthPage.tsx'
import ChangelogPage from './ChangelogPage.tsx'
import HomePage from './HomePage.tsx'
import LaunchPage from './LaunchPage.tsx'
import LobbyPage from './LobbyPage.tsx'
import MissionPage from './MissionPage.tsx'
import SessionConfigPage from './SessionConfigPage.tsx'
import SessionPage from './SessionPage.tsx'
import UserPage from './UserPage.tsx'
import UserResetPage from './UserResetPage.tsx'
import './index.scss'

/* -- constants -- */

/**
 * Registry for available pages in METIS.
 */
export const PAGE_REGISTRY = {
  BlankPage: () => null,
  AuthPage,
  HomePage,
  LaunchPage,
  LobbyPage,
  SessionConfigPage,
  SessionPage,
  UserResetPage,
  MissionPage,
  UserPage,
  ChangelogPage,
}

/* -- components -- */

/**
 * Wraps a page component with the default layout.
 */
export function DefaultLayout({
  children,
  navigation,
  includeFooter = true,
}: TDefaultLayout_P): JSX.Element | null {
  // Render.
  return (
    <>
      <Navigation {...navigation} />
      <div className='Content'>{children}</div>
      {includeFooter ? <Footer /> : null}
    </>
  )
}

/* -- types -- */

/**
 * Props that every page accepts. Extend this to include more.
 */
export type TPage_P = {}

/**
 * Props for `DefaultLayout` component.
 */
export type TDefaultLayout_P = {
  /**
   * The nested JSX displayed in the layout.
   * @default undefined
   */
  children?: React.ReactNode
  /**
   * Props passed to navigation component.
   */
  navigation: TNavigation
  /**
   * Whether to include the footer.
   * @default true
   */
  includeFooter?: boolean
}
