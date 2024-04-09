const VideoTitle = ({ title, overview }) => {
  return (
    <div className="p-[24%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-xl md:text-3xl mb-2 md:mb-0font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-sm  w-2/6">{overview}</p>
      <div className="text-white">
        <button className="bg-white py-1 md:py-3 px-2 md:px-10 text-sm md:text-md rounded-md text-black hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 rounded-md py-1 md:py-3 p-4  md:px-10 text-sm md:text-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
