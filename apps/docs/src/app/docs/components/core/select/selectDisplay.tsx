'use client'

import { Display } from '@/components/display'
import { Select, T } from '@kaynora/ui'
import { useState } from 'react'

const SelectDisplay = () => {
  return (
    <Display>
      <Select
        label='Choose option'
        name='fruit'
        items={[
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Orange', value: 'orange' },
        ]}
      />
    </Display>
  )
}

const TypesDisplay = () => {
  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '20px',
      }}>
        <Select
          label='Single'
          name='s'
          items={[
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ]}
        />

        <Select
          label='Multiple'
          name='m'
          type='multiple'
          items={[
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
          ]}
        />

        <Select
          label='Search'
          name='q'
          type='search'
          items={[
            { label: 'Apple', value: 'apple' },
            { label: 'Apricot', value: 'apricot' },
            { label: 'Banana', value: 'banana' },
          ]}
        />
      </div>
    </Display>
  )
}

const WidthDisplay = () => {
  return (
    <Display>
      <div style={{
        display: 'flex',
        gap: '20px',
        width: '100%',
      }}>
        <Select
          label='Auto'
          name='auto'
          width='auto'
          items={[
            { label: 'One', value: '1' },
            { label: 'Two', value: '2' },
          ]}
        />

        <Select
          label='Full'
          name='full'
          width='full'
          items={[
            { label: 'One', value: '1' },
            { label: 'Two', value: '2' },
          ]}
        />
      </div>
    </Display>
  )
}

export {
  SelectDisplay,
  TypesDisplay,
  WidthDisplay,
}
