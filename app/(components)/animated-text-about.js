import styles from './animated-text-about.module.css'

export default function AnimatedTextAbout({ children })
{
    return <span className={styles.container}>{ children }</span>
}