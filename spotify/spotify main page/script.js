let title = Array.from(document.querySelectorAll(".pagechange"));
let leftcards = Array.from(document.querySelectorAll(".song-cards"));
let play = Array.from(document.querySelectorAll(".play"));
let cardcontainer = Array.from(document.querySelectorAll(".card-container"));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

cardcontainer.forEach((val,i)=>{
    val.addEventListener("mouseover",()=>{
        play.forEach((ele)=>{
            ele.style.display ="none";
        })
        play[i].style.display = "block";
    })
})




for(let i = 0 ; i<songs.length ; i++){
    leftcards[i].addEventListener("click",()=>{
        title[i].addEventListener("click",()=>{
            title[i].classList.remove("active");
        })
        title[i].classList.add("active");
    })
}

