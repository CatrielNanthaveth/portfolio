import { PlayerCard } from '../components/PlayerCard/PlayerCard';
import { Playlist } from '../components/PlaylistList/Playlist';
import { AboutMe } from '../components/AboutMe/AboutMe';
import { Projects } from '../components/Projects/Projects';
import { Contact } from '../components/Contact/Contact';

export default function Home() {

  return (
    <>
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <PlayerCard />
          <Playlist />
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}
