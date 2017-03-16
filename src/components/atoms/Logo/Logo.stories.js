import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Logo from './Logo'

storiesOf('ATOM - Logo', module)
  .add('with icon', () => (
    <Logo />
  ))

//TODO: changed to with primary default dashed danger
