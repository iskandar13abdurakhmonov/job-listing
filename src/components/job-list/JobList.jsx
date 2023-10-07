import React from 'react'
import style from './JobList.module.css'
import data from '../../data/data.json'

export default function JobList({ children }) {
  return (
    <ul>{children}</ul>
  )
}
