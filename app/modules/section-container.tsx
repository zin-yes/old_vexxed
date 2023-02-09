import React from 'react'

import styles from './section-container.module.css'

export default function SectionsContainer({ children }:
{
  children: React.ReactNode    
})
{
  return <div className={styles.container}>
      { children }
    </div>
}