import { useState } from 'react'
import './App.css'
import Home from './Home'
import { Routes } from 'react-router-dom'
import NotFound from './NotFound'
import Competitions from './Competitions'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import NavigationBar from './NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import CompetitionDetails from './CompetitionDetails'
function App() {


  return (
    <>
    {/* <Router>
      <Routes>
      <Route element={<Home />}>
          <Route path="/" element={<Home />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>

    */}

<Router>
<NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/details/:id" element={<CompetitionDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
</Router>

    </>
  )
}

export default App
