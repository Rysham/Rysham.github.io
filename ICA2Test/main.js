//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}
function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
onepage.style.display="block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);
});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});
page4btn.addEventListener("click", function () {
show(4);
});
hideall();

// Full screen
const btnFS=document.querySelector("#btnFS");
const btnWS=document.querySelector("#btnWS");
btnFS.addEventListener("click",enterFullscreen);
btnWS.addEventListener("click",exitFullscreen);
function enterFullscreen() { //must be called by user generated event
document.documentElement.requestFullscreen();
}
function exitFullscreen() {
document.exitFullscreen();
}


// Quiz 
const btnSubmit = document.querySelector("#btnSubmit");
const scorebox = document.querySelector("#scorebox");
let scored = 0;

btnSubmit.addEventListener("click", CheckAns);

function CheckAns() {
  score = 0;

  const CorrAns = [
    "Power",
    "Lateral sprint drills",
    "Single-limb movement",
    "Anaerobic",
    "To master skills specific to their sport"
  ];

  for (let i = 0; i < CorrAns.length; i++) {
    CheckOneAnswer(i + 1, CorrAns[i]);
  }

  scorebox.innerHTML = "Score: " + scored;
}

function CheckOneAnswer(qnNo, correctAns) {
  const qtemp = document.querySelector(`input[name='q${qnNo}']:checked`);
  
  if (qtemp && qtemp.value === correctAns) {
    scored++;
  }
}


// Catching game
const durianId = document.getElementById("durianId");
function GetRandom(min,max){
//this will select a number between min and max
return Math.round(Math.random() * (max - min)) + min;
}
function MoveDurian() {
  const box = document.getElementById("box");
  const boxWidth = box.clientWidth;
  const boxHeight = box.clientHeight;
  const durianWidth = durianId.offsetWidth;
  const durianHeight = durianId.offsetHeight;

  // Clamp so durian stays inside the box
  const maxX = boxWidth - durianWidth;
  const maxY = boxHeight - durianHeight;

  durianId.style.left = GetRandom(0, maxX) + "px";
  durianId.style.top = GetRandom(0, maxY) + "px";
}
moveDurianItvId = setInterval(MoveDurian, 1000);// Speed of durian movement

const scoreBox=document.getElementById("scoreBox");

const popAudio = new Audio("Audio/popsound.mp3"); //create an new Audio Object using sound file

var score=0; //to track how many clicks
function durianCatch() {
//increases score after clicking
score++;
//update html scorebox
scoreBox.innerHTML = "Score: " + score;
// durianId.classList.add("anim1");
durianId.classList.add("shrink");
popAudio.play(); //play the audio!
setTimeout(Respawn, 1000);
}
function Respawn(){
    durianId.classList.remove("shrink");
}
//link durian to mouseclick to durianCatch function
durianId.addEventListener("click",durianCatch);


// document.addEventListener("keydown",function(evt){
// console.log(evt);
// if(evt.code=="KeyT"){
// durianId.classList.add("shrink");
// }
// if(evt.code=="KeyU"){
// durianId.classList.remove("shrink");
// }
// if(evt.code=="KeyA"){
// durianId.classList.add("anim1");
// }
// if(evt.code=="KeyB"){
// durianId.classList.remove("anim1");
// };
// });

