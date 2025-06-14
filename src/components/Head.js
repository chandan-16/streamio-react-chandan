import { NavLink } from "react-router-dom";

const Head = () => {

  return (
    
   <header className="bg-white shadow sticky top-0 z-50">
    
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        <NavLink to="/" className="flex items-center">
          
          <span className="ml-2 text-2xl font-bold">
            STREAM<span className="text-violet-900">IOO</span>
          </span>
        </NavLink>

      <ul className="flex">
        <li><i className="bi bi-bell-fill text-xl"></i></li>
        <li><i className="bi mx-4 bi-camera-reels-fill text-xl"></i></li>
        <li><i className="bi bi-person-circle text-xl"></i></li>
      </ul>

      </div>
    </header>    
  )
}

export default Head;