import React, {useState} from "react";
import s from "./Paginator.module.css"
import classNames from 'classnames';

export type PaginatorPropsType = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    portionSize: number
}
const Paginator: React.FC<PaginatorPropsType> = ({
                                                     onPageChanged,
                                                     totalUsersCount,
                                                     pageSize,
                                                     currentPage,
                                                     portionSize
                                                 }) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize
    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber((portionNumber - 1))}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    // const pageClass = s.page + ' ' + (currentPage === p ? s.activePage : '')
                    const pageClass = classNames({[s.activePage]:currentPage===p},s.page)
                    return <span key={p} className={pageClass}
                                 onClick={() => onPageChanged(p)}>{p}</span>
                })}

            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber((portionNumber + 1))}>NEXT</button>}

        </div>)
}

export default Paginator