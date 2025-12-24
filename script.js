let musicStarted = false;
let currentPage = 1;

function showPage(n){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("show"));
  document.getElementById("page"+n).classList.add("show");
  currentPage = n;
}

function nextPage(n){
  showPage(n);

  if(n === 2 && !musicStarted){
    const bgm = document.getElementById("bgm");
    bgm.volume = 0;
    bgm.play();
    fadeInMusic();
    musicStarted = true;
  }
}

function prevPage(n){
  showPage(n);
}

function startMusic(){
  let audio = document.getElementById("bgm");
  audio.volume = 0;
  audio.play();
  fadeInMusic();
}


function fadeInMusic(){
  const audio = document.getElementById("bgm");
  let v = 0;
  let fade = setInterval(()=>{
    if(v < 0.7){
      v += 0.02;
      audio.volume = v;
    } else clearInterval(fade);
  }, 120);
}

function toggleMusic(){
  const a = document.getElementById("bgm");
  a.paused ? a.play() : a.pause();
}

