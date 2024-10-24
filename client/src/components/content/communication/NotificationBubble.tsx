import { useListComponent } from 'src/toolbox/hooks.tsx'
import Notification from '../../../notifications/index.ts'
import Markdown, { MarkdownTheme } from '../general-layout/Markdown.tsx'
import { ButtonText } from '../user-controls/buttons/ButtonText.tsx'
import './NotificationBubble.scss'

// This will brand the app with the
// logo.
const NotificationBubble = (props: {
  notification: Notification
}): JSX.Element => {
  let Buttons = useListComponent(ButtonText, props.notification.buttons, 'text')

  let notification: Notification = props.notification
  let containerClassName: string = 'NotificationBubble'
  let buttonsClassName: string = 'Buttons'

  if (notification.expired) {
    containerClassName += ' Expired'
  }
  if (notification.dismissed) {
    containerClassName += ' Dismissed'
  }
  if (notification.buttons.length === 0) {
    buttonsClassName += 'Hidden'
  }

  return (
    <div className={containerClassName}>
      <div className='Message'>
        <Markdown
          theme={MarkdownTheme.ThemeSecondary}
          markdown={notification.message}
        />
      </div>
      <div className='Dismiss' onClick={() => notification.dismiss()}>
        x
      </div>
      <div className={buttonsClassName}>
        <Buttons />
      </div>
    </div>
  )
}

export default NotificationBubble
