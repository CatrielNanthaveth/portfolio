export const ProgressBar = ({ currentTime, totalDuration, progress }) => (
  <div className="flex items-center space-x-2 mt-3">
    <span className="text-gray-400 text-xs">{currentTime}</span>
    <div className="w-full bg-gray-600 rounded-full h-1">
      <div className="bg-white hover:bg-green-500 rounded-full h-1" style={{ width: `${progress}%` }}></div>
    </div>
    <span className="text-gray-400 text-xs">{totalDuration}</span>
  </div>
);
