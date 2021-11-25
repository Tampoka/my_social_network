import React from "react";
import s from "./Paginator.module.css"

export type PaginatorPropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
}
const Paginator: React.FC<PaginatorPropsType> = ({onPageChanged, totalUsersCount, pageSize, currentPage}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.paginator}>
            {pages.map(p => {
                const pageClass = s.page + ' ' + (currentPage === p ? s.activePage : '')
                return <span key={p} className={pageClass}
                             onClick={() => onPageChanged(p)}>{p}</span>
            })}
        </div>)
}

export default Paginator