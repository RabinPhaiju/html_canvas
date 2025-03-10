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
triangle1.moveTo(width/3, 0);
triangle1.lineTo(width/3*2, 0);
triangle1.lineTo(width/3*2, height/3);
triangle1.lineTo(width/3, height/3);
triangle1.lineTo(width/3, 0);
ctx.fillStyle = 'purple';
ctx.fill(triangle1);

triangle2.moveTo(0, 0);
triangle2.lineTo(width/3, 0);
triangle2.lineTo(width/3, height/3);
triangle2.lineTo(0,0);
ctx.fillStyle = 'red';
ctx.fill(triangle2);

triangle3.moveTo(0, 0);
triangle3.lineTo(0, height/3);
triangle3.lineTo(width/3, height/3);
triangle3.lineTo(0,0);
ctx.fillStyle = 'green';
ctx.fill(triangle3);

triangle4.moveTo(0, height/3);
triangle4.lineTo(0, height/3*2);
triangle4.lineTo(width/3, height/3*2);
triangle4.lineTo(width/3, height/3);
triangle4.lineTo(0, height/3);
ctx.fillStyle = 'blue';
ctx.fill(triangle4);

triangle5.moveTo(0, height/3*2);
triangle5.lineTo(0, height);
triangle5.lineTo(width/3, height/3*2);
triangle5.lineTo(0, height/3*2);
ctx.fillStyle = 'orange';
ctx.fill(triangle5);

triangle6.moveTo(0, height);
triangle6.lineTo(width/3, height);
triangle6.lineTo(width/3, height/3*2);
triangle6.lineTo(0, height);
ctx.fillStyle = 'skyblue';
ctx.fill(triangle6);

triangle7.moveTo(width/3, height);
triangle7.lineTo(width/3*2, height);
triangle7.lineTo(width/3*2, height/3*2);
triangle7.lineTo(width/3, height/3*2);
triangle7.lineTo(width/3, height);
ctx.fillStyle = 'blue';
ctx.fill(triangle7);

triangle8.moveTo(width/3*2, height);
triangle8.lineTo(width, height);
triangle8.lineTo(width/3*2, height/3*2);
triangle8.lineTo(width/3*2, height);
ctx.fillStyle = 'pink';
ctx.fill(triangle8);

triangle9.moveTo(width/3*2, height/3*2);
triangle9.lineTo(width, height);
triangle9.lineTo(width, height/3*2);
triangle9.lineTo(width/3*2, height/3*2);
ctx.fillStyle = 'red';
ctx.fill(triangle9);

triangle10.moveTo(width, height/3*2);
triangle10.lineTo(width, height/3);
triangle10.lineTo(width/3*2, height/3);
triangle10.lineTo(width/3*2, height/3*2);
triangle10.lineTo(width, height/3*2);
ctx.fillStyle = 'lightblue';
ctx.fill(triangle10);

triangle11.moveTo(width/3*2, height/3);
triangle11.lineTo(width,0);
triangle11.lineTo(width,height/3);
triangle11.lineTo(width/3*2,height/3);
ctx.fillStyle = 'red';
ctx.fill(triangle11);

triangle12.moveTo(width/3*2, height/3);
triangle12.lineTo(width,0);
triangle12.lineTo(width/3*2,0);
triangle12.lineTo(width/3*2,height/3);
ctx.fillStyle = 'pink';
ctx.fill(triangle12);
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