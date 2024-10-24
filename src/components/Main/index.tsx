import styles from './styles.module.css'

const Main = ({
  title = 'Typescript template',
  description = 'TypeScript, ReactJS, NextJS e CSS modules'
}) => (
  <main className={styles.wrapper}>
    <h1 className={styles.title}>{title}</h1>
    <h2 className={styles.description}>{description}</h2>
    <img
      className={styles.illustration}
      src="/img/hero-illustration.svg"
      alt="A developer"
    />
  </main>
)

export default Main
