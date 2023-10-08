import React from 'react'
import style from './Filter.module.css'
import { RxCross2 } from 'react-icons/rx'

export default function Filter({ filters, onFilterClick, onClearFilters }) {
    return (
      
            <div className={style.filter}>
                <ul className={style.filterList}>
                    {filters.map((filter) => (
                        <li
                            className={style.filterItem}
                            key={filter}
                        >
                            <span className={style.filterText}>{filter}</span>
                            <button
                                className={style.btn}
                                onClick={() => onFilterClick(filter)}
                            >
                                <RxCross2 className={style.cross} />
                            </button>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => onClearFilters()}
                    className={style.clearBtn}
                >
                    Clear
                </button>
            </div>
       
    )
}
