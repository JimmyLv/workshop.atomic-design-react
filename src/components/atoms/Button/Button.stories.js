import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Button from './Button'

storiesOf('ATOM - Button', module)
    .add('with primary', () => (
        <Button type="primary">Primary</Button>
    ))
    .add('with danger and alert', () => (
        <Button type="danger" onClick={(text) => alert(text)}>Danger</Button>
    ))
    .add('with default', () => (
        <Button>Default</Button>
    ))

//TODO: changed to with primary default dashed danger
