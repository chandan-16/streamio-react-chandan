const ChatMessage = ({name, message}) => {
  return (
    <div className="flex item-center shadow p-2 mr-10">
        <img className="h-8 mr-2" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
        <span className="font-bold px-1">{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage