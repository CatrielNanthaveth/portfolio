import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-hover-background text-white rounded-xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full h-48 md:h-64 object-cover rounded-t-xl" />
          <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300">
            <CloseRoundedIcon />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map(tech => (
              <span key={tech} className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
            ))}
          </div>

          <p className="text-gray-300 leading-relaxed">{project.description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.liveUrl !== null ?
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-4 rounded-full transition-colors">
                <OpenInNewRoundedIcon /> View Live Site
              </a> :
              <a href={project.liveUrl} disabled target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-500 text-black font-bold py-2 px-4 rounded-full transition-colors">
                <OpenInNewRoundedIcon /> Not available as a Live Site
              </a>
            }

            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
              <GitHubIcon /> View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
