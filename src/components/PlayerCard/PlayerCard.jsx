import { MediaControls } from "./MediaControls.jsx";
import { ProgressBar } from "./ProgressBar.jsx";
import { getSongDuration } from "../../utils/support.js";
import { profile } from "../../data/profile.js";

export const PlayerCard = () => {
  const { currentTime, totalDuration, progress } = getSongDuration();

  return (
    <div className="bg-card-background hover:bg-hover-background transition-colors duration-300 rounded-lg p-4 w-full max-w-xs group cursor-pointer">
      <div className="relative">
        <img
          src={profile.cover}
          alt="project cover"
          className="w-full h-auto aspect-square rounded-md shadow-lg"
        />
        <button className="absolute bottom-2 right-2 h-14 w-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg 
      transform group-hover:translate-y-[-8px] transition-all duration-300 opacity-0 group-hover:opacity-100">
          <a target="_blank" href={profile.related_song}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 text-black" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
          </a>
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-white font-bold text-lg truncate">{profile.full_name}</h3>
        <p className="text-gray-400 text-sm mt-1">{profile.position}</p>
      </div>
      <div className="mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <MediaControls />
        <ProgressBar currentTime={currentTime} totalDuration={totalDuration} progress={progress} />
      </div>
    </div>
  );
};
