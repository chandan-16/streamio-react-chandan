import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from './../utils/constants';
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items)
  }

  useEffect(() => {
    getVideos();
  },[])

  return (
    <div className="      
      flex flex-wrap gap-4 justify-center
      px-2 sm:px-4 md:px-6 lg:px-8">
      {videos.map(video => (
        <Link key={video.id} to={`/watch?v=${video.id}`} className="mb-4">
          <VideoCard info={video} />
        </Link>        
        )) }
    </div>
  )
};


export default VideoContainer