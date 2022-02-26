const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// Song titles

const songs = ['Brividi - Mahmood, Blanco', 'Blu Celeste - Blanco', 'Finché non mi seppelliscono - Blanco']

// Keep track of songs

let songIndex = 0

// Initially load song info DOM

loadSong(songs[songIndex])

// Update the song

function loadSong(song){
    title.innerHTML = song
    audio.src = `/app/media/musics/${song}.mp3` 
    cover.src = `/app/media/images/${song}.jpg`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

// Event Listener

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }

})

// Change song events

prevBtn.addEventListener('click', () => {
    songIndex--

    if (songIndex < 0) {
        songIndex = songs.length -1
    }

    loadSong(songs[songIndex])
    
    playSong()
})

nextBtn.addEventListener('click', () => {
    songIndex++

    if (songIndex > (songs.length -1)) {
        songIndex = 0
    }

    loadSong(songs[songIndex])
    
    playSong()
})