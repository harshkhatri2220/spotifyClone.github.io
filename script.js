let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");
let songs = [
    {songName : "kamikaze 1" , filePath : "songs/1.mp3" , coverPath : "covers/1.jpg"},
    {songName : "kamikaze 2" , filePath : "songs/2.mp3" , coverPath : "covers/2.jpg"},
    {songName : "kamikaze 3" , filePath : "songs/3.mp3" , coverPath : "covers/3.jpg"},
    {songName : "kamikaze 4" , filePath : "songs/4.mp3" , coverPath : "covers/4.jpg"},
    {songName : "kamikaze 5" , filePath : "songs/5.mp3" , coverPath : "covers/5.jpg"},
    {songName : "kamikaze 6" , filePath : "songs/6.mp3" , coverPath : "covers/6.jpg"},
    {songName : "kamikaze 7" , filePath : "songs/7.mp3" , coverPath : "covers/7.jpg"},
]

// setting the cover and name of songs
songItems.forEach((element , i) => {
    // console.log(element , i);       //  i is index of array
    document.getElementsByClassName("coverImage")[i].src = songs[i].coverPath;
    document.getElementsByClassName("songName")[i].innerText = songs[i].songName;
});

// handle play / pause by event listner

masterPlay.addEventListener("click" , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;

    }
})

audioElement.addEventListener("timeupdate", ()=>{
    progress = parseInt(audioElement.currentTime);
    console.log(progress);
    progressBar.value = progress; 
})

progressBar.addEventListener("change" , ()=>{
    audioElement.currentTime = progressBar.value;
})



songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));

// setting by defalt play button to all song items
makeAllPlays = ()=>{
songItemPlay.forEach((element)=>{
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
})
}

//after clicking in play button it turns to pause
songItemPlay.forEach((element)=>{
    element.addEventListener("click" , (e)=>{
        songIndex = parseInt(e.target.id);
        makeAllPlays();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src= "songs/" + songIndex + ".mp3";
        masterSongName.innerText = songs[songIndex - 1].songName;  //changing song name
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})

//previous

document.getElementById("previous").addEventListener("click" , ()=>{
    if(songIndex<=1)
    {
        songIndex=7;
    }
    else{
    songIndex -=1;
    }
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.src= "songs/" + songIndex + ".mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");

})

//next

document.getElementById("next").addEventListener("click" , ()=>{
    if(songIndex>=7)
    {
        songIndex=1;
    }
    else{ 
    songIndex +=1;
    }
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.src= "songs/" + songIndex + ".mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");

})