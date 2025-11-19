'use client'

import { Display } from '@/components/display'
import { Breadcrumbs } from '@kaynora/ui'

const BreadcrumbsDisplay = () => {
  return (
    <Display>
      <Breadcrumbs items={[
        { label: 'Home', action: '#' },
        { label: 'Components', action: '#' },
        { label: 'Core', action: '#' },
        { label: 'Breadcrumbs', action: '#' },
      ]} />
    </Display>
  )
}

const InternalDisplay = () => {
  return (
    <Display>
      <Breadcrumbs
        items={[
          { label: 'Home', action: '#' },
          { label: 'Movies', action: '#' },
          { label: 'Mulholland Drive', action: '#' },
        ]}
        internal={{
          typography: { color: 'primary' }
        } as any}
      />
    </Display>
  )
}

export {
  BreadcrumbsDisplay,
  InternalDisplay,
}
