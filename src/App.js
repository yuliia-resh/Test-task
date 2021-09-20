import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Head from './components/Head/Head';
import Note from './components/Note/Note';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Head search={props.search} titleSortAsc={props.titleSortAsc} titleSortDesc={props.titleSortDesc} dateSortAsc={props.dateSortAsc} dateSortDesc={props.dateSortDesc} state={props.state}/>
        <Note state={props.state} update={props.update} add={props.add} delete={props.delete}/>
      </div>

    </BrowserRouter>
  );
}

export default App;
