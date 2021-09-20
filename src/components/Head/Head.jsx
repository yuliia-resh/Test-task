import Search from "./Search/Search";
import Sort from "./Sort/Sort";
import css from "./Head.module.css"
import { dateSortDesc } from "../../data/state";


function Head(props) {
    return (
        <div className={css.wallaper}>
            <Sort titleSortAsc={props.titleSortAsc} titleSortDesc={props.titleSortDesc} dateSortAsc={props.dateSortAsc} dateSortDesc={dateSortDesc}/>
            <Search state={props.state} search={props.search}/>
        </div>
    );
}

export default Head;