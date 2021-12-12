import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="Container">
      <header className="App-header"> <h1>dictionary.</h1></header>
      <main className="App-main">
        <Dictionary defaultKeyword="hello" />
      </main>
 <footer className="App-footer">Coded by <a href="https://www.linkedin.com/in/karen-jamieson-5b464a103/" target="_blank" rel="noreferrer">Karen Jamieson</a>, open-sourced on <a href="https://github.com/k-jamie/react-dictionary" target="_blank" rel="noreferrer">GitHub</a>, hosted on <a href="https://pedantic-shaw-f5b989.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>.</footer>
     
    </div>
  );
}

export default App;
