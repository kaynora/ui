import { vi, type Mock } from 'vitest'
import { render, type RenderResult } from '@testing-library/react'
import userEvent, { type UserEvent } from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { Button } from './Button'
import { Typography } from '../Typography'

describe('Button', () => {
  let user: UserEvent
  let component: RenderResult
  let buttonAction: Mock

  describe('with disabled=false', () => {
    beforeEach(() => {
      buttonAction = vi.fn()
      user = userEvent.setup()
      component = render(<ButtonTest onClick={buttonAction} />)
    })

    it('should have no accessibility violations', async () => {
      expect(await axe(component.container)).toHaveNoViolations()
    })

    it('should execute an action on Click', async () => {
      const content = component.getByText('Button content')

      await user.click(content)
      expect(buttonAction).toHaveBeenCalled()
    })

    it('should execute an action on Enter/Space', async () => {
      const button = component.getByText('Button content').parentElement!

      button.focus()
      expect(button).toHaveFocus()

      await user.keyboard('[Enter]')
      await user.keyboard('[Space]')

      expect(buttonAction).toHaveBeenCalledTimes(2)
    })
  })

  describe('with disabled=true', () => {
    beforeEach(() => {
      buttonAction = vi.fn()
      user = userEvent.setup()
      component = render(<ButtonTest onClick={buttonAction} disabled />)
    })

    it('should have no accessibility violations', async () => {
      expect(await axe(component.container)).toHaveNoViolations()
    })

    it('should not execute an action on Click', async () => {
      const content = component.getByText('Button content')

      await user.click(content)
      expect(buttonAction).not.toHaveBeenCalled()
    })

    it('should not execute an action on Enter/Space', async () => {
      const button = component.getByText('Button content').parentElement!

      button.focus()
      expect(button).not.toHaveFocus()

      await user.keyboard('[Enter]')
      await user.keyboard('[Space]')

      expect(buttonAction).not.toHaveBeenCalled()
    })
  })
})

const ButtonTest: React.FC<{onClick?: ((e: React.MouseEvent) => void), disabled?: boolean}> = ({
  onClick,
  disabled=false,
}) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      <Typography>Button content</Typography>
    </Button>
  )
}
