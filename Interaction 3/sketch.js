let angle = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
}
function draw() {
 background(64);
strokeWeight(1);
fill(255)
stroke(0)

//body
push();
    translate(300 ,150);
    rotate(angle);
rect(0, 10, 100, 180, 35,35,8,8);
    pop();
  angle++;


//cap
push();
    translate(327 ,130);
    rotate(angle);
rect(0,0,44,20,5,5,2,2);
    pop();
  angle++;


//toptube
rect(340,90,14,30);

rect(332,120,32,10,3,3,1,1);
rect(337,80,20,10);

rect(334,74,49,6);


//tube
rect(340,150,18,25);
rect(343,175,12,16);
rect(344,191,10,52);
fill(224)

push();
    translate(300 ,200);
    rotate(angle);
    rect(0,0, 100, 130, 1,1,8,8);
    pop();
  angle++;


fill(224)
stroke(160)
rect(344,200,10,120);













}
