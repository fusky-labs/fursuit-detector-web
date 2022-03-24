import './App.scss';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <form>
        <input type="file" name="image" />
        <input type="submit" value="Generate results" name="submit" />
      </form>
    </div>
  );
}

export default App;
