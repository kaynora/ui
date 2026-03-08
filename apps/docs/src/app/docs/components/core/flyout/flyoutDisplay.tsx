'use client'

import { Display } from '@/components/display'
import { Flyout, Button, T } from '@kaynora/ui'
import { useState } from 'react'

const FlyoutDisplay = () => {
  return (
    <Display>
      <Flyout label='Products'>
        <div style={{
          display: 'flex',
          flexFlow: 'column',
          padding: '20px',
          gap: '20px',
        }}>
          <T color='dimmed' weight='500' size='s'>POWERFUL ANALYTICS</T>

          <div style={{
            display: 'flex',
            flexFlow: 'row nowrap',
            gap: '20px',
          }}>
            <div>
              <Button surface='hollow'><T>Dashboard</T></Button>
              <Button surface='hollow'><T>Analytics</T></Button>
              <Button surface='hollow'><T>Security & Privacy</T></Button>
            </div>

            <div>
              <Button surface='hollow'><T>Data Management</T></Button>
              <Button surface='hollow'><T>Monitoring</T></Button>
            </div>
          </div>
        </div>
      </Flyout>
    </Display>
  )
}

const ArrangementDisplay = () => {
  return (
    <Display>
      <div style={{
        display: 'flex',
        gap: '40px',
      }}>
        <Flyout label='Vertical' arrangement='vertical'>
          <Button surface='hollow'><T>Option 1</T></Button>
          <Button surface='hollow'><T>Option 2</T></Button>
        </Flyout>
        <Flyout label='Horizontal' arrangement='horizontal'>
          <Button surface='hollow'><T>Option 1</T></Button>
          <Button surface='hollow'><T>Option 2</T></Button>
        </Flyout>
      </div>
    </Display>
  )
}

const ControlledDisplay = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Display>
      <Flyout label='Menu' isOpen={isOpen} onOpenChange={setIsOpen}>
        <Button surface='hollow'><T>Edit</T></Button>
        <Button surface='hollow'><T>Delete</T></Button>
      </Flyout>
    </Display>
  )
}

export {
  FlyoutDisplay,
  ArrangementDisplay,
  ControlledDisplay,
}
