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
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          {/* <img src={logo} alt="Streamio Logo" className="h-8 w-auto" /> */}
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