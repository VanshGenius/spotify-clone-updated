let audioElement = new Audio('songs/1.mp3');
let songname = Array.from(document.querySelectorAll(".song-name"));
let songimage = Array.from(document.querySelectorAll(".cover"));
let songdata = Array.from(document.querySelectorAll(".table-heading4"));
let songtime = Array.from(document.querySelectorAll(".table-heading5"));
let songcard = Array.from(document.querySelectorAll(".sub-table"));
let playbutton = document.querySelector(".play1");
let previous =document.querySelector(".previous")
let forward =document.querySelector(".forward")
let songindex = 0;
let active = document.querySelector(".active");
let currentsong = new Audio('songs/1.mp3');
let isplaying = true;
let myProgressBar = document.querySelector(".myProgressBar");
let gif = document.querySelector(".gif");
let bottomname = document.querySelector(".bottom-title");
let bottomsongname = "firstsong";
let bottomimage = document.querySelector(".cov");
let currentindex = 1;
let mainplay = document.querySelector(".play2");
let album = Array.from(document.querySelectorAll(".grey1"));
let leftcards = Array.from(document.querySelectorAll(".song-cards"));
let title = Array.from(document.querySelectorAll(".title"));

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

function play(track,name,cover,i){
    currentsong.src = track ;
    currentsong.play();
    console.log(name);
    bottomname.innerText = name;
    bottomimage.src = cover;
    console.log(bottomimage.src);
    currentindex = i+1;
    console.log(currentindex);
    if(currentsong.paused || currentsong.currentTime<=0){
        currentsong.play();
        mainplay.src = "pause.svg";
        playbutton.src = "pause.svg";
        gif.style.opacity = 1;
    }
    else{
        currentsong.pause();
        mainplay.src = "play.svg";
        playbutton.src = "play.svg";
        gif.style.opacity = 0;
    }
}

for(let i=0; i<songs.length ; i++){
    // console.log(songname[i].innerText);
    // console.log(i);
    // console.log(songs[i].songName);
    songname[i].innerText = songs[i].songName;
    songimage[i].src = songs[i].coverPath;
    let randomnum = Math.floor(Math.random()*8 + 1);
    songdata[i].innerText = `${randomnum} weeks ago`;
    songtime[i].innerText = `${randomnum}:${randomnum}${randomnum}`;
    album[i].innerText = `[NCS ${i+1}]`;
    songcard[i].addEventListener("click",()=>{
        play(`songs/${i+1}.mp3`,songname[i].innerText,songimage[i].src,i);
    })
    
    
}

previous.addEventListener("click",()=>{
    if(currentindex ===10 ){
        currentindex = 1;
    }else{
        currentindex = currentindex + 1;
    }
    currentsong.src = `songs/${currentindex}.mp3`
    currentsong.play();
    console.log(currentindex);
    songname.forEach((val=>{
        val.classList.remove("active");
    }))
    songname[currentindex-1].classList.add("active");
    bottomimage.src = songs[currentindex-1].coverPath
    bottomname.innerText = songs[currentindex-1].songName;
})

activesong();

forward.addEventListener("click",()=>{
    if(currentindex ===1 ){
        currentindex = 10;
    }else{
        currentindex = currentindex - 1;
    }
    currentsong.src = `songs/${currentindex}.mp3`
    currentsong.play();
    console.log(currentindex);
    songname.forEach((val=>{
        val.classList.remove("active");
    }))
    songname[currentindex-1].classList.add("active");
    bottomimage.src = songs[currentindex+1].coverPath
    bottomname.innerText = songs[currentindex+1].songName;
})


mainplay.addEventListener("click",()=>{
    if(currentsong.paused || currentsong.currentTime<=0){
        currentsong.play();
        mainplay.src = "pause.svg";
        playbutton.src = "pause.svg";
        gif.style.opacity = 1;
    }
    else{
        currentsong.pause();
        mainplay.src = "play.svg";
        playbutton.src = "play.svg";
        gif.style.opacity = 0;
    }
})



// songcard.forEach((element,i)=>{
//     element.addEventListener("click",()=>{
//         audioElement = new Audio('songs/{i}.mp3');
//     })
// });

// for(let j=0; j<songs.length ; j++){
//     songcard[j].addEventListener("click",()=>{
//         audioElement = new Audio(`songs/${j+1}.mp3`);
//         if(audioElement.paused){
//             audioElement.play();
//         }else{
//             audioElement.pause();
//         };
//     })
// }

playbutton.addEventListener("click",()=>{
    if(currentsong.paused || currentsong.currentTime<=0){
        currentsong.play();
        mainplay.src = "pause.svg";
        playbutton.src = "pause.svg";
        gif.style.opacity = 1;
    }
    else{
        currentsong.pause();
        playbutton.src = "play.svg";
        mainplay.src = "play.svg";
        gif.style.opacity = 0;
    }
})

// songcard.forEach((element)=>{
//     element.addEventListener("click",()=>{
//         console.log(audioElement.paused);
//         if(audioElement.paused){
//             audioElement.play();
//             console.log(audioElement.played);
//         }else{
//             audioElement.pause();
//             console.log(audioElement.paused);
//         }
//     })
// })

// songname.forEach((val,i)=>{
//     val.addEventListener("click",(i)=>{
//         console.log(i);
//         if(isplaying ){
//             val.classList.add('active');
//         }else{
//             val.classList.remove('active');
//         }
//     })
    
// })
currentsong.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((currentsong.currentTime/currentsong.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    currentsong.currentTime = myProgressBar.value * audioElement.duration/100;
})

// songname.forEach((val)=>{
//     val.addEventListener("click",()=>{
//         // songname.forEach((nav)=>{
//         //     nav.classList.remove("active");
//         // })
//         this.classList.add("active");
//     })
// })


function activesong(){
    for(let v=0 ; v<songs.length;v++){
        songcard[v].addEventListener("click",()=>{
            songname.forEach((nav)=>{
                nav.classList.remove("active");
            })
            songname[v].classList.add("active");
        })
        leftcards[v].addEventListener("click",()=>{
            title.forEach((nav)=>{
                nav.classList.remove("active");
            })
            title[v].classList.add("active");
        })
    }
}

