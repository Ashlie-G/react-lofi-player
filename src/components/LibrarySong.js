import React from 'react'

const LibrarySong = ({song, songs, setCurrentSong, id}) => {

    const songSelectHandler = () => {
        // the below is unnessisary as we alread have the song by passing song as a prop
        // const selectedSong = songs.filter((state) => state.id === id)
        // setCurrentSong(selectedSong[0])
        setCurrentSong(song)
    }

    return (
        <div onClick={songSelectHandler} className='library-song'>
            <img src={song.cover} alt='album cover'></img>
            <div className='song-description'>
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>

    )
}

export default LibrarySong
