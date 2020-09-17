let boxX = 90;
let boxY = 80;
let boxZ = 74;
let speed = 1;
let boxDim = 130;
let growth = 1;


function setup() {
  createCanvas(600, 600);
}
function draw() {
 background(64);
strokeWeight(1);
fill(255)
stroke(0)

//body
rect(300, 150, 100, 180, 35,35,8,8);
//cap
rect(327,130,44,20,5,5,2,2);

//toptube
rect(340,boxX,14,30);
if (boxX > 100 || boxX < 90) {
  speed = speed*-1;
}
boxX = boxX + speed;
rect(332,120,32,10,3,3,1,1);
rect(337,boxY,20,10);
if (boxY > 110 || boxY < 0) {
  speed = speed*-1;
}
boxY = boxY + speed;
rect(334,boxZ,49,6);
if (boxZ > 120 || boxZ < 0) {
  speed = speed*-1;
}
boxZ = boxZ + speed;

//tube
rect(340,150,18,25);
rect(343,175,12,16);
rect(344,191,10,52);
fill(224)
rect(300,330, 100, -boxDim);
if (boxDim > 130 || boxDim <30) {
    growth = growth*-1;
  }
  boxDim = boxDim + growth;
fill(224)
stroke(160)
rect(344,200,10,120);













}
