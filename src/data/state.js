import { renderEntireTree } from "../render";

let state = [
    {
        "id": 1,
        "title": "Title 1",
        "description": "Lorem ipsum",
        "date": 1631844062000//in ms from 1 Jan 1970. 17.08.2021
    },
    {
        "id": 2,
        "title": "Title 2",
        "description": "Lorem ipsum geee",
        "date": 1631757662000//in ms from 1 Jan 1970. 16.08.2021
    },
    {
        "id": 3,
        "title": "Title 3",
        "description": "Lorem ddipsum geee",
        "date": 1632448862000//in ms from 1 Jan 1970. 24.08.2021
    }
]

export default state;

export let updateNote = (id, title, desc) => {
    state.find(elem => id === elem.id).title = title;
    state.find(elem => id === elem.id).description = desc;
    state.find(elem => id === elem.id).date = Date();
    alert("Updated successfully");
    renderEntireTree(state);
}

export let addNote = (title, desc) => {

    let idNotes = state.map(e => e.id);

    let newNote = {
        id: state.length ? idNotes.reduce((a, b) => { return Math.max(a, b); }) + 1 : 1,
        title: title,
        description: desc,
        date: Date.now()
    };

    state.push(newNote);
    alert("Added successfully");
    renderEntireTree(state);
}


export let deleteNote = (id) => {
    const res = window.confirm('Delete this note?');
    if (res) {
        let elem = state.find(e => e.id === id);
        let index = state.indexOf(elem);
        state.splice(index, 1);
        alert("Deleted successfully")
        renderEntireTree(state);
    }
}


export let titleSortAsc = () => {
    renderEntireTree(state.sort((a, b) => a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1));
}

export let titleSortDesc = () => {
    renderEntireTree(state.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? 1 : -1));
}

export let dateSortAsc = () => {
    renderEntireTree(state.sort((a, b) => a.date > b.date ? 1 : -1))
}

export let dateSortDesc = () => {
    renderEntireTree(state.sort((a, b) => a.date < b.date ? 1 : -1))
}

export let search = (filter) => {

    let searchResult = [];
    if (filter.length === 0 || filter === null || filter === undefined) {
        renderEntireTree(state);
    }
    else {
        state.forEach(elem => {
            if (elem.title.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                searchResult.push(elem);
            }
            renderEntireTree(searchResult);
        });
    }

}


