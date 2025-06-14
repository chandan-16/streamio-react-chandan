const Button = ({ name, icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center justify-center
        bg-gray-300 rounded-lg
        px-2 pb-2 m-2
        hover:bg-gray-200
        transition-colors duration-150
        focus:outline-none focus:ring-2 focus:ring-violet-500
        text-sm sm:text-base md:px-5 md:py-3 md:text-base
        lg:px-6 lg:py-4 lg:text-lg lg:font-semibold
      "
    >
      {Icon && (
        <span className="mr-2">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </span>
      )}
      <span className="inline">{name}</span>
    </button>
  )
}

export default Button