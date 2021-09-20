import React from "react";
import css from "../NoteBody/NoteBody.module.css"
import { useState } from 'react'

function NewNote(props) {

    const [desc, trackDesc] = useState(props.desc);
    const [title, trackTitle] = useState(props.title);

    return (
        <div className={css.blockSize}>
            <p>Title:</p>
            <form>
                <textarea className={css.title} placeholder="This is a default value." onChange={e => { trackTitle(e.target.value) }} required minLength="3" maxLength="120" />
                <p>Description:</p>
                <textarea className={css.desc} placeholder="This is a default value." onChange={e => { trackDesc(e.target.value) }} required minLength="5" maxLength="500" />

                <button onClick={() => {
                    if (title.length >= 3 && title.length <= 120 && desc.length >= 5 && desc.length <= 500) {
                        props.add(title, desc)
                    }
                    else {
                        alert("The length of the title should be between 3 and 120 characters. The length of the note must be between 5 and 500 characters. Please check the input is correct!")
                    }
                }} type="button" className={css.save}>Save</button>
            </form>
        </div>
    );

}

export default NewNote;