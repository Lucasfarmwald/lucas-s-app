import logo from './logo.svg';
import './App.css';
import Comments from './comments'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://image.freepik.com/free-photo/close-up-young-woman-with-white-manicure-raising-hand_295783-12874.jpg' className="App-logo" alt="logo" />
        <p id='motivator'>
          The Motivator
        </p>
        <Comments />
        <div id='myDiv'>

        </div>

        
      </header>
    </div>
  );
}

export default App;
