import Image from 'next/image'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] })

import React from 'react'

import styles from './hero.module.css'

export function Section({ children }:
{
  children: React.ReactNode
})
{
  return <section>{ children }</section>
}

export function Header({ title, description, highlight }:
{
  title: String,
  description: String,
  highlight: String[]
})
{
  return <header>
      <h1>
        { 
          title.split(" ").map((item, index) => 
          {
            if (highlight.includes(item))
              return <span key={index}>{ item + " " }</span>

            return item + " ";  
          }) 
        }
      </h1>
      <p>{ description }</p>
    </header>
}

export function Buttons({ primary, secondary }:
{
  primary: { title: String, link: String }
  secondary: { title: String, link: String }
})
{
  return <div className={styles.buttons}>
      <button>
        <span className={montserrat.className}{ primary.title }</span>
      </button>
      <div className={styles.spacer}></div>
      <button>
        <span className={montserrat.className}>{ secondary.title }</span>
      </button>
    </div>
}

export default function Module({ title, description, highlight }:
{
  title: String,
  description: String,
  highlight: String[]
})
{
  return <div className={styles.container}>
      <Section>
        <div>
          <Header 
            title={title} 
            description={description} 
            highlight={highlight}
          />
          <Buttons
            primary={{title: "BOOK A MEETING", link: ""}}
            secondary={{title: "VIEW OUR WORK", link: ""}}
          />
        </div>
        <div>
          <Image 
            src={"/temp.svg"} 
            alt={"temp"}
            width={420}
            height={440}
          />
        </div>
      </Section>
    </div>
}
