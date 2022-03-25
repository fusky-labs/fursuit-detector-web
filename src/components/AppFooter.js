import './AppFooter.module.scss';

function AppFooter() {
  return(
    <footer>
      <div id="wrapper">
        <div id="links">
          {/* Put some social media stuff here idk */}
          <a href="https://github.com/OpenFurs/Fursuit-Detector" target="_blank" rel="noreferrer">Source code on Github</a>
        </div>
        <span>&copy; 2021-{ new Date().getFullYear() } thatITfox &amp; skepfusky; licensed under MIT.</span>
      </div>
    </footer>
  )
}

export default AppFooter;