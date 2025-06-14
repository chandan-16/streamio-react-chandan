import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Head from './Head';

const Body = () => {
  return (
    <>
    <Head />
    <div className="flex flex-col md:flex-row min-h-screen">
      
        <aside className="hidden md:block md:w-60 lg:w-64 xl:w-72 bg-gray-50 border-r h-screen overflow-y-auto">
          <Sidebar />
        </aside>  
        
        <main className="flex-1 px-4 py-0 overflow-y-auto">
          <Outlet/>
        </main>
    </div>    
    </>
  )
}

export default Body