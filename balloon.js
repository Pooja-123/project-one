
var yellow = document.querySelector('.color');
var orange = document.querySelector('.color1');
var green= document.querySelector('.color2');
var darkgreen=document.querySelector('.color3');
var lightgreen=document.querySelector('.color4');
var button=document.querySelector('.btn');
var popCount = 0;


// var opener = document.createElement('div');
// opener.id = "opener";
// opener.innerText = "Pop as many balloons as you can!";
// document.body.appendChild(opener);
// setTimeout(function() {
//   opener.remove();
// }, 1000);

yellow.addEventListener('click', function(){
  alert("You Clicked Me!");
  popCount +=1;
  yellow.innerHTML="<img src='images/balloon-md.png', height='150px' width= '100px'>";
  setTimeout(function () {
    yellow.innerHTML="";
  }, 1000);
  addBalloon();
});


  orange.addEventListener('click',function(){
    alert("Hoorah");
    orange.innerHTML="<img src='images/margenta.png'>";
    setTimeout(function (){
      orange.remove();
    },1000);
    addBalloon();
  });



  green.addEventListener('click',function(){
    alert("yeah!");
    green.innerHTML="<img src='images/popped.png', height='150px' width='150px'>";
    setTimeout(function () {
      green.innerHTML="";
    }, 1000);
    addBalloon();
// popCount +=1;
var audio = new Audio('http://soundbible.com/grab.php?id=1522&type=mp3');
    audio.play();
});

darkgreen.addEventListener('click',function() {
  // alert("Yippy Yippy");
  var bal =document.createElement('div');
  bal.id="game";
  bal.innerText="Hoorah";
  document.body.appendChild(bal);
  darkgreen.innerHTML="<img src='images/pink.png',height='250px'width=150px'>";
  var audio = new Audio('http://soundbible.com/grab.php?id=1522&type=mp3');
  audio.play();
  setTimeout(function() {
    darkgreen.innerHTML="";
  }, 1000);
  addBalloon();
  popCount +=1;
});

lightgreen.addEventListener('click',function() {
  alert("Hey You Block Me");
  lightgreen.innerHTML="<img src='images/boom.png',height='250px'width=150px'>";
  setTimeout(function () {
    lightgreen.remove();
  },1000);
  addBalloon();
  popCount +=1;
});
button.addEventListener('click',function(){
    alert("clicked");
  var opener = document.createElement('div');
  opener.id = "opener";
  opener.innerText = "Pop as many balloons as you can I add more balloons!";
  document.body.appendChild(opener);
  setTimeout(function() {
    opener.remove();
  }, 2000);
  popCount +=1;
});


function addBalloon () {
  var possibleColors = ['color', 'color1', 'color2', 'color3', 'color4'];

  var newBalloon = document.createElement('div');
  var colorChoice = possibleColors[Math.floor(Math.random() * possibleColors.length)];

  newBalloon.classList.add(colorChoice);
  if (colorChoice == possibleColors[0]) {
    newBalloon.innerHTML = '<img src="images/yellow.png" height="150px" width="100px">';
    newBalloon.addEventListener('click',function(){
    newBalloon.remove();
      addBalloon();
    });
  }
  if (colorChoice == possibleColors[1]) {
    newBalloon.innerHTML = '<img src="images/standard-05-orange.png">';
    newBalloon.addEventListener('click',function(){
    newBalloon.remove();
      addBalloon();
    });
  }
  if (colorChoice == possibleColors[2]) {
    newBalloon.innerHTML = '<img src="images/large_balloons.png">';
    newBalloon.addEventListener('click',function(){
    newBalloon.remove();
      addBalloon();

    });
  }
  if (colorChoice == possibleColors[3]) {
    newBalloon.innerHTML = '<img src="images/animated.gif">';
    newBalloon.addEventListener('click',function(){
    newBalloon.remove();
      addBalloon();
    });
  }
  if (colorChoice == possibleColors[4]) {
    newBalloon.innerHTML = '<img src="images/large_cute.png">';
    newBalloon.addEventListener('click',function(){
      newBalloon.remove();
      addBalloon();
    });
  }


  var maxWidth = window.innerWidth;
  var maxHeight = window.innerHeight;

  newBalloon.style.left = 100 + Math.floor(Math.random() * (maxWidth - 200)) + "px";
  newBalloon.style.top = 100 + Math.floor(Math.random() * (maxHeight - 200)) + "px";

  console.log(newBalloon);

  document.body.appendChild(newBalloon);

}
