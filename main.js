var noseX=0
var noseY=0
var leftwristX=0
var leftwristY=0
var rightwristX=0
var rightwristY=0
var difference=0
function setup(){
canvas=createCanvas(600,500)
canvas.center()
video=createCapture(VIDEO)
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose', gotposes);
}
function modelloaded(){
    console.log("poseNet is initialize")
}
function gotposes(results){
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
leftwristX=results[0].pose.leftWrist.x
leftwristy=results[0].pose.leftWrist.y
rightwristX=results[0].pose.rightWrist.x
rightwristy=results[0].pose.rightWrist.y
difference=floor(leftwristX-rightwristX)
    }
    function draw(){
        background("grey")
        fill("black")
        textSize(difference)
        text("peter",noseX,noseY)
        }
