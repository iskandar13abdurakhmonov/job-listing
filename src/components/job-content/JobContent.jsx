import React from 'react'
import style from  './JobContent.module.css'
import JobList from '../job-list/JobList'

export default function JobContent({children}) {
  return (
    <div className='job-content__container'>
        {children}
    </div>
  )
}
