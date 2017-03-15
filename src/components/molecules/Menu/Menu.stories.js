import { storiesOf } from '@kadira/storybook'
import Menu from './Menu'

storiesOf('MOLECULE - Menu', module)
  .add('with text', () => (
    <Menu items={['menu1', 'menu2', 'menu3']} />
  ))
