import { PlayerCard } from '../components/PlayerCard/PlayerCard';
import { Playlist } from '../components/PlaylistList/Playlist';
import { AboutMe } from '../components/AboutMe/AboutMe';
import { Projects } from '../components/Projects/Projects';
import { Contact } from '../components/Contact/Contact';

export default function Home() {

  return (
    <>
      <div className="md:flex bg-background">

        {/* Sección Izquierda: PlayerCard */}
        <div className="md:w-1/2 md:min-h-screen flex items-center justify-center p-4">
          <PlayerCard />
        </div>

        {/* Sección Derecha: Playlist */}
        <div className="md:w-1/3 md:min-h-screen flex items-center justify-center p-4">
          <Playlist />
        </div>

      </div>
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}
