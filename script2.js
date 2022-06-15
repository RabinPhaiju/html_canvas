const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width = 400
let height = width/1.428571428571;

console.log(width, height);

function undraw() {
    ctx.clearRect(0, 0, 800, 600);
}

function draw(width) {
    height = width/1.428571428571;
// triangle
let triangle1 = new Path2D();
triangle1.moveTo(0, 0);
triangle1.lineTo(width/2, 0);
triangle1.lineTo(width/4, height/4);
triangle1.lineTo(0, 0);
ctx.fillStyle = 'purple';
ctx.fill(triangle1);

let triangle2 = new Path2D();
triangle2.moveTo(width/2, 0);
triangle2.lineTo(width, 0);
triangle2.lineTo(width/4*3, height/4);
triangle2.lineTo(width/2, 0);
ctx.fillStyle = 'red';
ctx.fill(triangle2);

let triangle3 = new Path2D();
triangle3.moveTo(width, 0);
triangle3.lineTo(width, height/2);
triangle3.lineTo(width/4*3, height/4);
triangle3.lineTo(width, 0);
ctx.fillStyle = 'green';
ctx.fill(triangle3);

let triangle4 = new Path2D();
triangle4.moveTo(width, height/2);
triangle4.lineTo(width, height);
triangle4.lineTo(width/2/2*3, height/4*3);
triangle4.lineTo(width, height/2);
ctx.fillStyle = 'blue';
ctx.fill(triangle4);

let triangle5 = new Path2D();
triangle5.moveTo(width, height);
triangle5.lineTo(width/2, height);
triangle5.lineTo(width/2/2*3, height/4*3);
triangle5.lineTo(width, height);
ctx.fillStyle = 'orange';
ctx.fill(triangle5);

let triangle6 = new Path2D();
triangle6.moveTo(width/2, height);
triangle6.lineTo(0, height);
triangle6.lineTo(width/4, height/4*3);
triangle6.lineTo(width/2, height);
ctx.fillStyle = 'skyblue';
ctx.fill(triangle6);

let triangle7 = new Path2D();
triangle7.moveTo(0, height);
triangle7.lineTo(0, height/2);
triangle7.lineTo(width/4, height/4*3);
triangle7.lineTo(0, height);
ctx.fillStyle = 'blue';
ctx.fill(triangle7);

let triangle8 = new Path2D();
triangle8.moveTo(0, height/2);
triangle8.lineTo(0, 0);
triangle8.lineTo(width/4, height/4);
triangle8.lineTo(0, height/2);
ctx.fillStyle = 'pink';
ctx.fill(triangle8);

// trapizoid
let triangle9 = new Path2D();
triangle9.moveTo(0, height/2);
triangle9.lineTo(width/4, height/4);
triangle9.lineTo(width/2, height/2);
triangle9.lineTo(width/4, height/4*3);
triangle9.lineTo(0, height/2);
ctx.fillStyle = 'lightgreen';
ctx.fill(triangle9);

let triangle10 = new Path2D();
triangle10.moveTo(width/4, height/4);
triangle10.lineTo(width/2, 0);
triangle10.lineTo(width/4*3, height/4);
triangle10.lineTo(width/2, height/2);
triangle10.lineTo(width/4, height/4);
ctx.fillStyle = 'lightblue';
ctx.fill(triangle10);


let triangle11 = new Path2D();
triangle11.moveTo(width/2, height/2);
triangle11.lineTo(width/4*3, height/4);
triangle11.lineTo(width, height/2);
triangle11.lineTo(width/4*3, height/4*3);
triangle11.lineTo(width/2, height/2);
ctx.fillStyle = 'purple';
ctx.fill(triangle11);


let triangle12 = new Path2D();
triangle12.moveTo(width/4, height/4*3);
triangle12.lineTo(width/2, height/2);
triangle12.lineTo(width/4*3, height/4*3);
triangle12.lineTo(width/2, height);
triangle12.lineTo(width/4, height/4*3);
ctx.fillStyle = 'pink';
ctx.fill(triangle12);


canvas.addEventListener('click', function(e) {
    if(ctx.isPointInPath(triangle1, e.offsetX, e.offsetY)) {
        console.log('purple1');
    }else if(ctx.isPointInPath(triangle2, e.offsetX, e.offsetY)) {
        console.log('red');
    }else if(ctx.isPointInPath(triangle3, e.offsetX, e.offsetY)) {
        console.log('green');
    }else if(ctx.isPointInPath(triangle4, e.offsetX, e.offsetY)) {
        console.log('blue1');
    }else if(ctx.isPointInPath(triangle5, e.offsetX, e.offsetY)) {
        console.log('orange');
    }else if(ctx.isPointInPath(triangle6, e.offsetX, e.offsetY)) {
        console.log('skyblue1');
    }else if(ctx.isPointInPath(triangle7, e.offsetX, e.offsetY)) {
        console.log('blue2');
    }else if(ctx.isPointInPath(triangle8, e.offsetX, e.offsetY)) {
        console.log('pink1');
    }else if(ctx.isPointInPath(triangle9, e.offsetX, e.offsetY)) {
        console.log('lightgreen');
    }else if(ctx.isPointInPath(triangle10, e.offsetX, e.offsetY)) {
        console.log('lightblue');
    }else if(ctx.isPointInPath(triangle11, e.offsetX, e.offsetY)) {
        console.log('purple2');
    }else if(ctx.isPointInPath(triangle12, e.offsetX, e.offsetY)) {
        console.log('pink2');
    }
   
})
}

draw(width)

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
    undraw();
  draw(400*this.value/50);
}