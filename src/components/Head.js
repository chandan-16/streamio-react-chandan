import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { SEARCH_API, YOUTUBE_SEARCH_API } from "../utils/constants";
import { useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";


const Head = () => {

    
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

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg ">
        <div className="flex text-center p-2 col-span-1">
            <img onClick={() => toggleMenuHandler()} className="h-8 cursor-pointer" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt="menu button" />
            <img className="h-8 mx-2" src="https://images.icon-icons.com/3053/PNG/512/stremio_macos_bigsur_icon_189687.png" alt="streamio logo" />
            <p className="text-center  text-2xl pt-0.5">
                <span className="font-bold ">STREAM</span>
                <span className="text-violet-900">IO</span>
            </p>
        </div>

        <div className="col-span-10 text-center px-10">
            <div>
            <input onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} className="w-1/2 border border-gray-400 p-2 rounded-l-full " type="text" value={searchQuery} />
            <button className="border border-gray-100 px-5 py-2  rounded-r-full "><i className="bi bi-search text-bold"></i></button>
        </div>

      { showSuggestions &&
          <div className="fixed bg-white py-2 px-5 w-96 text-left w-[56rem] shadow-lg rounded-lg ml-110 border border-gray-100">
            <ul>
              { suggestions.map(s => (<li key={s}><i className="bi bi-search py-2 shadow-sm hover:bg-gray-100"></i>{s}</li>)) }
            </ul>
          </div> 
      }

        </div>

        <div className="col-span-1 flex justify-between p-2">
            <span></span>
            <img className="h-8 " src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
        </div>
    </div>
  )
}

export default Head;