'use client'

import { Display } from '@/components/display'
import { Button, T, Burger } from '@kaynora/ui'
import { useState } from 'react'

const BurgerDisplay = () => {
  const [state, setState] = useState(false)

  return (
    <Display>
      <div style={{
        display: 'flex',
        flexFlow: 'row nowrap',
        gap: '16px',
        alignItems: 'center',
      }}>
        <Burger state={state} />
        <Button onClick={() => setState(!state)} surface='hollow'>
          <T>Toggle state</T>
        </Button>
      </div>
    </Display>
  )
}

export { BurgerDisplay }
