import './App.css'
import Form from './components/form.jsx'

function App() {
  return (
    <div className="App">
      <div className="static">
        <span>Learn to code by watching others</span>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div>
        <Form/>
      </div>
    </div>
  );
}

export default App;
