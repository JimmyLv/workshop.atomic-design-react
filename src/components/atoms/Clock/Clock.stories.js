import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Clock from './Clock'

storiesOf('ATOM - Clock', module)
  .add('with time', () => (
    <Clock />
  ))
