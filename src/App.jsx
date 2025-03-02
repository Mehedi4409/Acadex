import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Component/Navbar'

function App() {

  return (
    <div className='bg-white w-11/12 m-auto max-w-[1200px] mt-6'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
