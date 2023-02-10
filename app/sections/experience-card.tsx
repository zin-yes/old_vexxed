'use client'

import { useEffect, useState } from 'react'

import { motion, useSpring } from 'framer-motion'

import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] });

import styles from './experience-card.module.css'

export function Header({ title, icon }:
{
  title: string,
  icon: 
  {
    path: string,
    alt: string
  }
})
{
  return <div className={styles.header}>
      <div className={styles.header_title}>
        <h3 className={montserrat.className}>{ title }</h3>
      </div>
      <div className={styles.header_icon}>
        <svg width={48} height={48}>
          <path d={icon.path} strokeWidth={"0"} fill={"none"}/>
        </svg>
      </div>
    </div>
}


export function Description({ description }:
{
  description: string[]
})
{
  return <div className={styles.description}>
      {
        description.map((item, index) =>
        {
          return <p key={index} className={montserrat.className}>{ item }</p>
        })
      }
    </div>
}


export default function Module({ header, description }:
{
  header:
  {
    title: string,
    icon: 
    {
      path: string,
      alt: string
    }
  },
  description: string[]
})
{
  const [hover, setHover] = useState(false);

  const [percentage_mouse_x, setPercentageMouseX] = useState(0);
  const [percentage_mouse_y, setPercentageMouseY] = useState(0);

  const spring_rotation_x = useSpring(0);
  const spring_rotation_y = useSpring(0);

  const onMouseMove = (e: any) => 
  {
    let rect = e.currentTarget.getBoundingClientRect();
    
    setPercentageMouseX((e.clientX - rect.left) / rect.width);
    setPercentageMouseY((e.clientY - rect.top) / rect.height);
  };

  useEffect(() => 
    {
      if(hover)
      {
        spring_rotation_x.set(percentage_mouse_x * 3 - 1.5);
        spring_rotation_y.set(-(percentage_mouse_y * 3 - 1.5));
      }
      else
      {
        spring_rotation_x.set(0);
        spring_rotation_y.set(0);
      }
    }, 
    [percentage_mouse_x, percentage_mouse_y, hover]
  );



  return <>
      <motion.div 
        className={hover ? styles.container_hover + " " + styles.container : styles.container}
        onMouseMove={onMouseMove}
        onMouseEnter={ () => setHover(true) }
        onMouseLeave={ () => setHover(false) }
        drag
        onDragStart={() => setHover(true)}
        onDragEnd={() => setHover(false)}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 100 }}
        dragElastic={0.1}
      >
        <motion.div
          style={{
            rotateX: spring_rotation_y,
            rotateY: spring_rotation_x
          }}
        >
          <Header 
            title={header.title}
            icon={header.icon}
          />
          <Description 
            description={description}
          />
        </motion.div>
      </motion.div>
    </>
}