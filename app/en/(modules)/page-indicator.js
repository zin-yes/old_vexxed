import styles from './page-indicator.module.css'

export default function PageIndicator({ pages, current_index })
{
    return <div className={styles.container}>
        {
            pages.map(() =>
            {
                if(current_index === index)
                {
                    return <div className={styles.filledBubble} />
                }

                return <div className={styles.emptyBubble} />
            })
        }
    </div>
}