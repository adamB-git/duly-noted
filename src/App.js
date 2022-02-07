import logo from './logo.svg';
import './App.css';
import NoteListPage from './components/NoteListPage.js';

function App() {
  return (
    <div className="App">
      <NoteListPage text = "React is fun!"/>
    </div>
  );
}

export default App;
