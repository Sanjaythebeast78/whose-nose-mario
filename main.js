nosex=""
nosey=""
function preload() {
	world_start = loadSound("world_start.wav");
	jump= loadSound("jump.wav");
	mariocoin= loadSound("coin.wav")
	mariogameover= loadSound("gameover.wav")
	mariodie= loadSound("mariodie.wav")
	mariokill= loadSound("kick.wav")

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')

	video=createCapture(VIDEO)
	video.size(600,300)
	video.parent("game_console")
	instializeInSetup(mario);
	poseNet=ml5.poseNet(video,modelloaded)
poseNet.on("pose",gotpose)
}
function gotpose(results){
if (results.length > 0){
console.log(results)
nosex=results[0].pose.nose.x
nosey=results[0].pose.nose.y
}
}
function modelloaded(){
	console.log("Posenet on")
}

function draw() {
	game()
}






