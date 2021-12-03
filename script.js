lhandX;


function setup(){
    canvas = createCanvas(500,500);
    canvas.position(1000,300);
    video = createCapture(VIDEO);
    video.position(200,300);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
}
function modelLoaded(){
    console.log("model loaded");
}
function gotPoses(results){
if(results[0] == null){
console.error("no data");
}else{
    console.log(results);
    
}
}