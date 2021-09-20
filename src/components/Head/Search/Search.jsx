import css from "./Search.module.css"
import search from "../../../images/search.svg"
import { useState } from 'react'

function Search(props) {

  const [s, trackS] = useState("");

  return (
    <div className={css.searchInput}>
      <input onKeyUp={e => trackS(e.target.value)} type="text" placeholder="Search by title" />
      <img onClick={() => { props.search(s) }} src={search} alt="search" />
    </div>
  );
}

export default Search;