import styles from './sass/Hero.module.scss'

export const Hero = () => {
  return (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <img src='https://picsum.photos/id/42/1024/200' />
    </div>
  </div>
  )
}

export default Hero