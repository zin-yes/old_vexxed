import styles from './highlighted-text.module.css'

export default function HighlightedText({ children })
{
    return <span className={styles.container}>{ children }</span>
}