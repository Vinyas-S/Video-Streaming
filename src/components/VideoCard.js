import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails,  publishedAt } = snippet;
  const { viewCount } = statistics;
  const publishedDate = new Date(publishedAt);
  const formattedViewCount = Number(viewCount).toLocaleString();
  return (
    <div className="p-2 m-2 w-72 shadow-lg hover hover:shadow-lg cursor-pointer">
      <img alt="thumbnail" src={thumbnails.medium.url} className="rounded-xl" />
      <span className="font-bold py-2">{title}</span> <br/>
      <span className="text-sm font-medium">{channelTitle}</span>
      <div className="flex gap-2 items-center">
        <span className="text-sm font-medium">{statistics.viewCount} views</span> 
        |
        <span className="text-sm font-medium">{publishedDate.getDay()} days ago </span>
      </div>
    </div>
  );
};

export default VideoCard;
