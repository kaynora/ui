'use client'

import styles from './reference.module.css'
import { T } from '@kaynora/ui'
import { CodeBlock } from './markdown'

const Reference = ({ rows }: {rows: string[][]}) => {
  return (
    <div style={{
      border: '1px solid var(--gray-2)',
      borderRadius: 'var(--radius)',
      overflowX: 'auto',
    }}>
      <table className={styles['table']}>
        <thead>
          <tr>
            <th><T>Prop</T></th>
            <th><T>Type</T></th>
            <th><T>Default</T></th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((value, j) => (
                <td key={j}>
                  <CodeBlock
                    className={j === 1 ? 'jsx' : undefined}
                  >
                    {value}
                  </CodeBlock>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export { Reference }
