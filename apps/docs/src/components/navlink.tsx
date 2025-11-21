import Link from 'next/link'
import { Button, type ButtonProps } from '@kaynora/ui'

interface NavLinkProps extends ButtonProps {
  display?: 'inline' | 'block'
  action?: never
  href: string
  internal?: {
    root?: React.HTMLAttributes<HTMLAnchorElement> & { ref?: React.Ref<HTMLAnchorElement> }
    button?: ButtonProps
  }
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  display='block',
  width='full',
  href,
  surface,
  internal,
}) => {
  return (
    <Link
      href={href}
      tabIndex={-1}
      style={{
        display,
        width: width === 'auto' ? 'fit-content' : 'auto'
      }}
      {...internal?.root}
    >
      <Button
        surface={surface}
        {...internal?.button}
      >
        {children}
      </Button>
    </Link>
  )
}

export { NavLink }
