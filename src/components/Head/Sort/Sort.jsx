import css from "./Sort.module.css"
import React from 'react';

let ascTitle = React.createRef();
let descTitle = React.createRef();

let ascDate = React.createRef();
let descDate = React.createRef();

let sortTitle = 0;
let sortDate = 0;

function Sort(props) {
  return (
    <div className={css.sortAll}>

      <div className={css.sort}>
        <p>Title </p>
        <div onClick={() => {
          sortTitle++;
          if (sortTitle % 2 === 1) {
            ascTitle.current.classList.remove(css.disable);
            ascTitle.current.classList.add(css.activeSort);
            descTitle.current.classList.add(css.disable);
            props.titleSortAsc()
          }
          else {
            descTitle.current.classList.remove(css.disable);
            descTitle.current.classList.add(css.activeSort);
            ascTitle.current.classList.add(css.disable);
            props.titleSortDesc()
          }
        }}>

          <div className={`${css.sort} ${css.titleSortLogos}`}>
            <p ref={ascTitle} className={css.titleSort}> ↑</p>
            <p ref={descTitle} className={css.titleSort}>↓</p>
          </div>

        </div>
      </div>

      <div className={css.sort}>
        <p>Date </p>
        <div onClick={() => {
          sortDate++;
          if (sortDate % 2 === 1) {
            ascDate.current.classList.remove(css.disable);
            descDate.current.classList.add(css.disable);
            props.titleSortAsc()
            props.dateSortAsc()
          }
          else {
            descDate.current.classList.remove(css.disable);
            ascDate.current.classList.add(css.disable);
            props.dateSortDesc()
          }
        }}>

          <div className={`${css.sort} ${css.titleSortLogos}`}>
            <p ref={ascDate} className={css.titleSort}> ↑</p>
            <p ref={descDate} className={css.titleSort}>↓</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Sort;