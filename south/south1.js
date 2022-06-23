let canvas = document.getElementById('canvas');
let canvas_parnet = document.getElementsByClassName('canvas-parent')[0];

const ctx = canvas.getContext('2d');

canvas.width = canvas_parnet.clientWidth-20;
canvas.height = canvas.width/1.428571428571;

let triangle1 = new Path2D();
let triangle2 = new Path2D();
let triangle3 = new Path2D();
let triangle4 = new Path2D();
let triangle5 = new Path2D();
let triangle6 = new Path2D();
let triangle7 = new Path2D();
let triangle8 = new Path2D();
let triangle9 = new Path2D();
let triangle10 = new Path2D();
let triangle11 = new Path2D();
let triangle12 = new Path2D();

window.onresize = function() {
    // console.log('resize',window.innerWidth);
    canvas.width = canvas_parnet.clientWidth-20;
    canvas.height = canvas.width/1.428571428571;

    ctx.clearRect(0, 0, ctx.width, ctx.height);
    triangle1 = new Path2D();
    triangle2 = new Path2D();
    triangle3 = new Path2D();
    triangle4 = new Path2D();
    triangle5 = new Path2D();
    triangle6 = new Path2D();
    triangle7 = new Path2D();
    triangle8 = new Path2D();
    triangle9 = new Path2D();
    triangle10 = new Path2D();
    triangle11 = new Path2D();
    triangle12 = new Path2D();
    draw(canvas.width);
}

let width = canvas.width;
// console.table(width)

function draw(width) {
    height = width/1.428571428571;
// triangle
triangle1.moveTo(0, 0);
triangle1.lineTo(width/4, 0);
triangle1.lineTo(width/4, height/4);
triangle1.lineTo(0, height/4);
triangle1.lineTo(0, 0);
ctx.strokeStyle = 'purple';
ctx.stroke(triangle1);

triangle2.moveTo(width/4, 0);
triangle2.lineTo(width/2, 0);
triangle2.lineTo(width/2, height/4);
triangle2.lineTo(width/4, height/4);
triangle2.lineTo(width/4, 0);
ctx.strokeStyle = 'red';
ctx.stroke(triangle2);

triangle3.moveTo(width/2, 0);
triangle3.lineTo(width/4*3, 0);
triangle3.lineTo(width/4*3, height/4);
triangle3.lineTo(width/2, height/4);
triangle3.lineTo(width/2, 0);
ctx.strokeStyle = 'green';
ctx.stroke(triangle3);

triangle4.moveTo(width/4*3, 0);
triangle4.lineTo(width, 0);
triangle4.lineTo(width, height/4);
triangle4.lineTo(width/4*3, height/4);
triangle4.lineTo(width/4*3, 0);
ctx.strokeStyle = 'blue';
ctx.stroke(triangle4);

triangle5.moveTo(width/4*3, height/4);
triangle5.lineTo(width, height/4);
triangle5.lineTo(width, height/2);
triangle5.lineTo(width/4*3, height/2);
triangle5.lineTo(width/4*3, height/4);
ctx.strokeStyle = 'orange';
ctx.stroke(triangle5);

triangle6.moveTo(width/4*3, height/2);
triangle6.lineTo(width, height/2);
triangle6.lineTo(width, height/4*3);
triangle6.lineTo(width/4*3, height/4*3);
triangle6.lineTo(width/4*3, height/2);
ctx.strokeStyle = 'skyblue';
ctx.stroke(triangle6);

triangle7.moveTo(width/4*3, height/4*3);
triangle7.lineTo(width, height/4*3);
triangle7.lineTo(width, height);
triangle7.lineTo(width/4*3, height);
triangle7.lineTo(width/4*3, height/4*3);
ctx.strokeStyle = 'blue';
ctx.stroke(triangle7);

triangle8.moveTo(width/4*3, height);
triangle8.lineTo(width/2, height);
triangle8.lineTo(width/2, height/4*3);
triangle8.lineTo(width/4*3, height/4*3);
triangle8.lineTo(width/4*3, height);
ctx.strokeStyle = 'pink';
ctx.stroke(triangle8);

triangle9.moveTo(width/2, height/4*3);
triangle9.lineTo(width/4, height/4*3);
triangle9.lineTo(width/4, height);
triangle9.lineTo(width/2, height);
triangle9.lineTo(width/2, height/4*3);
ctx.strokeStyle = 'red';
ctx.stroke(triangle9);

triangle10.moveTo(0, height);
triangle10.lineTo(width/4, height);
triangle10.lineTo(width/4, height/4*3);
triangle10.lineTo(0, height/4*3);
triangle10.lineTo(0, height);
ctx.strokeStyle = 'lightblue';
ctx.stroke(triangle10);

triangle11.moveTo(0, height/4*3);
triangle11.lineTo(0, height/2);
triangle11.lineTo(width/4, height/2);
triangle11.lineTo(width/4, height/4*3);
triangle11.lineTo(0, height/4*3);
ctx.strokeStyle = 'purple';
ctx.stroke(triangle11);

triangle12.moveTo(0, height/2);
triangle12.lineTo(width/4, height/2);
triangle12.lineTo(width/4, height/4);
triangle12.lineTo(0, height/4);
triangle12.lineTo(0, height/2);

ctx.strokeStyle = 'pink';
ctx.stroke(triangle12);
}

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

draw(width)