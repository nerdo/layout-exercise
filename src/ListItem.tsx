import { ReactNode } from 'react'
import styles from './sass/ListItem.module.scss'

export interface ListItemProps {
  imagePath?: string
  children: ReactNode | ReactNode[]
}

export const ListItem = (props: ListItemProps) => {
  const { children: content, imagePath } = props
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles['gutter-and-image']}>
          <div className={styles.gutter}></div>
          <div className={styles.image}>{imagePath && <img src={imagePath} />}</div>
        </div>
        <div className={styles.content}>
          <div className={styles.wrapper}>{content}</div>
        </div>
        <div className={styles.gutter}></div>
      </div>
    </div>
  )
}

export default ListItem
