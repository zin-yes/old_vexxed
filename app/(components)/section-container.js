import styles from './section-container.module.css'

export default function SectionContainer({ children })
{
    return <div className={styles.container}>{ children }</div>
}
