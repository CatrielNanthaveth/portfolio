export const MediaControls = () => (
  <div className="flex items-center justify-center space-x-4">
    {/* prev */}
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM3 16.811V7.189" />
    </svg>

    {/* pause */}
    <div className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-black" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0a.75.75 0 0 1 .75-.75H16.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
      </svg>
    </div>

    {/* next */}
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.689ZM21 7.189v9.622" />
    </svg>
  </div>
);
