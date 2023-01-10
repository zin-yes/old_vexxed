import Link from 'next/link'
import Image from 'next/image'

import Card from './card'

import styles from './services.module.css'

export default function ServicesSection({ content, links })
{
    return <div className={styles.container}>
        <Card title={"Website Design and Development"} />
        <Card title={"Conversion Optimization"} />
        <Card title={"Search Engine Optimization"} />
    </div>
}