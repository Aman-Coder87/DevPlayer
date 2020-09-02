
let music = document.getElementById('music');
let play = document.getElementById('play');
let forward = document.getElementById('forward');
let backward = document.getElementById('backward');
let img = document.getElementById('img');
let title = document.getElementById('song_name');


const songs = [
    
    {
        name : "Audio_One" ,
        title : "King Kong",
        cover : "cover1",
    },
    
    {
        name : "Audio_Two",
        title : "Unknown",
        cover : "cover2",
    },
    
    {
        name : "Audio_Three",
        title : "Unknown",
        cover : "cover3",
    }
    
    ];

let playing = false;

let pauseMusic = () => {
    playing = true;
    music.pause();
    play.classList.replace('fa-pause', "fa-play");
};

let playMusic = () => {
    playing = false ;
    music.play();  
    play.classList.replace('fa-play', 'fa-pause');
};

play.addEventListener("click", () => {
    if (playing) {
        playMusic();
    } else {
        pauseMusic();
    }
});

const loadSongs = (songs) => {
    title.textContent = songs.title;
    music.src = songs.name + ".mp3";
    img.src = songs.cover + ".jpg";
};

songIndex = 0;

let nextSong = () => {
    songIndex = (songIndex + 1 ) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
};

let prevSong = () => {
    songIndex = (songIndex - 1 + songs.length ) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
};

forward.addEventListener('click', nextSong);
backward.addEventListener('click', prevSong);

