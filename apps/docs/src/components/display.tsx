const Display = ({ children }: {children: React.ReactNode}) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px 0',
      padding: '40px 120px',
      width: '100%',
      border: '1px solid var(--gray-2)',
      borderRadius: 'var(--radius)',
      backgroundColor: 'var(--background)',
    }}>
      {children}
    </div>
  )
}

export { Display }
