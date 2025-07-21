import { useState } from 'react';
import { projects } from '../../data/projects';
import { ProjectModal } from './ProjectModal';


export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 md:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">My Discography</h2>
                    <p className="mt-4 text-lg text-gray-400">A selection of my featured projects.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 mt-10">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            id={project.idName}
                            className="bg-card-background rounded-lg overflow-hidden group cursor-pointer transform transition-transform hover:-translate-y-2"
                            onClick={() => setSelectedProject(project)}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity" />
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                                <p className="mt-1 text-sm text-gray-400">{project.techStack.join(', ')}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </section>
    );
};
