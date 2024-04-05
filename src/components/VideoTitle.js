const VideoTitle = ({ title, overview }) => {
  return (
    <div className="p-[20%] px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-sm w-2/6">{overview}</p>
      <div className="text-white">
        <button className="bg-white py-3 px-10 text-md rounded-md text-black hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 rounded-md py-3 px-10 text-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
