import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import homeIcon from '../assets/home.svg';
import shortsIcon from '../assets/shorts.svg';
import subscriptionsIcon from '../assets/subscriptions.svg';
import redLiveIcon from '../assets/red-live.svg';
import libraryIcon from '../assets/library.svg';
import historyIcon from '../assets/history.svg';
import yourVideosIcon from '../assets/yourVideos.svg';
import watchLaterIcon from '../assets/watchLater.svg';
import likedVideosIcon from '../assets/likedVideos.svg';
import showMoreIcon from '../assets/showMore.svg';
import trendingIcon from '../assets/trending.svg';
import shoppingIcon from '../assets/shopping.svg';
import musicIcon from '../assets/music.svg';
import moviesIcon from '../assets/movies.svg';
import liveIcon from '../assets/live.svg';
import gamingIcon from '../assets/gaming.svg';
import newsIcon from '../assets/news.svg';
import sportsIcon from '../assets/sports.svg';
import learningIcon from '../assets/learning.svg';
import fashionAndBeautyIcon from '../assets/fashionAndBeauty.svg';
import settingsIcon from '../assets/settings.svg';
import reportHistoryIcon from '../assets/reportHistory.svg';
import helpIcon from '../assets/help.svg';
import sendFeedbackIcon from '../assets/sendFeedback.svg';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // Early Return Pattern 
  if(!isMenuOpen) return null;

  return (
    <div className="px-13 shadow-lg w-306 py-0 ">
      <ul>
          <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to='/'> <img className='inline-block align-bottom mr-3' src={homeIcon} alt="Home" /> Home</NavLink ></li>
          <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={shortsIcon} alt="Shorts" /> Shorts</NavLink ></li>
          <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={subscriptionsIcon} alt="Subscriptions" /> Subscriptions</NavLink ></li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={libraryIcon} alt="Library" /> Library</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={historyIcon} alt="History" /> History</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={yourVideosIcon} alt="YourVideos" /> Your Videos</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={watchLaterIcon} alt="WatchLater" /> Watch Later</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={likedVideosIcon} alt="LikedVideos" /> Liked Videos</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={showMoreIcon} alt="ShowMore" /> Show More</NavLink ></li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> Scary Fun <img className='inline-block align-bottom mr-3' src={redLiveIcon} alt="ScaryFun" /> </NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> Crime Tak <img className='inline-block align-bottom mr-3' src={redLiveIcon} alt="CrimeTak" /> </NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> Show More... <img className='inline-block align-bottom mr-3' src={showMoreIcon} alt="ShowMore" /> </NavLink ></li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

      <h1 className='font-medium pt-5'>Explore</h1> 

      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={trendingIcon} alt="Trending" /> Trending</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={shoppingIcon} alt="Shopping" /> Shopping</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={musicIcon} alt="Music" /> Music</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={moviesIcon} alt="Movies" /> Movies</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={liveIcon} alt="Live" /> Live</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={gamingIcon} alt="Gaming" /> Gaming</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={newsIcon} alt="News" /> News</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={sportsIcon} alt="Sports" /> Sports</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={learningIcon} alt="Learning" /> Learning</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={fashionAndBeautyIcon} alt="FashionBeauty" /> Fashion & Beauty</NavLink ></li>
      </ul> 
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />

      <h1 className='font-medium pt-5'>More From Youtube</h1>

      <ul>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={settingsIcon} alt="Settings" /> Settings</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={reportHistoryIcon} alt="ReportHistory" /> Report History</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={helpIcon} alt="Help" /> Help</NavLink ></li>
        <li className='my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg'><NavLink  to={'/'}> <img className='inline-block align-bottom mr-3' src={sendFeedbackIcon} alt="Send Feedback" /> Send Feedback</NavLink ></li>
      </ul>
  
    </div>
  )
}

export default Sidebar



// import { useSelector } from "react-redux"
// import { NavLink } from "react-router-dom"
// import icons from "../assets/" // assume all icons imported here

// export { default as homeIcon } from "./home.svg";
// export { default as shortsIcon } from "..assets/shortsIcon";
// export { default as subscriptionsIcon } from "..assets/shortsIcon";
// // ...repeat for all other icons
// export { default as fashionAndBeautyIcon } from "./fashionAndBeauty.svg";
// export { default as settingsIcon } from "./settings.svg";
// export { default as reportHistoryIcon } from "./reportHistory.svg";

// const navGroups = [
//   [
//     { to: "/", icon: icons.homeIcon, label: "Home" },
//     { to: "/", icon: icons.shortsIcon, label: "Shorts" },
//     { to: "/", icon: icons.subscriptionsIcon, label: "Subscriptions" },
//   ],
//   // Add other groups similarly...
//   [
//     { to: "/", icon: icons.libraryIcon, label: "Library" },
//     { to: "/", icon: icons.historyIcon, label: "History" },
//     // ...
//   ],
//   [
//     { to: "/", icon: icons.redLiveIcon, label: "Scary Fun", isLive: true },
//     { to: "/", icon: icons.redLiveIcon, label: "Crime Tak", isLive: true },
//     { to: "/", icon: icons.showMoreIcon, label: "Show More..." },
//   ],
//   [
//     { to: "/", icon: icons.trendingIcon, label: "Trending" },
//     // ...
//   ],
//   [
//     { to: "/", icon: icons.settingsIcon, label: "Settings" },
//     { to: "/", icon: icons.reportHistoryIcon, label: "Report History" },
//     // ...
//   ],
// ]

// const Sidebar = () => {



//   const isOpen = useSelector(store => store.app.isMenuOpen)
//   if (!isOpen) return null

//   return (
//     <aside className="
//       fixed inset-y-0 left-0 z-30 bg-white shadow-lg transform
//       transition-transform duration-200 ease-in-out
//       w-64
//       -translate-x-full lg:translate-x-0 lg:static
//     ">
//       <div className="h-full overflow-y-auto px-4 py-6 flex flex-col">
//         {navGroups.map((group, i) => (
//           <React.Fragment key={i}>
//             {i > 0 && <hr className="my-4 border-gray-200" />}
//             {(i === 3 || i === 4) && (
//               <h2 className="font-medium mb-2">
//                 {i === 3 ? "Explore" : "More From YouTube"}
//               </h2>
//             )}
//             <ul>
//               {group.map(({ to, icon, label, isLive }, j) => (
//                 <li key={j} className="mb-1">
//                   <NavLink
//                     to={to}
//                     end
//                     className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition"
//                   >
//                     <img src={icon} alt={label} className="w-6 h-6 mr-3" />
//                     <span className="text-sm font-medium">
//                       {label}
//                     </span>
//                     {isLive && (
//                       <img
//                         src={icons.redLiveIcon}
//                         alt="Live"
//                         className="w-4 h-4 ml-auto"
//                       />
//                     )}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </React.Fragment>
//         ))}
//       </div>
//     </aside>
//   )
// }

// export default Sidebar
