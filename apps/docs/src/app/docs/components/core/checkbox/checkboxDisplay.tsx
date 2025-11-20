'use client'

import { Display } from '@/components/display'
import { Checkbox, T } from '@kaynora/ui'
import { useState } from 'react'

const CheckboxDisplay = () => {
  return (
    <Display>
      <Checkbox name='checkbox'>
        <T>Checkbox</T>
      </Checkbox>
    </Display>
  )
}

const DisabledDisplay = () => {
  return (
    <Display>
      <Checkbox name='checkbox' disabled>
        <T>Checkbox</T>
      </Checkbox>
    </Display>
  )
}

export {
  CheckboxDisplay,
  DisabledDisplay,
}
