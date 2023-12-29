//intilizing variable
console.log('welcome to the spotify')
let songindex=0;//songindex
var audioElement=new Audio('songs/fallingdown.mp3');//audioelement
var masterplay=document.getElementById('masterplaybtm');//masterplan
let myprogressbar=document.getElementById('myprogressbar');//myprogressbar
let songitems=Array.from(document.getElementsByClassName("songItems"));//songitems
let mastersongname=document.getElementById('mastersongname');//mastersongname
let songs=[{songname:"ncs",filepath:"songs/ncs.mp3",coverpath:"covers/ncs.png"},
            {songname:"falling_down",filepath:"songs/fallingdown.mp3",coverpath:"covers/falling.png"},
            {songname:"heathen",filepath:"songs/heathen.mp3",coverpath:"covers/heathen.png"},
            {songname:"ride",filepath:"songs/ride.mp3",coverpath:"covers/ride.png"},
            {songname:"tovelo",filepath:"songs/tovelo.mp3",coverpath:"covers/tovelo.png"},
            {songname:"yeah-usher",filepath:"songs/yeah.mp3",coverpath:"covers/yeah.png"},
            {songname:"we_dont_talk_any..",filepath:"songs/wedon't talk anymore.mp3",coverpath:"covers/we_dont.png"},
            {songname:"why_would_you...",filepath:"songs/why_would you.mp3",coverpath:"covers/why_wol.png"}]
    let gif=document.getElementById("gif");
    
songitems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;

    
});
masterplay.addEventListener('click' ,()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {audioElement.play();
        mastersongname.innerText=songs[songindex].songname;

    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
         gif.style.opacity=0;
         mastersongname.innerText=songs[songindex].songname;

    }
})
audioElement.addEventListener('timeupdate',()=>
{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myprogressbar.value*audioElement.duration/100);
})
const makeallplays=()=>
{
    Array.from(document.getElementsByClassName("songitemsplay")).forEach(element => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    });
}
Array.from(document.getElementsByClassName("songitemsplay")).forEach((element)=>
{
  element.addEventListener('click',(e)=>{
   makeallplays();
   songindex=parseInt(e.target.id);
   e.target.classList.remove('fa-circle-play');
   e.target.classList.add('fa-circle-pause');
   audioElement.src=`${songs[songindex].filepath}`;
   mastersongname.innerText=songs[songindex].songname;

   audioElement.currentTime=0;
   audioElement.play();
   gif.style.opacity=1;

   masterplay.classList.remove("fa-circle-play");
   masterplay.classList.add("fa-circle-pause");
  

  })
})

document.getElementById("next").addEventListener('click',()=>{
    if(songindex>=9)
    {
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioElement.src=`${songs[songindex].filepath}`;
    mastersongname.innerText=songs[songindex].songname;

    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;

    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
   
})

document.getElementById("previous").addEventListener('click',()=>{
    if(songindex<=0)
    {
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioElement.src=`${songs[songindex].filepath}`;
    mastersongname.innerText=songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;

    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
   
})

