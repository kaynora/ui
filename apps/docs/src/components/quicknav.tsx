import styles from './quicknav.module.css'
import { useEffect, useState } from 'react'
import { NavLink } from './navlink'
import { T } from '@kaynora/ui'
import slugify from '@/utils/slugify'

const QuickNav = ({ pathname }: {pathname: string}) => {
  const [links, setLinks] = useState<HTMLHeadingElement[]>([])
  const label = 'On this page'

  useEffect(() => {
    const headings = document.querySelectorAll('h2, h3')
    const fragments = Array.from(headings).filter(el => (
      el.textContent !== label && !el.textContent.includes('Heading')
    )) as HTMLHeadingElement[]

    setLinks(fragments)
  }, [pathname])

  return (
    <div className={styles['quicknav-track']}>
      <nav className={styles['quicknav-content']}>
        <T
          type='h2'
          size='xs'
          weight='500'
          internal={{
            root: {style: {
              marginBottom: '10px',
            }}
          }}
        >
          On this page
        </T>

        {
          links.map((link, index) => (
            <NavLink
              key={index}
              href={`#${slugify(link.textContent)}`}
              surface='text'
              width='auto'
              display='block'
              internal={{ root: {
                style: {
                  width: 'fit-content',
                  marginLeft: link.tagName === 'H3' ? '20px' : 0,
                }
              }}}
            >
              <T color='dimmed' size='s'>
                {link.textContent}
              </T>
            </NavLink>
          ))
        }
      </nav>
    </div>
  )
}

export { QuickNav }
