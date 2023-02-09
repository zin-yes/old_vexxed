import Card from './experience-card'

import styles from './experience.module.css'

export function Header({ heading, subheading }:
{
  heading: string,
  subheading: string    
})
{
  return <div className={styles.header}>
        <h3>
          {
            subheading.split(" ").map((item, index) =>
            {
              if(item == "VEXXED")
                return <span key={index}>{ item + " " }</span>
          
              return item + " ";
            })
          }
        </h3>
        <h2>{ heading }</h2>
    </div>
}

export function CardContainer({ children }:
{
  children: React.ReactNode    
})
{
  return <div className={styles.card_container}>
      { children }
    </div>
}

export default function Section()
{
  return <div className={styles.container}>
      <Header 
        subheading={"THE VEXXED EXPERIENCE"}
        heading={"This is why you should choose us"}
      />
      <CardContainer>
        <Card />
      </CardContainer>
    </div>
}