import Animate from '../animate'
import styles from './section-container.module.css'

export default function SectionContainer({ children })
{
    return <div className={styles.container}>{ children.map((item, index) => { return <Animate key={index}>{item}</Animate>} ) }</div>
}
