import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <Outlet />
    </div>
  )
}

export default MainLayout
