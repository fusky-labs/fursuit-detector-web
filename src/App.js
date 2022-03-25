import './App.scss';
import Footer from './pages/Footer';
import Header from './pages/Header';

function App() {
  return (
    <div className='app'>
    <Header/>
    <main>
      <div id="container">
        <form>
          <input type="file" name="image" />
          <input type="submit" value="Generate results" name="submit" />
        </form>
      </div>
    </main>
    <Footer />
    </div>
  );
}

export default App;
