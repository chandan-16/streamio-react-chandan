import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { SEARCH_API, YOUTUBE_SEARCH_API } from "../utils/constants";
import { useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import { NavLink } from "react-router-dom";
// import logo from "../assets/";

const Head = () => {
    const [navOpen, setNavOpen] = useState(false);

    const [searchQuery, setSearchQuery] = useState("");

    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector(store => store.search);
    const dispatch = useDispatch();
    
    useEffect(() => {
        
        // API CALL

        // making an api call on every key press 
        // but if the difference betn 2 api's calls is <200ms
        // decline the API call

        // searchCache = {
        //   "iphone" : ["iphone 11", "iphone 14"]
        // }

        // searchQuery = iphone

        if(searchCache[setSearchQuery]){
          setSuggestions(searchCache[searchQuery])
        }else{
          getSearchSuggestions();
        }

        const timer = setTimeout(() => getSearchSuggestions(), 200);

        return () => {
            clearTimeout(timer); // ✅ fixed
        }
    },[searchQuery])
    

    function jsonp(url, callback) {
    let callbackName = "jsonp_callback_" + Math.round(100000 * Math.random());
    window[callbackName] = function (data) {
      delete window[callbackName];
      document.body.removeChild(script);
      callback(data);
    };

    let script = document.createElement("script");
    script.src = `${url}&callback=${callbackName}`;
    document.body.appendChild(script);
  }

  const getSearchSuggestions = () => {
    const url = `${SEARCH_API}${searchQuery}`; // Make sure the API supports JSONP and expects a callback parameter
    jsonp(url, (response) => {
      setSuggestions(response[1]);
      // console.log(response);

      dispatch(cacheResults({[searchQuery] : response [1]}));
    });
  };

  const toggleMenuHandler = () => {
      dispatch(toggleMenu());
  }

  const handleSuggestionClick = (searchText) => {
 
console.log("SearchText",searchText)
  }

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          {/* <img src={logo} alt="Streamio Logo" className="h-8 w-auto" /> */}
          <span className="ml-2 text-2xl font-bold">STREAM<span className="text-violet-900">IOO</span></span>
        </NavLink>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setNavOpen(!navOpen)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor">
            {navOpen ? (
              <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className="text-gray-700 hover:text-violet-900">Home</NavLink>
          <NavLink to="/about" className="text-gray-700 hover:text-violet-900">About</NavLink>
          <NavLink to="/contact" className="text-gray-700 hover:text-violet-900">Contact</NavLink>
        </nav>
      </div>

      {/* Mobile Navigation (slide-down) */}
      {navOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <NavLink to="/" className="block px-4 py-2">Home</NavLink>
          <NavLink to="/about" className="block px-4 py-2">About</NavLink>
          <NavLink to="/contact" className="block px-4 py-2">Contact</NavLink>
        </nav>
      )}
    </header>
    
  )
}

export default Head;