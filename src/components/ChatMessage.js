const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center space-x-3 p-3 m-2 shadow-lg max-w-fullmd:rounded-lg lg:max-w-lg">
        <img className="h-10 w-10 rounded-full flex-shrink-0" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
        <div className="flex-1 min-w-0">
          <p className="font-bold text-base text-gray-800">{name}</p>
          <p className="text-sm text-gray-700 break-words">{message}</p>
        </div>
    </div>
  )
}

export default ChatMessage