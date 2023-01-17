import styles from './section-vsplit.module.css'

export default function SectionVerticalSplit({ children })
{
    return <div className={styles.container}>{ children }</div>
}
