import styles from './PageTemplate.css'

export default ({ header, hero, children, footer, ...props }) => (
  <div className={styles['wrapper']} {...props}>
    <header className={styles['header']}>
      {header || 'Header'}
    </header>
    {hero && <section>{hero}</section>}
    <section className={styles['main']}>
      {children || 'Content'}
    </section>
    <footer className={styles['footer']}>
      {footer || 'Footer'}
    </footer>
  </div>
)