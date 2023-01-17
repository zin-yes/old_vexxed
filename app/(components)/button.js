import Link from 'next/link'

import styles from './button.module.css'

export function PrimaryButton({ title, href })
{
    return <Link href={href}><button className={styles.primary_button}>{ title }</button></Link> 
}

export function SecondaryButton({ title, href })
{
    return <Link href={href}><button className={styles.secondary_button}>{ title }</button></Link> 
}
