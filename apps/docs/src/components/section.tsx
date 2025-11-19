'use client'

import { Layout } from '@kaynora/ui'

const Section = ({ children }: { children: React.ReactElement | React.ReactElement[] }) => {
  return (
    <Layout.Section internal={{
      root: {
        style: {
          display: 'flex',
          justifyContent: 'center',
        }
      }
    }}>
      <div style={{
        minWidth: '0',
        width: '800px',
        maxWidth: '800px',
      }}>
        {children}
      </div>
    </Layout.Section>
  )
}

export { Section }
