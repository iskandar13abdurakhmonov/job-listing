import React from 'react'
import style from './Button.module.css'

export default function Button({ children, onTagClick }) {
    return <button onClick={() => onTagClick(children)} className={style.btn}>{children}</button>
}
