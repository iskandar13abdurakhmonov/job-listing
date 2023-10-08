import React from 'react'
import style from './JobList.module.css'

export default function JobList({ children, filters }) {
  return (
    <ul className={`${style.jobList} ${filters.length > 0 ? '' : style.paddingTop}`}>{children}</ul>
  )
}
