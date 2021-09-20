import React from "react";
import css from "./NoteBody.module.css"
import { useState } from 'react'
import recycle from "../../../images/recycle.svg"

function NoteBody(props) {

    const [desc, trackDesc] = useState(props.desc);
    const [title, trackTitle] = useState(props.title);

    return (
        <div className={css.blockSize}>
            <div className={css.recycle}>
                <p>Title:</p>
                <img onClick={() => props.delete(props.id)} src={recycle} alt="recycle" />
            </div>
            <form>
                <textarea className={css.title} defaultValue={title} onChange={e => trackTitle(e.target.value)} required minLength="3" maxLength="120" />
                <p>Description:</p>
                <textarea className={css.desc} defaultValue={desc} onChange={e => trackDesc(e.target.value)} required minLength="5" maxLength="500" />

                <button onClick={() => {
                    if (title.length >= 3 && title.length <= 120 && desc.length >= 5 && desc.length <= 500) {
                        props.update(props.id, title, desc)
                    }
                    else{
                        alert("The length of the title should be between 3 and 120 characters. The length of the note must be between 5 and 500 characters. Please check the input is correct!")
                    }
                }} type="button" className={css.save}>Save</button>
            </form>
        </div>
    );

}

export default NoteBody;