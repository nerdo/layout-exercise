import styles from './sass/Hero.module.scss'

export const Hero = () => {
    return (
        <div className={styles.root}>
            <div
                className={styles.wrapper}
                style={{
                    backgroundImage:
                        'url(https://picsum.photos/id/42/1024/200)',
                }}
            >
                <h2>Hero Text Here</h2>
            </div>
        </div>
    )
}

export default Hero
