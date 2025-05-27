const ChatMessage = ({name, message}) => {
  return (
    <div className="flex item-center shadow p-2 mr-10">
        <img className="h-8 rounded-full" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
        <span className="font-bold text-[16px] px-2 text-gray-800">{name}</span>
        <span className="text-[13px break-words overflow-x-x-hidden">{message}</span>
    </div>
  )
}

export default ChatMessage