import { NavLink } from "react-router-dom";
import css from "./NoteItem.module.css"

function NoteItem(props) {

    let path = "/note/" + props.id;

    return (
        <div className={css.margin}>
            <NavLink to={path} activeClassName={css.active} className={css.item}>{props.title}</NavLink>
        </div>
    );
}

export default NoteItem;