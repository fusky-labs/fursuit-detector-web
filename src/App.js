import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import { useEffect } from 'react';
function App() {
  const OnClick = () => {
    // grab the image from the DOM
    const image = document.getElementById('image');
    // upload the image to the flask server
    const formdata = new FormData();
    formdata.append('image', image.files[0]);
    fetch('http://127.0.0.1:5000/detect', {
      method: 'POST',
      body: formdata,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div className='app'>
      <div id="backdrop"></div>
      <AppHeader/>
      <main>
        <div id="container">
            <input type="file" name="image" id='image'/>
            <input type="submit" value="Upload" onClick={OnClick}/>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
