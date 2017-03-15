import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Counter from './Counter'

storiesOf('MOLECULE - Counter', module)
  .add('simple counter', () => (
    <Counter />
  ))
// TODO: two versions: state vs props

