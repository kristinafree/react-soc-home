import React, { useState } from 'react';
import styles from './Paginator.module.css';
//import cn from 'classnames';

let Paginator = ({totalItemsCount,pageSize,onPageChanged,currentPage, portionSize = 10}) => {
    
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNamber, setPortionNamber] = useState(1);
    let leftPortionPageNamber = (portionNamber - 1) * portionSize + 1;
    let rightPortionPageNamber = portionNamber * portionSize;

    return <div className = {styles.paginator}>
        {/* {cn (styles.paginator, {
        [styles.selectedPage] : true })}> */}
        {portionNamber > 1 && 
        <button onClick = { () => {setPortionNamber (portionNamber -1) }}>PREV</button> }
           
            { pages
                .filter(p => p >= leftPortionPageNamber && p <= rightPortionPageNamber)
                .map ((p) => {
                return <span className = { ({ 
                    [styles.selectedPage] : currentPage === p 
                }, styles.pageNamber)  }
                             key = {p}
                             onClick = { (e) => {
                                  onPageChanged(p); 
                             }}>{p}</span>
            })}

            { portionCount > portionNamber &&
                <button onClick = { () => {setPortionNamber(portionNamber + 1) }}>NEXT</button>}
        </div>
}
        

export default Paginator;