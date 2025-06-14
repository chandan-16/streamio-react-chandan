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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {videos.map(video => (
        <Link key={video.id} to={`/watch?v=${video.id}`} className="mb-4">
          <VideoCard key={video.id} info={video} />
        </Link>        
        )) }
    </div>
  )
};


export default VideoContainer