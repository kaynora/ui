'use client'

import { Display } from '@/components/display'
import { Slider, T } from '@kaynora/ui'
import { useState } from 'react'

const SliderDisplay = () => {
  return (
    <Display>
      <Slider
        name='volume'
        minValue={0}
        maxValue={100}
        defaultValue={50}
      >
        <T>Volume</T>
      </Slider>
    </Display>
  )
}

const ControlledDisplay = () => {
  const [value, setValue] = useState(30)
  return (
    <Display>
      <Slider
        name='controlled'
        minValue={0}
        maxValue={100}
        value={value}
        onChange={setValue}
      >
        <T>Value: {value}</T>
      </Slider>
    </Display>
  )
}

const StepDisplay = () => {
  return (
    <Display>
      <Slider
        name='step'
        minValue={0}
        maxValue={100}
        step={10}
        defaultValue={20}
      >
        <T>Step 10</T>
      </Slider>
    </Display>
  )
}

export {
  SliderDisplay,
  ControlledDisplay,
  StepDisplay,
}
