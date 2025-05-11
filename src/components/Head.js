import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg text-center">
        <div className="flex text-center p-2">
            <img onClick={() => toggleMenuHandler()} className="h-8 cursor-pointer" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt="menu button" />
            <img className="h-8 mx-2" src="https://images.icon-icons.com/3053/PNG/512/stremio_macos_bigsur_icon_189687.png" alt="streamio logo" />
            <p className="text-center  text-2xl pt-0.5">
                <span className="font-bold ">STREAM</span>
                <span className="text-violet-900">IO</span>
            </p>
        </div>

        <div className="col-span-10 text-center ">
            <input className="w-1/2 border border-gray-400 p-2 rounded-l-full " type="text" placeholder=""/>
            <button className="border border-gray-400 px-4 py-2  rounded-r-full "><i className="bi bi-search text-bold"></i></button>
        </div>

        <div className="col-span-1 flex justify-between p-2">
            <span></span>
            <img className="h-8 " src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
        </div>
    </div>
  )
}

export default Head;