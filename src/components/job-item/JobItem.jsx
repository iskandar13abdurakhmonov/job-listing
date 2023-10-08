import React from 'react'
import style from './JobItem.module.css'
import Button from '../../UI/Button'

export default function JobItem({ job, onTagClick }) {

    let tags = [job.role, job.level]
    if(job.languages) tags.push(...job.languages)
    if(job.tools) tags.push(...job.tools)
    
    return (
        <li
            className={`${style.jobItem} ${
                job.featured && style.jobItemRightBorder
            }`}
        >
            <div className={style.jobItemLeftContent}>
                <img
                    className={style.img}
                    src={
                        job.logo ||
                        'https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg'
                    }
                    alt={job.company}
                />
                <div className={style.textContent}>
                    <div className={style.leftContentTop}>
                        <span className={style.companyName}>{job.company}</span>
                        {job.new && <span className={style.new}>new!</span>}
                        {job.featured && (
                            <span className={style.featured}>featured</span>
                        )}
                    </div>
                    <div className={style.leftContentMiddle}>
                        <p className={style.position}>{job.position}</p>
                    </div>
                    <div className={style.leftContentBottom}>
                        <span className={style.postedAt}>{job.postedAt}</span>
                        <span className={style.contract}>{job.contract}</span>
                        <span className={style.location}>{job.location}</span>
                    </div>
                </div>
            </div>
            <div className={style.jobitemRightContent}>
                {tags ? tags.map(tag => <Button onTagClick={onTagClick}>{tag}</Button>) : ''}
            </div>
        </li>
    )
}
