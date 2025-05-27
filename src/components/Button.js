const Button = ({name}) => {
  return (
    <div>
        <button className="px-4 py-2 m-2 bg-gray-300 rounded-lg hover:bg-gray-200">{name}</button>
    </div>
  )
}

export default Button