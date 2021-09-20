import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addNote, dateSortAsc, dateSortDesc, deleteNote, search, titleSortAsc, titleSortDesc, updateNote } from "./data/state";
import './index.css';

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} update={updateNote} add={addNote} delete={deleteNote} titleSortAsc={titleSortAsc} titleSortDesc={titleSortDesc} dateSortAsc={dateSortAsc} dateSortDesc={dateSortDesc} search={search} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
