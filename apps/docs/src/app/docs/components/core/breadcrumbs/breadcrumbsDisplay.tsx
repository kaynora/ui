'use client'

import { Display } from '@/components/display'
import { Breadcrumbs } from '@kaynora/ui'

const BreadcrumbsDisplay = () => {
  return (
    <Display>
      <Breadcrumbs items={[
        { label: 'Home', href: '#' },
        { label: 'Components', href: '#' },
        { label: 'Core', href: '#' },
        { label: 'Breadcrumbs', href: '#' },
      ]} />
    </Display>
  )
}

const InternalDisplay = () => {
  return (
    <Display>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '#' },
          { label: 'Movies', href: '#' },
          { label: 'Mulholland Drive', href: '#' },
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
