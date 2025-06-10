const Button = ({ name, icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center 
        bg-gray-300 rounded-lg 
        px-4 py-2 m-2
        hover:bg-gray-200 
        transition-colors duration-150
        md:px-6 md:py-3
        lg:px-8 lg:py-4 lg:font-semibold
      "
    >
      {Icon && (
        <span className="mr-2">
          <Icon className="h-5 w-5" />
        </span>
      )}
      <span className="hidden sm:inline">{name}</span>
    </button>
  )
}

export default Button