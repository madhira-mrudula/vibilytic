import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { TopScrolling } from './components/TopScrollling'
import { Routing } from './components/routing'
import Dashboard from './MainSecAfterLogin/InfluencerDashBoard/InfluencerSideBar'
function App() {

  return (
    <>

     <BrowserRouter>
     <TopScrolling /> 
     <Routing />
     </BrowserRouter>
     {/* <Dashboard  /> */}
 
    </>
  )
}

export default App
