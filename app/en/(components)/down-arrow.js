import Image from 'next/image'

import styles from './down-arrow.module.css'

import en_US from '../en_US.json'

export default function DownArrow()
{
    return <a>
        <div className={styles.container}>
            <Image 
                alt={en_US.modules.down_arrow.alt}
                src={en_US.modules.down_arrow.url}
                width={30}
                height={20}
            />
        </div>
    </a>
}