import Button from "./Button"

const ButtonList = () => {
  return (
    <div className=" flex overflow-x-auto space-x-2 p-2
    scrollbar-hide overscroll-x-contain snap-x snap-mandatory">

    {["All", "Trending", "Gaming", "Songs", "Live", 
      "Soccer", "Cooking", "Cricket", "Valentines", 
      "Marathi", "Guitar", "Romantic", "Hollywood", 
      "Punjabi", "ASMR", "Meditation", "HipHop", 
      "Serial", "Spiritual", "Bollywood", "Status", "Spiritual"
    ].map(name => (
      <Button key={name} name={name} />
    ))}
    </div>
  )
}

export default ButtonList