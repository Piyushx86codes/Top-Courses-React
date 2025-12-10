
import './App.css'
import { Navbar } from './components/Navbar'
import { Filter } from './components/Filter'
import { Cards } from './components/Cards'

function App() {
  
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter/>
      </div>
      <div>
        <Cards/>
      </div>
    </div>
  )
}

export default App
