import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  },);

  return (
    <div className="container mx-auto mt-4 px-4 sm:px-6 md:px-8 flex flex-col space-y-6">

      <div className="w-full flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:flex-1">
          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
            <iframe
              width="1200"
              height="600"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

        </div>

      <div className="w-full lg:w-1/3">
        <LiveChat />
      </div>
      </div> 
      <CommentsContainer/>   
    </div>

  );
};

export default WatchPage;
