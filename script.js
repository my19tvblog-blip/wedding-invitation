const DATA={
bride:"Andrea Marie Santos",groom:"Daniel Miguel Reyes",
date:"December 12, 2026",time:"1:00 PM",
venue:"4 Kings Event Center, Uptown, Regatta Square, Pueblo, Cagayan de Oro, Philippines",
reception:"4 Kings Event Center",
maps:"https://www.google.com/maps/search/?api=1&query=4+Kings+Event+Center+Cagayan+de+Oro",
message:"With joyful hearts, we invite you to witness and celebrate the beginning of our forever. Your presence will make our special day even more meaningful.",
story:"Our story began with a simple hello and grew into countless memories, laughter, dreams, and prayers. Now we are excited to take the next beautiful step together as husband and wife.",
dress:"Formal attire. We kindly encourage our guests to wear Sage Green & Khaki tones.",
song:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
photos:[
"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
"https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
"https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=900&q=80"
]};
const $=id=>document.getElementById(id);
function load(){
 const d=JSON.parse(localStorage.getItem("weddingData")||"null")||DATA;
 const names=d.bride+" & "+d.groom, dt=d.date+" · "+d.time;
 $("names").textContent=names;$("coverNames").textContent=names;
 $("date").textContent=dt;$("coverDate").textContent=dt;$("date2").textContent=dt;
 $("venue").textContent=d.venue;$("reception").textContent=d.reception;
 $("message").textContent=d.message;$("story").textContent=d.story;$("dress").textContent=d.dress;
 $("maps").href=d.maps;$("audio").src=d.song;
 $("gallery").innerHTML=(d.photos||[]).filter(Boolean).map(x=>`<img src="${x}" alt="Wedding photo">`).join("");
 window.weddingDate=new Date(d.date+" "+d.time);
}
function tick(){let x=window.weddingDate-new Date();if(x<0)x=0;$("days").textContent=Math.floor(x/864e5);$("hours").textContent=Math.floor(x/36e5)%24;$("minutes").textContent=Math.floor(x/6e4)%60;$("seconds").textContent=Math.floor(x/1e3)%60}
$("openBtn").onclick=()=>{$("cover").style.display="none";play()};
function play(){let a=$("audio");a.play().then(()=>{$("musicBtn").textContent="❚❚ Pause Song"}).catch(()=>{});}
$("musicBtn").onclick=()=>{let a=$("audio");if(a.paused)play();else{a.pause();$("musicBtn").textContent="♫ Play Song"}};
load();tick();setInterval(tick,1000);