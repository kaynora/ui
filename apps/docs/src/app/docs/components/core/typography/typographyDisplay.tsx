'use client'

import { Display } from '@/components/display'
import { T, TypographyDefaultsProvider } from '@kaynora/ui'

const TypographyDisplay = () => {
  return (
    <Display>
      <div style={{ textAlign: 'left' }}>
        <T type='h1'>Heading 1</T>
        <T type='h2'>Heading 2</T>
        <T type='h3'>Heading 3</T>
        <T type='h4'>Heading 4</T>
        <T type='p'>This is paragraph text demonstrating the Typography component.</T>
      </div>
    </Display>
  )
}

const SizesDisplay = () => {
  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '15px',
      }}>
        <T size='xs'>Hello world!</T>
        <T size='s'>Hello world!</T>
        <T size='m'>Hello world!</T>
        <T size='l'>Hello world!</T>
        <T size='xl'>Hello world!</T>
      </div>
    </Display>
  )
}

export {
  TypographyDisplay,
  SizesDisplay,
}
