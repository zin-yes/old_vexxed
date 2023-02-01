import Image from 'next/image'

import styles from './navigation.module.css'

import { Jost } from '@next/font/google'

const jost = Jost({ subsets: ["latin"], weight: ["900"] });

export interface ItemType
{
  title: String,
  url: String
}

export default function Module({ items }:
{
  items: ItemType[]
})
{
  return <div className={styles.container}>
      <nav>
        <div className={styles.logo}>
          <span className={jost.className}>VEXXED</span>
        </div>
        <div className={styles.items}>
          {
            items.map((item, index) =>
            {
              return <div 
                  key={index} 
                  className={styles.item}
                >
                  <span className={styles.josefin_sans}>{ item.title }</span>
                  {
                    item.menu_items !== undefined && 
                    <Image 
                      src={"/menu-down-arrow.svg"}
                      alt={"Menu down arrow."}
                      width={11} 
                      height={7}
                    />
                  }
                </div>
            })
          }
        </div>
      </nav>
    </div>
}
