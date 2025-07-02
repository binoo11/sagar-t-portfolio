import '../css/Music.css'
import upcoming from '../assets/Upcoming.png'
function Music(){
    return (<div className="music">
        <h2>Upcoming Music</h2>
        <div className='details'>
        <img src={upcoming} alt='upcoming music' className='upcoming-music-image' />
        <div className='description'>
            <h3 className="song-title">✨ *Princess Ko Katha*</h3>
          <p><strong>Female Artist:</strong> Bakemono Gurung</p>
          <p><strong>Male Artist:</strong> Devendra Bablu</p>
          <p><strong>Lyricist:</strong> Harka Saud</p>
          <p><strong>Release Date:</strong> August 15, 2025</p>
          <p><strong>Genre:</strong> Kauda Folk × Modern Fusion</p>

           <div className='song-song-summary'> <p>
            This song is a fusion of traditional Nepali folk music — drawing its roots from the vibrant Kauda genre —
            blended seamlessly with modern folk elements. It’s a musical journey that bridges generations, traditions,
            and emotions, bringing the soul of Nepal into a contemporary light.
          </p>
          <p>
            Set in the enchanting Arun Barun Valley of eastern Nepal, the story follows a young Himalayan princess,
            raised in nature’s serenity, carrying the timeless grace of her heritage. One day, she meets a tourist guide —
            a stranger who sees not only the beauty of the land but the light within her. A tender love begins to grow,
            connecting two different worlds with the invisible thread of feeling.
          </p>
          <p>
            The music flows with traditional instruments such as madal, sarangi, tungna, bansuri, and the sitar, adding a rich
            melodic layer that evokes both nostalgia and depth. Alongside modern folk guitar tones and ambient transitions,
            the sitar’s graceful presence brings a spiritual and emotional texture to the song, reflecting the inner journey
            of love and identity.
          </p>
          <p>
            This is not just a song — it’s a cultural experience. A story where the Himalayas sing, tradition breathes,
            and love echoes through melody — timeless and true.
          </p>
          </div> 
        </div>
        </div>
    </div>);
}
export default Music