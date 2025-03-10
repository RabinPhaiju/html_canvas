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
let triangle25 = new Path2D();
let triangle26 = new Path2D();
let triangle27 = new Path2D();
let triangle28 = new Path2D();
let triangle29 = new Path2D();
let triangle30 = new Path2D();
let triangle31 = new Path2D();
let triangle32 = new Path2D();
let triangle33 = new Path2D();
let triangle34 = new Path2D();
let triangle35 = new Path2D();
let triangle36 = new Path2D();

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
    triangle25 = new Path2D();
    triangle26 = new Path2D();
    triangle27 = new Path2D();
    triangle28 = new Path2D();
    triangle29 = new Path2D();
    triangle30 = new Path2D();
    triangle31 = new Path2D();
    triangle32 = new Path2D();
    triangle33 = new Path2D();
    triangle34 = new Path2D();
    triangle35 = new Path2D();
    triangle36 = new Path2D();
    draw(canvas.width);
}

let width = canvas.width;
// console.table(width)

function draw(width) {
    height = width/1.428571428571;

ctx.fillStyle = 'black';
// triangle
triangle1.moveTo(0, 0);
triangle1.lineTo(width/2.67, 0);
triangle1.lineTo(width/2.67, height/10);
triangle1.lineTo(width/11, height/10);
triangle1.lineTo(0, 0);
ctx.fillStyle = 'purple';
ctx.fill(triangle1);

triangle2.moveTo(width/2.67, 0);
triangle2.lineTo(width/3.2*2, 0);
triangle2.lineTo(width/3.2*2, height/10);
triangle2.lineTo(width/2.67, height/10);
triangle2.lineTo(width/2.67, 0);
ctx.fillStyle = 'red';
ctx.fill(triangle2);

triangle3.moveTo(width/3.2*2, 0);
triangle3.lineTo(width, 0);
triangle3.lineTo(width-width/11, height/10);
triangle3.lineTo(width/3.2*2, height/10);
triangle3.lineTo(width/3.2*2, 0);
ctx.fillStyle = 'green';
ctx.fill(triangle3);

triangle4.moveTo(width, 0);
triangle4.lineTo(width, height/2.6);
triangle4.lineTo(width-width/11, height/2.6);
triangle4.lineTo(width-width/11, height/10);
triangle4.lineTo(width,0);
ctx.fillStyle = 'blue';
ctx.fill(triangle4);

triangle5.moveTo(width-width/11, height/2.6);
triangle5.lineTo(width, height/2.6);
triangle5.lineTo(width, height/3.25*2);
triangle5.lineTo(width-width/11, height/3.25*2);
triangle5.lineTo(width-width/11, height/2.6);
ctx.fillStyle = 'orange';
ctx.fill(triangle5);

triangle6.moveTo(width-width/11, height/3.25*2);
triangle6.lineTo(width, height/3.25*2);
triangle6.lineTo(width, height);
triangle6.lineTo(width-width/11, height-height/10);
triangle6.lineTo(width-width/11, height/3.25*2);
ctx.fillStyle = 'skyblue';
ctx.fill(triangle6);

triangle7.moveTo(width-width/11, height-height/10);
triangle7.lineTo(width, height);
triangle7.lineTo(width/3.2*2, height);
triangle7.lineTo(width/3.2*2, height-height/10);
triangle7.lineTo(width-width/11, height-height/10);
ctx.fillStyle = 'blue';
ctx.fill(triangle7);

triangle8.moveTo(width/3.2*2, height-height/10);
triangle8.lineTo(width/3.2*2, height);
triangle8.lineTo(width/2.67,height);
triangle8.lineTo(width/2.67,height-height/10);
triangle8.lineTo(width/3.2*2, height-height/10);
ctx.fillStyle = 'pink';
ctx.fill(triangle8);

triangle9.moveTo(width/2.67,height-height/10);
triangle9.lineTo(width/2.67,height);
triangle9.lineTo(0, height);
triangle9.lineTo(width/11, height-height/10);
triangle9.lineTo(width/2.67,height-height/10);
ctx.fillStyle = 'lightgreen';
ctx.fill(triangle9);

triangle10.moveTo(width/11, height-height/10);
triangle10.lineTo(0, height);
triangle10.lineTo(0, height/3.25*2);
triangle10.lineTo(width/11, height/3.25*2);
triangle10.lineTo(width/11, height-height/10);
ctx.fillStyle = 'lightblue';
ctx.fill(triangle10);

triangle11.moveTo(0, height/3.25*2);
triangle11.lineTo(0, height/2.6);
triangle11.lineTo(width/11, height/2.6);
triangle11.lineTo(width/11, height/3.25*2);
triangle11.lineTo(0, height/3.25*2);
ctx.fillStyle = 'purple';
ctx.fill(triangle11);

triangle12.moveTo(0,0);
triangle12.lineTo(width/11, height/10);
triangle12.lineTo(width/11, height/2.6);
triangle12.lineTo(0, height/2.6);
triangle12.lineTo(0, 0);
ctx.fillStyle = 'pink';
ctx.fill(triangle12);

// ------------ inside level-1 --------------// triangle
triangle13.moveTo(width/11, height/10);
triangle13.lineTo(width/2.67, height/10);
triangle13.lineTo(width/2.67, height/10*2);
triangle13.lineTo(width/11*2, height/10*2);
triangle13.lineTo(width/11, height/10);
ctx.fillStyle = 'green';
ctx.fill(triangle13);

triangle14.moveTo(width/2.67, height/10);
triangle14.lineTo(width/3.2*2, height/10);
triangle14.lineTo(width/3.2*2, height/10*2);
triangle14.lineTo(width/2.67, height/10*2);
triangle14.lineTo(width/2.67, height/10);
ctx.fillStyle = 'blue';
ctx.fill(triangle14);

triangle15.moveTo(width/3.2*2, height/10);
triangle15.lineTo(width-width/11, height/10);
triangle15.lineTo(width-width/11*2, height/10*2);
triangle15.lineTo(width/3.2*2, height/10*2);
triangle15.lineTo(width/3.2*2, height/10);
ctx.fillStyle = 'red';
ctx.fill(triangle15);

triangle16.moveTo(width-width/11, height/10);
triangle16.lineTo(width-width/11, height/2.6);
triangle16.lineTo(width-width/11*2, height/2.6);
triangle16.lineTo(width-width/11*2, height/10*2);
triangle16.lineTo(width-width/11, height/10);
ctx.fillStyle = 'gray';
ctx.fill(triangle16);

triangle17.moveTo(width-width/11, height/2.6);
triangle17.lineTo(width-width/11, height/3.25*2);
triangle17.lineTo(width-width/11*2, height/3.25*2);
triangle17.lineTo(width-width/11*2, height/2.6);
triangle17.lineTo(width-width/11, height/2.6);
ctx.fillStyle = 'blue';
ctx.fill(triangle17);

triangle18.moveTo(width-width/11, height/3.25*2);
triangle18.lineTo(width-width/11*2, height/3.25*2);
triangle18.lineTo(width-width/11*2, height-height/10*2);
triangle18.lineTo(width-width/11, height-height/10);
triangle18.lineTo(width-width/11, height/3.25*2);
ctx.fillStyle = 'red';
ctx.fill(triangle18);

triangle19.moveTo(width-width/11, height-height/10);
triangle19.lineTo(width-width/11*2, height-height/10*2);
triangle19.lineTo(width/3.2*2, height-height/10*2);
triangle19.lineTo(width/3.2*2, height-height/10);
triangle19.lineTo(width-width/11, height-height/10);
ctx.fillStyle = 'yellow';
ctx.fill(triangle19);

triangle20.moveTo(width/3.2*2, height-height/10);
triangle20.lineTo(width/3.2*2, height-height/10*2);
triangle20.lineTo(width/2.67,height-height/10*2);
triangle20.lineTo(width/2.67,height-height/10);
triangle20.lineTo(width/3.2*2, height-height/10);
ctx.fillStyle = 'red';
ctx.fill(triangle20);

triangle21.moveTo(width/2.67,height-height/10);
triangle21.lineTo(width/2.67,height-height/10*2);
triangle21.lineTo(width/11*2, height-height/10*2);
triangle21.lineTo(width/11, height-height/10);
triangle21.lineTo(width/2.67,height-height/10);
ctx.fillStyle = 'blue';
ctx.fill(triangle21);

triangle22.moveTo(width/11, height-height/10);
triangle22.lineTo(width/11*2, height-height/10*2);
triangle22.lineTo(width/11*2, height/3.25*2);
triangle22.lineTo(width/11, height/3.25*2);
triangle22.lineTo(width/11, height-height/10);
ctx.fillStyle = 'red';
ctx.fill(triangle22);

triangle23.moveTo(width/11, height/2.6);
triangle23.lineTo(width/11*2, height/2.6);
triangle23.lineTo(width/11*2, height/3.25*2);
triangle23.lineTo(width/11, height/3.25*2);
triangle23.lineTo(width/11, height/2.6);
ctx.fillStyle = 'yellow';
ctx.fill(triangle23);

triangle24.moveTo(width/11*2, height/10*2);
triangle24.lineTo(width/11*2, height/2.6);
triangle24.lineTo(width/11, height/2.6);
triangle24.lineTo(width/11, height/10);
triangle24.lineTo(width/11*2, height/10*2);
ctx.fillStyle = 'red';
ctx.fill(triangle24);

// ----------------- inside level-2 ------------------
// reference
// ctx.moveTo(0, height/2);
// ctx.lineTo(width, height/2);
// ctx.moveTo(0, height/10*3.5);
// ctx.lineTo(width, height/10*3.5);
// ctx.moveTo(0, height-height/10*3.5);
// ctx.lineTo(width, height-height/10*3.5);

// ctx.moveTo(width/2, 0);
// ctx.lineTo(width/2, height);
// ctx.moveTo(width/8*2.72, 0);
// ctx.lineTo(width/8*2.72, height);
// ctx.moveTo(width-width/8*2.72, 0);
// ctx.lineTo(width-width/8*2.72, height);

// ctx.moveTo(0,0);
// ctx.lineTo(width, height);
// ctx.moveTo(width,0);
// ctx.lineTo(0, height);

// ctx.fillStyle = 'white';
// ctx.fill();
//

triangle25.moveTo(width/11*2, height/10*2);
triangle25.lineTo(width/2, height/10*2);
triangle25.lineTo(width/8*2.72, height/10*3.5);
triangle25.lineTo(width/11*2, height/10*2);
ctx.fillStyle = 'yellow';
ctx.fill(triangle25);

triangle26.moveTo(width/2, height/10*2);
triangle26.lineTo(width-width/11*2, height/10*2);
triangle26.lineTo(width-width/8*2.72, height/10*3.5);
triangle26.lineTo(width/2, height/10*2);
ctx.fillStyle = 'orange';
ctx.fill(triangle26);

triangle27.moveTo(width-width/11*2, height/10*2);
triangle27.lineTo(width-width/11*2, height/2);
triangle27.lineTo(width-width/8*2.72, height/10*3.5);
triangle27.lineTo(width-width/11*2, height/10*2);
ctx.fillStyle = 'green';
ctx.fill(triangle27);

triangle28.moveTo(width-width/11*2, height/2);
triangle28.lineTo(width-width/11*2, height-height/10*2);
triangle28.lineTo(width-width/8*2.72, height-height/10*3.5);
triangle28.lineTo(width-width/11*2, height/2);
ctx.fillStyle = 'pink';
ctx.fill(triangle28);

triangle29.moveTo(width-width/8*2.72, height-height/10*3.5);
triangle29.lineTo(width-width/11*2, height-height/10*2);
triangle29.lineTo(width/2, height-height/10*2);
triangle29.lineTo(width-width/8*2.72, height-height/10*3.5);
ctx.fillStyle = 'red';
ctx.fill(triangle29);

triangle30.moveTo(width/2, height-height/10*2);
triangle30.lineTo(width/11*2, height-height/10*2);
triangle30.lineTo(width/8*2.72, height-height/10*3.5);
triangle30.lineTo(width/2, height-height/10*2);
ctx.fillStyle = 'green';
ctx.fill(triangle30);

triangle31.moveTo(width/11*2, height-height/10*2);
triangle31.lineTo(width/8*2.72, height-height/10*3.5);
triangle31.lineTo(width/11*2, height/2);
triangle31.lineTo(width/11*2, height-height/10*2);
ctx.fillStyle = 'pink';
ctx.fill(triangle31);

triangle32.moveTo(width/11*2, height/2);
triangle32.lineTo(width/8*2.72, height/10*3.5);
triangle32.lineTo(width/11*2, height/10*2);
triangle32.lineTo(width/11*2, height/2);
ctx.fillStyle = 'blue';
ctx.fill(triangle32);

triangle33.moveTo(width/2, height/10*2);
triangle33.lineTo(width-width/8*2.72, height/10*3.5);
triangle33.lineTo(width/2, height/2);
triangle33.lineTo(width/8*2.72, height/10*3.5);
triangle33.lineTo(width/2, height/10*2);
ctx.fillStyle = 'pink';
ctx.fill(triangle33);

triangle34.moveTo(width/2, height/2);
triangle34.lineTo(width-width/8*2.72, height/10*3.5);
triangle34.lineTo(width-width/11*2, height/2);
triangle34.lineTo(width-width/8*2.72, height-height/10*3.5);
triangle34.lineTo(width/2, height/2);
ctx.fillStyle = 'yellow';
ctx.fill(triangle34);

triangle35.moveTo(width/2, height-height/10*2);
triangle35.lineTo(width-width/8*2.72, height-height/10*3.5);
triangle35.lineTo(width/2, height/2);
triangle35.lineTo(width/8*2.72, height-height/10*3.5);
triangle35.lineTo(width/2, height-height/10*2);
ctx.fillStyle = 'blue';
ctx.fill(triangle35);

triangle36.moveTo(width/2, height/2);
triangle36.lineTo(width/8*2.72, height/10*3.5);
triangle36.lineTo(width/11*2, height/2);
triangle36.lineTo(width/8*2.72, height-height/10*3.5);
triangle36.lineTo(width/2, height/2);
ctx.fillStyle = 'red';
ctx.fill(triangle36);
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
        console.log('level-1_green');
    }else if(ctx.isPointInPath(triangle14, e.offsetX, e.offsetY)) {
        console.log('level-1_blue');
    }else if(ctx.isPointInPath(triangle15, e.offsetX, e.offsetY)) {
        console.log('level-1_red');
    }else if(ctx.isPointInPath(triangle16, e.offsetX, e.offsetY)) {
        console.log('level-1_gray');
    }else if(ctx.isPointInPath(triangle17, e.offsetX, e.offsetY)) {
        console.log('level-1_blue');
    }else if(ctx.isPointInPath(triangle18, e.offsetX, e.offsetY)) {
        console.log('level-1_red');
    }else if(ctx.isPointInPath(triangle19, e.offsetX, e.offsetY)) {
        console.log('level-1_yellow');
    }else if(ctx.isPointInPath(triangle20, e.offsetX, e.offsetY)) {
        console.log('level-1_red');
    }else if(ctx.isPointInPath(triangle21, e.offsetX, e.offsetY)) {
        console.log('level-1_blue');
    }else if(ctx.isPointInPath(triangle22, e.offsetX, e.offsetY)) {
        console.log('level-1_red');
    }else if(ctx.isPointInPath(triangle23, e.offsetX, e.offsetY)) {
        console.log('level-1_yellow');
    }else if(ctx.isPointInPath(triangle24, e.offsetX, e.offsetY)) {
        console.log('level-1_red');
    }

    else if(ctx.isPointInPath(triangle25, e.offsetX, e.offsetY)) {
        console.log('level-in_yellow');
    }else if(ctx.isPointInPath(triangle26, e.offsetX, e.offsetY)) {
        console.log('level-in_orange');
    }else if(ctx.isPointInPath(triangle27, e.offsetX, e.offsetY)) {
        console.log('level-in_green');
    }else if(ctx.isPointInPath(triangle28, e.offsetX, e.offsetY)) {
        console.log('level-in_pink1');
    }else if(ctx.isPointInPath(triangle29, e.offsetX, e.offsetY)) {
        console.log('level-in_red');
    }else if(ctx.isPointInPath(triangle30, e.offsetX, e.offsetY)) {
        console.log('level-in_green');
    }else if(ctx.isPointInPath(triangle31, e.offsetX, e.offsetY)) {
        console.log('level-in_pink2');
    }else if(ctx.isPointInPath(triangle32, e.offsetX, e.offsetY)) {
        console.log('level-in_blue1');
    }else if(ctx.isPointInPath(triangle33, e.offsetX, e.offsetY)) {
        console.log('level-in_pink3');
    }else if(ctx.isPointInPath(triangle34, e.offsetX, e.offsetY)) {
        console.log('level-in_yellow2');
    }else if(ctx.isPointInPath(triangle35, e.offsetX, e.offsetY)) {
        console.log('level-in_blue2');
    }else if(ctx.isPointInPath(triangle36, e.offsetX, e.offsetY)) {
        console.log('level-in_red2');
    }
   
})

draw(width)