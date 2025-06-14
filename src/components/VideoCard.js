const VideoCard = ({info}) => {

    const {snippet, statistics } = info;
    const { channelTitle, thumbnails, title } = snippet

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img className="w-full aspect-video object-cover" src={thumbnails.medium.url} alt="img thumbnail" />
      </div>

      <div className="p-3">
        <h3  className="font-semibold text-sm sm:text-base line-clamp-2">{title}</h3>
        <p className="text-xs text-gray-600">{channelTitle}</p>
           <p className="text-xs text-gray-500">
          {statistics.viewCount} views
        </p>
      </div>
    </>
  )
}



export default VideoCard