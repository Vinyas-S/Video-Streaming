const SearchVideoCard = ({ info }) => {
    const { snippet } = info;
    const { channelTitle, thumbnails, publishedAt } = snippet;
  
    const publishedDate = new Date(publishedAt);
  
    return (
      <div className="m-2 p-4 w-72 rounded-md hover hover:shadow-lg cursor-pointer">
        <img src={thumbnails.medium.url} alt="" className="bg-cover " />
        <span className="text-lg font-medium">{channelTitle}</span>
        <div className="flex gap-2 items-center">
          <span>{publishedDate.getDay()} days ago </span>
        </div>
      </div>
    );
  };
  
  export default SearchVideoCard;