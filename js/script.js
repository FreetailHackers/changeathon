var star1 = bodymovin.loadAnimation({
  container: document.getElementById('star1'), // Required
  path: 'assets/json/star.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false, // Optional
  name: "star", // Name for future reference. Optional.
})
var star2 = bodymovin.loadAnimation({
  container: document.getElementById('star2'), // Required
  path: 'assets/json/star.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false, // Optional
  name: "star", // Name for future reference. Optional.
})
var star3 = bodymovin.loadAnimation({
  container: document.getElementById('star3'), // Required
  path: 'assets/json/star.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false, // Optional
  name: "star", // Name for future reference. Optional.
})
var star4 = bodymovin.loadAnimation({
  container: document.getElementById('star4'), // Required
  path: 'assets/json/star.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false, // Optional
  name: "star", // Name for future reference. Optional.
})
var star5 = bodymovin.loadAnimation({
  container: document.getElementById('star5'), // Required
  path: 'assets/json/star.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false, // Optional
  name: "star", // Name for future reference. Optional.
})
var star6 = bodymovin.loadAnimation({
  container: document.getElementById('star6'), // Required
  path: 'assets/json/star.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false, // Optional
  name: "star", // Name for future reference. Optional.
})
var star7 = bodymovin.loadAnimation({
  container: document.getElementById('star7'), // Required
  path: 'assets/json/star.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: false, // Optional
  name: "star", // Name for future reference. Optional.
})

function getStyleSheet(unique_title) {
  for(var i=0; i<document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];
    console.log(sheet);
    if(sheet.title == unique_title) {
      return sheet;
    }
  }
}

let hackathonButton = document.getElementById("hackathon-button");
let judgingButton = document.getElementById("judging-button");

let hackathonSchedule = document.getElementById("hackathon-schedule");
let judgingSchedule = document.getElementById("judging-schedule");
judgingSchedule.style.display = "none";

hackathonButton.onclick = function() {
    hackathonSchedule.style.display = "grid";
    judgingSchedule.style.display = "none";
    hackathonButton.classList.add("active");
    judgingButton.classList.remove("active");
}

judgingButton.onclick = function() {
    hackathonSchedule.style.display = "none";
    judgingSchedule.style.display = "grid";
    hackathonButton.classList.remove("active");
    judgingButton.classList.add("active");
}

// allow parallax only on desktop view
function parallax() {
  if (window.innerWidth > 670) {
    window.addEventListener("scroll", function (e) {
      const target = document.querySelectorAll(".mountains");

      var index = 0,
        length = target.length;

      for (index; index < length; index++) {
        var pos = window.pageYOffset * target[index].dataset.scroll;

        target[index].style.transform = "translate3d(0px, " + pos + "px, 0px)";
      }
    });
  }
}

function blendColors(colorA, colorB, amount) {
  const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16));
  const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16));
  const r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
  const g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
  const b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
  return '#' + r + g + b;
}

function setBackground() {
  var date = new Date();
  var current_hour = date.getHours();
  // start at Noon
  //Debug
  //current_hour= 24;
  current_hour = Math.abs(current_hour-12);
  // Hacky way to get style sheet
  var styleSheet = document.styleSheets[2];
  // start: #FFC7BD
  // end: #17214C
  var color = blendColors('#FFC7BD', '#17214C', current_hour/12);
  styleSheet.insertRule('.dynamic-color { background: linear-gradient(360deg,' + color +' 69.86%, rgba(255, 199, 189, 0) 106.09%);', 0);}

// window.onresize = function(){ location.reload() }
// load function on window resize
window.onresize = parallax();

window.onload = function(){
   setBackground();
   star1.play();
   setTimeout(function(){ star5.play();}, 300);
   setTimeout(function(){ star2.play();}, 600);
   setTimeout(function(){ star3.play();}, 900);
   setTimeout(function(){ star6.play();}, 1200);
   setTimeout(function(){ star4.play();}, 1500);
}
