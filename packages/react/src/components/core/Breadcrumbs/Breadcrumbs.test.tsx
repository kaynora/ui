import { render, type RenderResult } from '@testing-library/react'
import { axe } from 'vitest-axe'
import { Breadcrumbs } from './Breadcrumbs'

describe('Breadcrumbs', () => {
  let component: RenderResult

  beforeEach(() => {
    component = render(<BreadcrumbsTest href={'#'} />)
  })

  it('should have no accessibility violations', async () => {
    expect(await axe(component.container)).toHaveNoViolations()
  })

  it('should not render items with no href property as buttons', () => {
    const item = component.queryByRole('button', { name: 'Item 3' })

    expect(item).toBeNull()
  })
})

const BreadcrumbsTest: React.FC<{href?: string}> = ({ href }) => {
  return (
    <Breadcrumbs items={[
      { label: 'Item 1', href },
      { label: 'Item 2', href },
      { label: 'Item 3' },
    ]} />
  )
}
