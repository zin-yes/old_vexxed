import styles from './page-indicator.module.css'

export default function PageIndicator({ pages, current_index })
{
    return <div className={styles.container}>
        {
            pages.map((item, index) =>
            {
                if(current_index === index)
                {
                    return <div className={styles.filledBubble} key={index} />
                }

                return <div className={styles.emptyBubble} key={index} />
            })
        }
    </div>
}