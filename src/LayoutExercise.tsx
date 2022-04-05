import Header from './Header'
import Hero from './Hero'
import styles from './sass/LayoutExercise.module.scss'
import List from './List'

export const LayoutExercise = () => {
  return (
  <div className={styles.root}>
    <Header />
    <Hero />
    <List />
  </div>
  )
}

export default LayoutExercise