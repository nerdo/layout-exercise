import ListItem from './ListItem'
import styles from './sass/List.module.scss'

export const List = () => {
  return (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <ListItem /> 
      <ListItem /> 
      <ListItem /> 
    </div>
  </div>
  )
}

export default List