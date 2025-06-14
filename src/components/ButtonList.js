import Button from "./Button"

const ButtonList = () => {

  const categories = [
    "All", "Trending", "Gaming", "Songs", "Live", 
    "Soccer", "Cooking", "Cricket", "Valentines", 
    "Marathi", "Guitar", "Romantic", "Hollywood", 
    "Punjabi", "ASMR", "Meditation", "HipHop", 
    "Serial", "Spiritual", "Bollywood", "Status", "Spiritual"
  ];

  return (
    <div
      className="
        flex overflow-x-auto whitespace-nowrap space-x-1 
        px-2 py-1 scrollbar-hide scroll-smooth
        snap-x snap-mandatory
      "
    >
      {categories.map((name) => (
        <div key={name} className="snap-start shrink-0">
          <Button name={name} />
        </div>
      ))}
    </div>
  )
}

export default ButtonList