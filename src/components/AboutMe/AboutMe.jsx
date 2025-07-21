import { techStack, aboutMeText } from '../../data/about.jsx';

export const AboutMe = () => {
  return (
    <section id="about-me" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">About Me</h2>
          <p className="mt-4 text-lg text-gray-400">The engineer behind the code.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          <div className="space-y-6">
            {aboutMeText.map((paragraph, index) => (
              <p key={index} className="text-gray-300 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">My Tech Stack</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-card-background rounded-lg p-4 flex flex-col items-center justify-center aspect-square transition-transform hover:scale-105 hover:bg-hover-background cursor-pointer"
                >
                  <div className="h-10 w-10 mb-2">{tech.icon}</div>
                  <span className="text-gray-300 text-sm text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
