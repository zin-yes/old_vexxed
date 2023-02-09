import Link from 'next/link'
import Image from 'next/image'

import styles from './hero.module.css'

export interface TitleType 
{
  content: string,
  highlight: string[]    
};

export interface ButtonType
{
  title: string,
  link:
  {
    url: string,
    target: string    
  }    
};

export function Heading({ title }:
{
  title: TitleType    
})
{
  return <div className={styles.heading}>
      <h1>
        {
          title.content.split(" ").map((item, index) =>
          {
            if(title.highlight.includes(item))
              return <span key={index}>{ item +  " " }</span>
            
            return item + " ";
          })
        }
      </h1>
    </div>
}

export function Description({ description }:
{
  description: string
})
{
  return <div className={styles.description}>
      <p>{ description }</p>
    </div>
}

export function Header({ title, description }:
{
  title: TitleType,
  description: string    
})
{
  return <div className={styles.header}>
      <header>
        <Heading title={title} />
        <Description description={description} />
      </header>
    </div>
}

export function Mascot()
{
  return <div className={styles.mascot}>
      <Image
        src={"/mascot.svg"}
        width={300}
        height={320}
        alt={"VEXXED mascot."}
      />
    </div>
}

export function Buttons({ primary, secondary }:
{
  primary: ButtonType,
  secondary: ButtonType    
})
{
  return <div className={styles.buttons}>
      <Link href={primary.link.url} target={primary.link.target}>
        <button className={styles.primary_button}>
          { primary.title }
        </button>
      </Link>
      <Link href={secondary.link.url} target={secondary.link.target}>
        <button className={styles.secondary_button}>
          { secondary.title }
        </button>
      </Link>
    </div>
}

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
  const header =
  {
    title: 
    {
      content: "High-quality web development and design in Linköping",
      highlight: [ "development", "design" ]
    },
    description: "We help professionals, solo entrepreneurs, and small businesses to reach new heights and make their mark online."
  };

  const primary =
  {
    title: "BOOK A MEETING",
    link:
    {
      url: "https://calendly.com/vexxed-digital/conversation",
      target: "_blank"
    }
  };
  
  const secondary =
  {
    title: "VIEW OUR WORK",
    link:
    {
      url: "/#work",
      target: ""
    }
  };

  return <div className={styles.container}>
      <div className={styles.spacer}>
        <div className={styles.content_container}>
          <Header 
            title={header.title}
            description={header.description}
          />
          <Mascot />
        </div>
        <Buttons 
          primary={primary}
          secondary={secondary}
        />
      </div>
      <Footer 
        subheading={"WHAT WE DO BEST"}
        heading={"We at VEXXED create beautiful, reliable, and affordable web experiences for small local businesses"}
      />
    </div>
}