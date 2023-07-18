import './style/style.css';

import Header from './components/Header'
import Main from './components/Main'

function App() {
  
  return (
    <>
      <Header />
      
      <Main />

      <footer>
        <div className="designed">
          <span>- Site designed and created by <a href="https://github.com/AleksMercer">Mercer </a>© 2023 -</span>
        </div>
      </footer>
    </>
  )
}

export default App;
