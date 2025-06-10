const VideoCard = ({info}) => {

    const {snippet, statistics } = info;
    const { channelTitle, thumbnails, title } = snippet

  return (
    <div className="      
      w-full max-w-sm md:max-w-md lg:max-w-sm
      bg-white rounded-lg shadow-lg overflow-hidden
      m-2 flex flex-col">

      <div className="relative aspect-w-16 aspect-h-9">
        <img className="object-cover w-full h-full" src={thumbnails.medium.url} alt="img thumbnail" />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3  className="font-semibold text-base md:text-lg leading-snug mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{channelTitle}</p>
           <p className="text-sm text-gray-500 mt-auto">
          {statistics.viewCount} views
        </p>
      </div>
    </div>
  )
}



export default VideoCard