import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

function App() {
  return (
    <div className='app'>
      <div id="backdrop"></div>
      <AppHeader/>
      <main>
        <div id="container">
          <form>
            <input type="file" name="image" />
            <input type="submit" value="Generate results" name="submit" />
          </form>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
