'use client'

import { Display } from '@/components/display'
import { Tabs, T } from '@kaynora/ui'

const TabsDisplay = () => {
  return (
    <Display>
      <Tabs defaultValue='one'>
        <Tabs.Tab value='one' label='One'><T>Content one</T></Tabs.Tab>
        <Tabs.Tab value='two' label='Two'><T>Content two</T></Tabs.Tab>
      </Tabs>
    </Display>
  )
}

const NavigationDisplay = () => {
  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        gap: '80px',
      }}>
        <Tabs navigation='focus' defaultValue='a'>
          <Tabs.Tab value='a' label='A'><T>Focus nav</T></Tabs.Tab>
          <Tabs.Tab value='b' label='B'><T>Focus nav</T></Tabs.Tab>
        </Tabs>

        <Tabs navigation='select' defaultValue='a'>
          <Tabs.Tab value='a' label='A'><T>Select nav</T></Tabs.Tab>
          <Tabs.Tab value='b' label='B'><T>Select nav</T></Tabs.Tab>
        </Tabs>
      </div>
    </Display>
  )
}

const SizesDisplay = () => {
  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        gap: '80px',
      }}>
        <Tabs size='s' defaultValue='one'>
          <Tabs.Tab value='one' label='One'><T>Small</T></Tabs.Tab>
          <Tabs.Tab value='two' label='Two'><T>Small</T></Tabs.Tab>
        </Tabs>

        <Tabs size='m' defaultValue='one'>
          <Tabs.Tab value='one' label='One'><T>Medium</T></Tabs.Tab>
          <Tabs.Tab value='two' label='Two'><T>Medium</T></Tabs.Tab>
        </Tabs>

        <Tabs size='l' defaultValue='one'>
          <Tabs.Tab value='one' label='One'><T>Large</T></Tabs.Tab>
          <Tabs.Tab value='two' label='Two'><T>Large</T></Tabs.Tab>
        </Tabs>
      </div>
    </Display>
  )
}

export {
  TabsDisplay,
  NavigationDisplay,
  SizesDisplay,
}
