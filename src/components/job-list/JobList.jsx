import React from 'react'
import style from './JobList.module.css'

export default function JobList({ children }) {
  return (
    <ul className={style.jobList}>{children}</ul>
  )
}
