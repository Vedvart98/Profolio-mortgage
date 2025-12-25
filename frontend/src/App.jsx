import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/layout/Layout'
// import Button from './components/Button'
// import Navbar from './components/Navbar'

function App() {
  return (
    // <div>
    //   {/* <Button className='text-3xl bg-blue-500 rounded-sm text-white'>bii</Button>
    //   {/* <Button className='border-4 border-blue-500'>njn</Button>
    //   <button className='text-4xl bg-red-600 rounded-xl bg-gray'>bjb</button>
      
    //   <Navbar/> */}

    //   </div>

    <Router>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </Layout>
     </Router>
  )
}

export default App