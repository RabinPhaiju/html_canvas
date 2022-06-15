const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width = 400;
let height = width/1.428571428571;
// let width = canvas.width;
// let height = canvas.height;
console.log(width, height);

// // fillRect()
// ctx.fillStyle = 'red';
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = 'blue';
// ctx.fillRect(200, 20, 150, 100);

// // strokeRect()
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.strokeRect(100, 200, 150, 100);

// // clearRect()
// ctx.clearRect(25, 25, 140, 90);

// // fillText()
// ctx.font = '30px Arial';
// ctx.fillStyle = 'purple';
// ctx.fillText('Hello World', 400, 50);

// // stokeText()
// ctx.lineWidth = 1;
// ctx.strokeStyle = 'orange';
// ctx.strokeText('Hello World', 400, 100);

// Path

// Line
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 50);
// ctx.stroke();

//////////////////////////////////////////////////////

// triangle
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(100, 50);
// ctx.lineTo(75, 100);
// ctx.lineTo(50, 50);
// ctx.stroke();
// ctx.canvas.addEventListener('click', function(e) {
//     console.log(e);
// })

// create triangle
//////////////////////////////////////////////
let triangle1  = new Path2D();
triangle1.moveTo(0, 50);
triangle1.lineTo(200, 50);
triangle1.lineTo(100, 200);
triangle1.lineTo(00, 50);
ctx.fillStyle = 'green';
ctx.fill(triangle1);

let triangle2 = new Path2D();
triangle2.moveTo(200, 50);
triangle2.lineTo(400, 50);
triangle2.lineTo(300, 200);
triangle2.lineTo(200, 50);
ctx.fillStyle = 'red';
ctx.fill(triangle2);

let triangle3 = new Path2D();
triangle3.moveTo(200, 50);
triangle3.lineTo(300, 200);
triangle3.lineTo(100, 200);
triangle3.lineTo(200, 50);
ctx.fillStyle = 'blue';
ctx.fill(triangle3);


canvas.addEventListener('click', function(e) {
    if(ctx.isPointInPath(triangle1, e.offsetX, e.offsetY)) {
        console.log('green');
    }
    else if(ctx.isPointInPath(triangle2, e.offsetX, e.offsetY)) {
        console.log('red');
    }else if(ctx.isPointInPath(triangle3, e.offsetX, e.offsetY)) {
        console.log('blue');
    }
})
/////////////////////////////////////////////

// // reactangle
// ctx.beginPath();
// ctx.rect(300,50,150,100);

// // ctx.stroke();
// ctx.fillStyle = 'red';
// ctx.fill();

// // arcs
// ctx.beginPath();
// ctx.arc(100, 200, 40, 0, Math.PI, false);
// // ctx.fillStyle = 'green';
// // ctx.fill();
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(200, 200, 40, 0, Math.PI/2, false);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(300, 200, 40, 0, Math.PI*2, false);
// ctx.stroke();

// // curve
// ctx.beginPath();
// ctx.moveTo(100, 400);
// ctx.bezierCurveTo(50, 50, 250, 250, 250, 290);
// ctx.stroke();

////////////////////////////////////////////////
function undraw() {
    ctx.clearRect(0, 0, 600, 400);
}

function draw(width) {
    height = width/1.428571428571;
// triangle
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(width/2, 0);
ctx.lineTo(width/4, height/4);
ctx.lineTo(0, 0);
ctx.fillStyle = 'purple';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(width/2, 0);
ctx.lineTo(width, 0);
ctx.lineTo(width/4*3, height/4);
ctx.lineTo(width/2, 0);
ctx.fillStyle = 'red';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(width, 0);
ctx.lineTo(width, height/2);
ctx.lineTo(width/4*3, height/4);
ctx.lineTo(width, 0);
ctx.fillStyle = 'green';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(width, height/2);
ctx.lineTo(width, height);
ctx.lineTo(width/2/2*3, height/4*3);
ctx.lineTo(width, height/2);
ctx.fillStyle = 'blue';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(width, height);
ctx.lineTo(width/2, height);
ctx.lineTo(width/2/2*3, height/4*3);
ctx.lineTo(width, height);
ctx.fillStyle = 'orange';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(width/2, height);
ctx.lineTo(0, height);
ctx.lineTo(width/4, height/4*3);
ctx.lineTo(width/2, height);
ctx.fillStyle = 'skyblue';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, height);
ctx.lineTo(0, height/2);
ctx.lineTo(width/4, height/4*3);
ctx.lineTo(0, height);
ctx.fillStyle = 'lightblue';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, height/2);
ctx.lineTo(0, 0);
ctx.lineTo(width/4, height/4);
ctx.lineTo(0, height/2);
ctx.fillStyle = 'pink';
ctx.fill();
ctx.stroke();

// trapizoid
ctx.beginPath();
ctx.moveTo(0, height/2);
ctx.lineTo(width/4, height/4);
ctx.lineTo(width/2, height/2);
ctx.lineTo(width/4, height/4*3);
ctx.lineTo(0, height/2);
ctx.fillStyle = 'lightgreen';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(width/4, height/4);
ctx.lineTo(width/2, 0);
ctx.lineTo(width/4*3, height/4);
ctx.lineTo(width/2, height/2);
ctx.lineTo(width/4, height/4);
ctx.fillStyle = 'lightblue';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(width/2, height/2);
ctx.lineTo(width/4*3, height/4);
ctx.lineTo(width, height/2);
ctx.lineTo(width/4*3, height/4*3);
ctx.lineTo(width/2, height/2);
ctx.fillStyle = 'purple';
ctx.fill();
ctx.stroke();

ctx.canvas.addEventListener('blclick', function(e) {
    console.log(e.clientX, e.clientY);
    // if(e.offsetX > 0 && e.offsetX < 200 && e.offsetY > 0 && e.offsetY < 70) {
    //     console.log('1st triangle');
    // }
})



ctx.beginPath();
ctx.moveTo(width/4, height/4*3);
ctx.lineTo(width/2, height/2);
ctx.lineTo(width/4*3, height/4*3);
ctx.lineTo(width/2, height);
ctx.lineTo(width/4, height/4*3);
ctx.fillStyle = 'pink';
ctx.fill();
ctx.stroke();
}
// draw(width)

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
//     undraw();
//   draw(400*this.value/50);
// }