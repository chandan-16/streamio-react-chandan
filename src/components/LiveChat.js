import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages);
    const [liveMessage, setLiveMessage] = useState("");

    const handleFromLiveMsg = (event) => {
        event.preventDefault();

        dispatch(addMessage({
            name : "Chandan Gautam",
            message : [liveMessage]
        }));
        setLiveMessage("");
    }

    useEffect(() => {
        const i =  setInterval(() => {
            // API Polling 
            console.log("API Polling")

            dispatch(addMessage({
                name : generateRandomName(),
                message : makeRandomMessage(25)
            }))

        },2000);

        return () => clearInterval(i)
    },[]) 

  return (
    <>
    <div>
    <h1 className="pt-1 pl-4 text-red-500 font-bold">Live Chat :</h1>
    <div className="border-black bg-slate-100 rounded-lg h-150 pl-10 text-bolder pt-5 overflow-y-scroll flex flex-col-reverse">
        {/* Not a good pactice to use index as key  */}
        {
            chatMessages.map((c, index) => <ChatMessage key={index} name={c.name} message={c.message} />)
        }
    </div> 
    </div>

    <form onSubmit={handleFromLiveMsg} className="w-full p-2 ml-2 border border-black mx-auto mt-4 rounded">
        <input onChange={(e) => setLiveMessage(e.target.value)} className="w-278 px-4 py-2 border" type="text" placeholder="enter message" value={liveMessage} />
        <button type="submit" className="px-6 py-2 mx-2 bg-green-600 text-white rounded">Send</button>
    </form>
    </>
  )
}

export default LiveChat