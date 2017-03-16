import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Clock from './Clock'

storiesOf('ATOM - Clock', module)
  .add('with time', () => (
    <Clock />
  ))
  .add('with time in China', () => (
    <Clock timezone={'Asia/Shanghai'}/>
  ))

// https://github.com/dmfilipenko/timezones.json/blob/master/timezones.json