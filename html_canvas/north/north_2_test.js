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
let triangle13 = new Path2D();
let triangle14 = new Path2D();
let triangle15 = new Path2D();
let triangle16 = new Path2D();
let triangle17 = new Path2D();
let triangle18 = new Path2D();
let triangle19 = new Path2D();
let triangle20 = new Path2D();
let triangle21 = new Path2D();
let triangle22 = new Path2D();
let triangle23 = new Path2D();
let triangle24 = new Path2D();

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
    triangle13 = new Path2D();
    triangle14 = new Path2D();
    triangle15 = new Path2D();
    triangle16 = new Path2D();
    triangle17 = new Path2D();
    triangle18 = new Path2D();
    triangle19 = new Path2D();
    triangle20 = new Path2D();
    triangle21 = new Path2D();
    triangle22 = new Path2D();
    triangle23 = new Path2D();
    triangle24 = new Path2D();
    draw(canvas.width);
}

let width = canvas.width;
// console.table(width)

function draw(width) {
    height = width/1.428571428571;

ctx.strokeStyle = 'black';
// triangle
triangle1.moveTo(0, 0);
triangle1.lineTo(width/3, 0);
triangle1.lineTo(width/3, height/10);
triangle1.lineTo(width/10, height/10);
triangle1.lineTo(0, 0);
ctx.fillStyle = 'purple';
ctx.fill(triangle1);

triangle2.moveTo(width/3, 0);
triangle2.lineTo(width/3*2, 0);
triangle2.lineTo(width/3*2, height/10);
triangle2.lineTo(width/3, height/10);
triangle2.lineTo(width/3, 0);
ctx.fillStyle = 'red';
ctx.fill(triangle2);

triangle3.moveTo(width/3*2, 0);
triangle3.lineTo(width, 0);
triangle3.lineTo(width-width/10, height/10);
triangle3.lineTo(width/3*2, height/10);
triangle3.lineTo(width/3*2, 0);
ctx.fillStyle = 'green';
ctx.fill(triangle3);

triangle4.moveTo(width, 0);
triangle4.lineTo(width, height/3);
triangle4.lineTo(width-width/10, height/3);
triangle4.lineTo(width-width/10, height/10);
triangle4.lineTo(width,0);
ctx.fillStyle = 'blue';
ctx.fill(triangle4);

triangle5.moveTo(width-width/10, height/3);
triangle5.lineTo(width, height/3);
triangle5.lineTo(width, height/3*2);
triangle5.lineTo(width-width/10, height/3*2);
triangle5.lineTo(width-width/10, height/3);
ctx.fillStyle = 'orange';
ctx.fill(triangle5);

triangle6.moveTo(width-width/10, height/3*2);
triangle6.lineTo(width, height/3*2);
triangle6.lineTo(width, height);
triangle6.lineTo(width-width/10, height-height/10);
triangle6.lineTo(width-width/10, height/3*2);
ctx.fillStyle = 'skyblue';
ctx.fill(triangle6);

triangle7.moveTo(width-width/10, height-height/10);
triangle7.lineTo(width, height);
triangle7.lineTo(width/3*2, height);
triangle7.lineTo(width/3*2, height-height/10);
triangle7.lineTo(width-width/10, height-height/10);
ctx.fillStyle = 'blue';
ctx.fill(triangle7);

triangle8.moveTo(width/3*2, height-height/10);
triangle8.lineTo(width/3*2, height);
triangle8.lineTo(width/3,height);
triangle8.lineTo(width/3,height-height/10);
triangle8.lineTo(width/3*2, height-height/10);
ctx.fillStyle = 'pink';
ctx.fill(triangle8);

triangle9.moveTo(width/3,height-height/10);
triangle9.lineTo(width/3,height);
triangle9.lineTo(0, height);
triangle9.lineTo(width/10, height-height/10);
triangle9.lineTo(width/3,height-height/10);
ctx.fillStyle = 'lightgreen';
ctx.fill(triangle9);

triangle10.moveTo(width/10, height-height/10);
triangle10.lineTo(0, height);
triangle10.lineTo(0, height/3*2);
triangle10.lineTo(width/10, height/3*2);
triangle10.lineTo(width/10, height-height/10);
ctx.fillStyle = 'lightblue';
ctx.fill(triangle10);

triangle11.moveTo(0, height/3*2);
triangle11.lineTo(0, height/3);
triangle11.lineTo(width/10, height/3);
triangle11.lineTo(width/10, height/3*2);
triangle11.lineTo(0, height/3*2);
ctx.fillStyle = 'purple';
ctx.fill(triangle11);

triangle12.moveTo(0,0);
triangle12.lineTo(width/10, height/10);
triangle12.lineTo(width/10, height/3);
triangle12.lineTo(0, height/3);
triangle12.lineTo(0, 0);
ctx.fillStyle = 'pink';
ctx.fill(triangle12);

// ----------------- inside ------------------

triangle13.moveTo(width/10, height/10);
triangle13.lineTo(width/2, height/10);
triangle13.lineTo(width*3/10, height*3/10);
triangle13.lineTo(width/10, height/10);
ctx.fillStyle = 'yellow';
ctx.fill(triangle13);

triangle14.moveTo(width/2, height/10);
triangle14.lineTo(width-width/10, height/10);
triangle14.lineTo(width-width*3/10, height*3/10);
triangle14.lineTo(width/2, height/10);
ctx.fillStyle = 'orange';
ctx.fill(triangle14);

triangle15.moveTo(width-width/10, height/10);
triangle15.lineTo(width-width/10, height/2);
triangle15.lineTo(width-width*3/10, height*3/10);
triangle15.lineTo(width-width/10, height/10);
ctx.fillStyle = 'green';
ctx.fill(triangle15);

triangle16.moveTo(width-width/10, height/2);
triangle16.lineTo(width-width/10, height-height/10);
triangle16.lineTo(width-width*3/10, height-height*3/10);
triangle16.lineTo(width-width/10, height/2);
ctx.fillStyle = 'pink';
ctx.fill(triangle16);

triangle17.moveTo(width-width*3/10, height-height*3/10);
triangle17.lineTo(width-width/10, height-height/10);
triangle17.lineTo(width/2, height-height/10);
triangle17.lineTo(width-width*3/10, height-height*3/10);
ctx.fillStyle = 'red';
ctx.fill(triangle17);

triangle18.moveTo(width/2, height-height/10);
triangle18.lineTo(width/10, height-height/10);
triangle18.lineTo(width*3/10, height-height*3/10);
triangle18.lineTo(width/2, height-height/10);
ctx.fillStyle = 'green';
ctx.fill(triangle18);

triangle19.moveTo(width*3/10, height-height*3/10);
triangle19.lineTo(width/10, height-height/10);
triangle19.lineTo(width/10, height/2);
triangle19.lineTo(width*3/10, height-height*3/10);
ctx.fillStyle = 'pink';
ctx.fill(triangle19);

triangle20.moveTo(width/10, height/2);
triangle20.lineTo(width*3/10, height*3/10);
triangle20.lineTo(width/10, height/10);
triangle20.lineTo(width/10, height/2);
ctx.fillStyle = 'red';
ctx.fill(triangle20);

triangle21.moveTo(width/2, height/10);
triangle21.lineTo(width-width*3/10, height*3/10);
triangle21.lineTo(width/2, height/2);
triangle21.lineTo(width*3/10, height*3/10);
triangle21.lineTo(width/2, height/10);
ctx.fillStyle = 'pink';
ctx.fill(triangle21);

triangle22.moveTo(width/2, height/2);
triangle22.lineTo(width-width*3/10, height*3/10);
triangle22.lineTo(width-width/10, height/2);
triangle22.lineTo(width-width*3/10, height-height*3/10);
triangle22.lineTo(width/2, height/2);
ctx.fillStyle = 'gray';
ctx.fill(triangle22);

triangle23.moveTo(width/2, height-height/10);
triangle23.lineTo(width-width*3/10, height-height*3/10);
triangle23.lineTo(width/2, height/2);
triangle23.lineTo(width*3/10, height-height*3/10);
triangle23.lineTo(width/2, height-height/10);
ctx.fillStyle = 'skyblue';
ctx.fill(triangle23);

triangle24.moveTo(width/2, height/2);
triangle24.lineTo(width*3/10, height*3/10);
triangle24.lineTo(width/10, height/2);
triangle24.lineTo(width*3/10, height-height*3/10);
triangle24.lineTo(width/2, height/2);
ctx.fillStyle = 'orange';
ctx.fill(triangle24);
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

    else if(ctx.isPointInPath(triangle13, e.offsetX, e.offsetY)) {
        console.log('yellow');
    }else if(ctx.isPointInPath(triangle14, e.offsetX, e.offsetY)) {
        console.log('orange');
    }else if(ctx.isPointInPath(triangle15, e.offsetX, e.offsetY)) {
        console.log('green');
    }else if(ctx.isPointInPath(triangle16, e.offsetX, e.offsetY)) {
        console.log('pink3');
    }else if(ctx.isPointInPath(triangle17, e.offsetX, e.offsetY)) {
        console.log('red');
    }else if(ctx.isPointInPath(triangle18, e.offsetX, e.offsetY)) {
        console.log('green4');
    }else if(ctx.isPointInPath(triangle19, e.offsetX, e.offsetY)) {
        console.log('pink4');
    }else if(ctx.isPointInPath(triangle20, e.offsetX, e.offsetY)) {
        console.log('red2');
    }else if(ctx.isPointInPath(triangle21, e.offsetX, e.offsetY)) {
        console.log('pink21');
    }else if(ctx.isPointInPath(triangle22, e.offsetX, e.offsetY)) {
        console.log('gray');
    }else if(ctx.isPointInPath(triangle23, e.offsetX, e.offsetY)) {
        console.log('skyblue');
    }else if(ctx.isPointInPath(triangle24, e.offsetX, e.offsetY)) {
        console.log('orange22');
    }
   
})

draw(width)