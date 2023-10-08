add diferent event for different buttons with functions

let a = function(e){
  alert("go")
}
let b= function(e){
  alert("pause")
}

btn.addEventListener('click',a);
btn1.addEventListener('click',b);


make a websites which shave bookmarks with event listener

let c= document.getElementById('google')
let d= document.getElementById('fb')
let e= document.getElementById('insta')

let x=function(e){
  window.location="https://www.google.com";
  win.focus();
}
c.addEventListener('click',x);


let y=function(e){
  window.location="https://www.fb.com";
  win.focus();
}
d.addEventListener('click',y);


let z=function(e){
  window.location="https://www.instagram.com";
  win.focus();
}
e.addEventListener('click',z);

crate the glowing bulb effect using clastlist toggle method

setInterval(async function(){
  document.querySelector("#bulb").classList.toggle("bulbb")
},300)
