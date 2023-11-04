import reactLogo from './assets/react.svg'
import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>First steps in React</h1>
      <h2>React is awesome</h2>
      <Footer />
    </>
  );
}

export default App
