import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMessages = useSelector(store => store.chat.messages)

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
    <h1 className="pt-1 pl-4 text-red-500 font-bold">Live Chat :</h1>
    <div className="border-black bg-slate-100 rounded-lg h-150 pl-10 text-bolder pt-5 overflow-y-scroll flex flex-col-reverse">
        {/* Not a good pactice to use index as key  */}
        {
            chatMessages.map((c, index) => <ChatMessage key={index} name={c.name} message={c.message} />)
        }
    </div>    
    </>

  )
}

export default LiveChat