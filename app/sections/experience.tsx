import Card from './experience-card'

import styles from './experience.module.css'

import refund_svg from './full-refund-policy.json'
import revisions_svg from './unlimited-revisions.json'
import delivery_svg from './14-day-delivery.json'
import maintenance_svg from './maintenance.json'

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
        <Card 
          header=
          {
            {
              title: "Full refund policy",
              icon:
              {
                path: refund_svg.path,
                alt: "A pictographic depiction of a full refund policy."
              }
            }
          }
          description=
          {
            [
              "If you are not happy with the service we are providing, get a full refund at any point, no questions asked."
            ]
          }
        />
        <Card 
          header=
          {
            {
              title: "Unlimited revisions",
              icon:
              {
                path: revisions_svg.path,
                alt: "A brush illustration used as a representation for revisions."
              }
            }
          }
          description=
          {
            [
              "If you're not happy with certain details, don't worry!",
              "We will keep making changes until you like what you've got."
            ]
          }
        />
        <Card 
          header=
          {
            {
              title: "14-day delivery",
              icon:
              {
                path: delivery_svg.path,
                alt: "A lightning bolt representing fast delivery."
              }
            }
          }
          description=
          {
            [
              "A high-quality website shouldn’t take you months. That’s why we have a lightning fast 14 day delivery guarantee.",
              "(revisions not included)"
            ]
          }
        />
        <Card 
          header=
          {
            {
              title: "Maintenance",
              icon:
              {
                path: maintenance_svg.path,
                alt: "Gears with star particles representing maintenance."
              }
            }
          }
          description=
          {
            [
              "Our affordable hosting subscription includes maintenance.",
              "If you want to update your content or make any changes to your website in the future, we’ve got you covered."
            ]
          }
        />
      </CardContainer>
    </div>
}