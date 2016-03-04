
// // window.onload = function() {
//   // your code goes here
//   var balloon = document.querySelector(".color");
//   var left = 0;
//   var direction = 'right';
//
//   var walkRight = setInterval(function() {
//     balloon.style.left = left + "px";
//     if (direction === "right") {
//       if (left <= window.innerWidth - 100) {
//         left += 10;
//         console.log(left);
//         if (left > 200) {
//           left
//         }
//       } else {
//         direction = 'left';
//         balloon.className = 'left';
//       }
//     } else {
//       if (left >=0) {
//         left -= 10;
//       } else {
//         direction = 'right';
//         balloon.className = '';
//       }
//     }
//
//   }, 50);
// // };
//

var left = 0;
var bottom = 0;
var movement = "right";
var upDown = "up";
var rand = Math.round(Math.random() * 13 + 2);
var walkRight = setInterval(function(){
 catHouse.style.left = left + "px";
 if(movement == "right"){
  cat.style.height = '500px';
  cat.style.width = '500px';
  cat.style.transitionDuration = "1s";
  if (left <= window.innerWidth - 300)
   {   left += rand;    }
 else {  movement = "left";
 cat.style.height = '150px';
 cat.style.width = '150px';
 cat.style.transitionDuration = "1s";
 catHouse.className = "left";       }
} else {
  if (left >= 0)
   {     left -= rand;
   } else {
    movement = "right";
    catHouse.className = "right";}}},20);
var walkRight = setInterval(function(){
 catHouse.style.bottom = bottom + "px";
 if(upDown == "up"){
   if (bottom <= window.innerHeight - 250){
     bottom += 10;
   } else { upDown = "down"; }
 } else {
   if (bottom >= 0){
     bottom -= 10;
   } else {  upDown = "up";}}},20);


























var blue = document.querySelector('.color');
var orange = document.querySelector('.color1');
var green= document.querySelector('.color2');
var darkgreen=document.querySelector('.color3');
var lightgreen=document.querySelector('color4');
var button=document.querySelector('btn');
var popCount = 0;

blue.addEventListener('click', function(){
  alert("You Clicked Me!");
  popCount +=1;
  blue.innerHTML="<img src='images/Balloon-psd91072.png', height='150px' width= '100px'>";


 //  $(".color").click(function(){
 // $(this).toggleClass("rotator")  ;
});
orange.addEventListener('click',function(){
  alert("Hoorah You Choose Me!");
  popCount +=1;
  orange.innerHTML="<img src='images/blue-balloon-hi.png', height='150px'width='100px'>";
});
  green.addEventListener('click',function(){
    alert("yeah!");
    green.innerHTML="<img src='images/popped.png', height='150px' width='150px'>";
    popCount +=1;
    setTimeout(function () {
      green.innerHTML="";
    }, 1000);


var audio = new Audio('http://soundbible.com/grab.php?id=1522&type=mp3');
    audio.play();
});

darkgreen.addEventListener('click',function() {
  alert("Yippy Yippy");
  darkgreen.innerHTML="<img src='images/margenta.png',height='250px'width=150px'>";
  setTimeout(function() {
    darkgreen.innerHTML="";
  },1000);
  popCount +=1;
});

lightgreen.addEventListener('click',function() {
  alert("Hey You Block Me");
  lightgreen.innerHTML="<img src='images/Boom.png',height='250px'width=150px'>";
  SetTimeout(function () {
    lightgreen.innerHTML="";
  },1000);
  popCount +=1;
});
button.addEventListener('click',function(){
    alert("clicked");
    var audio = new Audio('http://soundbible.com/grab.php?id=1522&type=mp3');
    audio.play();
    popCount +=1;
});




// changesource();
