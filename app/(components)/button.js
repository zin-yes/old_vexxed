import styles from './button.module.css'

export function PrimaryButton({ title })
{
    return <button className={styles.primary_button}>{ title }</button>
}

export function SecondaryButton({ title })
{
    return <button className={styles.secondary_button}>{ title }</button>
}
