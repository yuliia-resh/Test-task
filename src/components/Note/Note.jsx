import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import css from "./Note.module.css";
import NoteBody from "./NoteBody/NoteBody";
import NewNote from "./NoteItem/NewNote";
import NoteItem from "./NoteItem/NoteItem";

function Note(props) {
    let items = props.state.map(item =>
        <NoteItem id={item.id} title={item.title} />
    );

    let noteBody = props.state.map(body => <Route path={"/note/" + body.id} render={() =>
        <NoteBody id={body.id} title={body.title} desc={body.description} update={props.update} delete={props.delete}/>}/>)

    return (
        <div className={css.wallaper}>
            <div className={css.items}>
                <NavLink to="/note" exact activeClassName={css.active} className={css.new}>+</NavLink>
                {items}
            </div>
            {noteBody}
            <Route path="/note" exact render={() => <NewNote add={props.add}/>} />
        </div>
    );
}

export default Note;