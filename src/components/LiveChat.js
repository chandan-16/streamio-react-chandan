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
  const i = setInterval(() => {
    dispatch(addMessage({
      name: generateRandomName(),
      message: makeRandomMessage(25)
    }));
  }, 2000);

  return () => clearInterval(i);
}, [dispatch]);

  return (
    <>
    <div className="max-w-full md:max-w-2xl lg:max-w-3xl mx-auto mt-4">
    <h1 className="pt-1 pl-4 text-red-500 font-bold">Live Chat :</h1>
    <div className="
        flex flex-col-reverse overflow-y-auto bg-slate-100
        rounded-lg p-4 h-96 md:h-[500px]
        space-y-2 space-y-reverse">
        {/* Not a good pactice to use index as key  */}
        {
            chatMessages.map((c, index) => <ChatMessage key={index} name={c.name} message={c.message} />)
        }
    </div> 
    </div>

    <form onSubmit={handleFromLiveMsg} className="
        max-w-full md:max-w-2xl lg:max-w-3xl mx-auto mt-4 px-4 py-2
        border border-black rounded flex space-x-2 items-center">
        <input onChange={(e) => setLiveMessage(e.target.value)} className="flex-1 border border-gray-400 rounded px-4 py-2 focus:outline-none" type="text" placeholder="enter message" value={liveMessage} />
        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500 transition">Send</button>
    </form>
    </>
  )
}

export default LiveChat