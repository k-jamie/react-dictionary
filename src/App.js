import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="Container">
      <header className="App-header"> <h1>dictionary.</h1></header>
      <main className="App-main">
        <Dictionary defaultKeyword="hello" />
      </main>
 <footer className="App-footer">Coded by Karen Jamieson, open-sourced on GitHub, hosted on Netlify.</footer>
     
    </div>
  );
}

export default App;
