import { portfolioTracks } from "../../data/tracks.jsx";
const PlayIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 6v12l10-6z"></path></svg>
);

export const Playlist = () => {
  return (
    <div className="bg-card-background p-4 sm:p-6 md:p-8 rounded-lg font-sans w-full max-w-4xl mx-auto">
      <div className="w-full">
        <div className="grid grid-cols-12 gap-4 text-gray-400 text-sm border-b border-gray-700 pb-2 mb-2 px-2">
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-1"></div>
          <div className="col-span-8 md:col-span-5">TITLE</div>
          <div className="hidden md:block md:col-span-5">CATEGORY</div>
        </div>

        <div className="space-y-1">
          {portfolioTracks.map((track) => (
            <a
              key={track.id}
              href={track.href}
              className="grid grid-cols-12 gap-4 items-center p-2 rounded-md hover:bg-white/10 group transition-colors duration-200"
            >
              <div className="col-span-1 text-center text-gray-400 group-hover:text-white">
                <span className="group-hover:hidden">{track.id}</span>
                <span className="hidden group-hover:block"><PlayIcon /></span>
              </div>

              <div className="col-span-1 text-gray-300">
                {track.icon}
              </div>

              <div className="col-span-8 md:col-span-5 text-white font-medium truncate">
                {track.title}
              </div>

              <div className="hidden md:block md:col-span-5 text-gray-400">
                {track.category}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
