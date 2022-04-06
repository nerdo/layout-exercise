import styles from './sass/Header.module.scss'

export const Header = () => {
    return (
        <div className={styles.root}>
            <div
                className={styles.wrapper}
                style={{
                    backgroundImage:
                        'url(https://picsum.photos/id/1060/2000/600)',
                }}
            >
                <h1>Header Header Header</h1>
            </div>
        </div>
    )
}

export default Header
