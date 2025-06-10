import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Body = () => {
  return (
    <div className="flex flex-col md:flex-row">
      
        <aside className="hidden md:block md:w-1/4 lg:w-1/5 bg-gray-100 h-screen">
          <Sidebar />
        </aside>  
        
        <main className="flex-1 p-4">
      <Outlet/>
        </main>
    </div>
  )
}

export default Body