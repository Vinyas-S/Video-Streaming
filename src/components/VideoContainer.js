import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API ,SURFING_API} from "../utils/constants";
import VideoCard from "./VideoCard";
import SearchVideoCard from "./SearchVideoCard";

const VideoContainer = () => {
  const { searchQuery, isSearched } = useSelector((store) => store.results);

  const [isCalled, setIsCalled] = useState(false);

  const [videos, setVideos] = useState([]);
  const [resultVideos, setResultVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
    };

    const searchedVideos = async () => {
      const data = await fetch(SURFING_API + searchQuery);
      const json = await data.json();
      setResultVideos(json.items);
      console.log(json.items);
      setIsCalled(true);
    };

    isSearched ? searchedVideos() : getVideos();
  }, [isSearched, searchQuery]);

  if (isCalled) {
    return (
      <div className="flex flex-wrap gap-2">
        {resultVideos.map((video) => (
          <Link to={"watch?v=" + video.id.videoId} key={video.id.videoId}>
            <SearchVideoCard info={video} />
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {videos.map((video) => (
        <Link to={"watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;