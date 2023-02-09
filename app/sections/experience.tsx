import styles from './experience.module.css'

export function Footer({ heading, subheading }:
{
  heading: string,
  subheading: string    
})
{
  return <div className={styles.footer}>
      <div>
        <h3>{ subheading }</h3>
        <h2>
          {
            heading.split(" ").map((item, index) =>
            {
              if(item == "VEXXED")
                return <span key={index}>{ item + " " }</span>
          
              return item + " ";
            })
          }
        </h2>
      </div>
    </div>
}

export default function Section()
{
  return <div className={styles.container}>
      <h3></h3>
      <h2></h2>
    </div>
}