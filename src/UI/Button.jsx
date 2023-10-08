import React from 'react'
import style from './Button.module.css'

export default function Button({ children, onTagClick }) {
    return <button className={`${style.btn}`} onClick={() => onTagClick(children)}>{children}</button>
}
