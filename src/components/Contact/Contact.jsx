import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { profile } from '../../data/profile';
export const Contact = () => {

  const { email, linkedin, github } = profile;

  return (
    <section id="contact" className="py-20 md:py-28 bg-card-background">
      <div className="max-w-4xl mx-auto text-center px-4">

        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Let's Build Something Great</h2>
        <p className="mt-4 text-lg text-gray-400">
          Have a project in mind or just want to connect? Feel free to reach out. I'm always open to new opportunities and collaborations.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">

          <a
            href={`mailto:${email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-6 rounded-full transition-colors duration-300"
          >
            <EmailRoundedIcon />
            Send me an Email
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#282828] hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
          >
            <LinkedInIcon />
            LinkedIn
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#282828] hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

// A simple footer component to add at the very end
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background py-6 text-center">
      <p className="text-gray-500 text-sm">
        &copy; {currentYear} Catriel Nanthaveth. Built with React & Tailwind CSS.
      </p>
    </footer>
  );
};

