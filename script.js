const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
    {
        name : 'Starboy',
        displayName : 'Starboy',
        artist : 'The weekend',
    },
    {
        name : 'Unstoppable',
        displayName : 'Unstoppable',
        artist : 'Sia',
    },
    {
        name : 'See You Again',
        displayName : 'See You Again',
        artist : 'Wiz Khalifa',
    },
    {
        name : 'Maroon5',
        displayName : 'Animals ',
        artist : 'Maroon5',
    },
    {
        name : 'Legends Never Die',
        displayName : 'Legends Never Die',
        artist : 'Againts the current',
    },
    {
        name : 'Famy_Ava',
        displayName : 'Famy',
        artist : 'Famy Ava',
    },
    {
        name : 'Eminem',
        displayName : 'Mockingbird',
        artist : 'Eminem',
    },
]

// check if playing 
let isPlaying = false;

// Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

// Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `Music/${song.name}.mp3`;
    image.src = `Img/${song.name}.jpg`;
}

// On load - Select First Song
loadSong(songs[5]);

// Event Listnener
