var captAndersen;
var myFrame = 0;

function setup() {
  createCanvas(640,480);
  captAndersen = loadImage("https://i.imgur.com/IFgUzIt.png");
  var json = {test: "hello", dubs: "yoyo"}
  httpPost("data.json","json",json)
  myjson = loadJSON("data.json")
  console.log(myjson)
}

function draw() {
  background(200);
  if (frameCount%10 === 0) {
    myFrame++;
  }
  image(captAndersen, 200,200, 42,55, 42*(myFrame%14),0,42,55);
  text(myFrame,200,300)
}