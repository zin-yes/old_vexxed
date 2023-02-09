import styles from './experience-card.module.css'

export function Header({ title, icon }:
{
  title: string,
  icon: string    
})
{
  return <div>
      <div><h2>{ title }</h2></div>
    </div>
}

export default function Card({ title, icon }:
{
  title: string,
  icon: string    
})
{
  return <div className={styles.container}>
      <div>
        <Header 
          title={title}
          icon={icon}
        />
      </div>
    </div>
}
