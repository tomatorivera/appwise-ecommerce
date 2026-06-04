import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
