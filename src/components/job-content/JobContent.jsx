import React from 'react'
import style from  './JobContent.module.css'

export default function JobContent({children}) {
  return (
    <div className={`job-content__container ${style.jobContent}`}>
        {children}
    </div>
  )
}
