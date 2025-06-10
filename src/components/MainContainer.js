import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
  return (
  <main className="
    container mx-auto px-4 mt-20
    sm:px-6 md:px-8 lg:px-10
    grid grid-cols-1 gap-4
    md:grid-cols-1 lg:grid-cols-1
  ">
    <section>
      <ButtonList />
    </section>

    <section className="w-full">
      <VideoContainer />
    </section>
  </main>
  )
}

export default MainContainer