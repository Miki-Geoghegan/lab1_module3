
import './App.css';
import Utilities from './components/Utilities'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="header-images">
          <img src='../images/ironhack-logo.svg' className="ironhack-logo" alt="ironhack-logo" />
          <img src='../images/menu-top.svg' className="menu-top" alt="menu-top" />
        </div>
        <div class="main-header">
          <img src='../images/react-logo.svg' className="App-logo" alt="logo" />
          <div className="header-text">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use <br /> the most popular frontend library, <br /> and become a super Ninja developer.</p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"><button class="button">Awesome!</button></a>
          </div>
        </div>
      </header>

      <div class='utilities'>
        <div class='utilities-item'>
          <Utilities 
            image='../images/icon1.png'
            title='Declarative'
            paragraph='React makes it painless to create interactive UIs.'
          />
        </div>
        <div class='utilities-item'>
          <Utilities 
            image='../images/icon2.png'
            title='Components'
            paragraph='Build encapsulated components that manage their state.'
          />
        </div>
        <div class='utilities-item'>
          <Utilities 
            image='../images/icon3.png'
            title='Single-Way'
            paragraph='A set of immutable values are passed to the components.'
          />
        </div>
        <div class='utilities-item'>
          <Utilities 
            image='../images/icon4.png'
            title='JSX'
            paragraph='Statically-typed, designed to run on modern browsers.'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
