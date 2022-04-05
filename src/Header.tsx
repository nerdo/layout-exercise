import styles from './sass/Header.module.scss'

export const Header = () => {
  return (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <img src='https://picsum.photos/2000/600' />
    </div>
  </div>
  )
}

export default Header