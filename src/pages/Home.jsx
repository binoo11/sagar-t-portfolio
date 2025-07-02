import sagarImg from '../assets/sagar.jpg'
import '../css/Home.css'
import { FaYoutube, FaSpotify, FaInstagram, FaItunesNote } from 'react-icons/fa';
function Home() {
    return (<div className="home">
        <div className="details">
            <img src={sagarImg} alt='sagar' className='profile-image' />
            <div className='description'>
                <div className="video-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/krm7dB1_njg?si=7M_pNhgYREidWpSF"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <h1 className="title">Sagar T</h1>
                <p className="bio">
                    Sagar T is a dynamic composer, lyricist, and songwriter known for crafting heartfelt and evocative music that resonates with listeners worldwide. With a natural talent for storytelling, Sagar T blends rich melodies with meaningful lyrics, creating songs that capture the essence of human emotions. From soulful ballads to upbeat anthems, their versatile sound crosses genres, reflecting influences from indie, pop, and folk.
                    <br /><br />
                    Having honed their skills over the years, Sagar T has become a sought-after collaborator in the music industry, working with various artists to bring unique musical visions to life.
                </p>
            </div>
        </div>
        <div className='follow-social-media'>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-button youtube">
                <FaYoutube className="icon" />
                Visit YouTube
            </a>
            <a href="https://open.spotify.com/embed/artist/3U8jyhXQEVTUJpmR6JeQqP?utm_source=generator&theme=0" target="_blank" rel="noopener noreferrer" className="social-button spotify">
                <FaSpotify className="icon" />
                Visit Spotify
            </a>
            <a href="https://music.apple.com/np/artist/sagar-t/1775066668" target="_blank" rel="noopener noreferrer" className="social-button itunes">
                <FaItunesNote className="icon" />
                Visit iTunes
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-button instagram">
                <FaInstagram className="icon" />
                Visit Instagram
            </a>
        </div>
        <div className='spotify-player'>
            <iframe className='spotify-frame'
                src="https://open.spotify.com/embed/artist/3U8jyhXQEVTUJpmR6JeQqP?utm_source=generator&theme=0"
                title='Spotify Player' 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                 loading="lazy"
                 allowfullscreen></iframe>
        </div>
       {/* <div className="itunes-player">
  <iframe
    src="https://embed.music.apple.com/np/artist/sagar-t/1775066668"
    title="Apple Music Player"
    allow="autoplay *; encrypted-media *;"
    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
    loading="lazy"
  ></iframe>

</div> */}


    </div>
    );
}

export default Home