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
        
// triangle
triangle1.moveTo(0, 0);
triangle1.lineTo(width/3, 0);
triangle1.lineTo(width/3, height/9);
triangle1.lineTo(width/10, height/9);
triangle1.lineTo(0, 0);
ctx.strokeStyle = 'purple';
ctx.stroke(triangle1);

triangle2.moveTo(width/3, 0);
triangle2.lineTo(width/3*2, 0);
triangle2.lineTo(width/3*2, height/9);
triangle2.lineTo(width/3, height/9);
triangle2.lineTo(width/3, 0);
ctx.strokeStyle = 'red';
ctx.stroke(triangle2);

triangle3.moveTo(width/3*2, 0);
triangle3.lineTo(width, 0);
triangle3.lineTo(width-width/10, height/9);
triangle3.lineTo(width/3*2, height/9);
triangle3.lineTo(width/3*2, 0);
ctx.strokeStyle = 'green';
ctx.stroke(triangle3);

triangle4.moveTo(width, 0);
triangle4.lineTo(width, height/3);
triangle4.lineTo(width-width/10, height/3);
triangle4.lineTo(width-width/10, height/9);
triangle4.lineTo(width,0);
ctx.strokeStyle = 'blue';
ctx.stroke(triangle4);

triangle5.moveTo(width-width/10, height/3);
triangle5.lineTo(width, height/3);
triangle5.lineTo(width, height/3*2);
triangle5.lineTo(width-width/10, height/3*2);
triangle5.lineTo(width-width/10, height/3);
ctx.strokeStyle = 'orange';
ctx.stroke(triangle5);

triangle6.moveTo(width-width/10, height/3*2);
triangle6.lineTo(width, height/3*2);
triangle6.lineTo(width, height);
triangle6.lineTo(width-width/10, height-height/9);
triangle6.lineTo(width-width/10, height/3*2);
ctx.strokeStyle = 'skyblue';
ctx.stroke(triangle6);

triangle7.moveTo(width-width/10, height-height/9);
triangle7.lineTo(width, height);
triangle7.lineTo(width/3*2, height);
triangle7.lineTo(width/3*2, height-height/9);
triangle7.lineTo(width-width/10, height-height/9);
ctx.strokeStyle = 'blue';
ctx.stroke(triangle7);

triangle8.moveTo(width/3*2, height-height/9);
triangle8.lineTo(width/3*2, height);
triangle8.lineTo(width/3,height);
triangle8.lineTo(width/3,height-height/9);
triangle8.lineTo(width/3*2, height-height/9);
ctx.strokeStyle = 'pink';
ctx.stroke(triangle8);

triangle9.moveTo(width/3,height-height/9);
triangle9.lineTo(width/3,height);
triangle9.lineTo(0, height);
triangle9.lineTo(width/10, height-height/9);
triangle9.lineTo(width/3,height-height/9);
ctx.strokeStyle = 'lightgreen';
ctx.stroke(triangle9);

triangle10.moveTo(width/10, height-height/9);
triangle10.lineTo(0, height);
triangle10.lineTo(0, height/3*2);
triangle10.lineTo(width/10, height/3*2);
triangle10.lineTo(width/10, height-height/9);
ctx.strokeStyle = 'lightblue';
ctx.stroke(triangle10);

triangle11.moveTo(0, height/3*2);
triangle11.lineTo(0, height/3);
triangle11.lineTo(width/10, height/3);
triangle11.lineTo(width/10, height/3*2);
triangle11.lineTo(0, height/3*2);
ctx.strokeStyle = 'purple';
ctx.stroke(triangle11);

triangle12.moveTo(0,0);
triangle12.lineTo(width/10, height/9);
triangle12.lineTo(width/10, height/3);
triangle12.lineTo(0, height/3);
triangle12.lineTo(0, 0);
ctx.strokeStyle = 'pink';
ctx.stroke(triangle12);
// inside

triangle13.moveTo(width/10, height/9);
triangle13.lineTo(width*3/10, height/9);
triangle13.lineTo(width*3/10, height*3/10);
triangle13.lineTo(width/10, height*3/10);
triangle13.lineTo(width/10, height/9);
ctx.strokeStyle = 'green';
ctx.stroke(triangle13);

triangle14.moveTo(width*3/10, height/9);
triangle14.lineTo(width/2, height/9);
triangle14.lineTo(width/2, height*3/10);
triangle14.lineTo(width*3/10, height*3/10);
triangle14.lineTo(width*3/10, height/9);
ctx.strokeStyle = 'orange';
ctx.stroke(triangle14);

triangle15.moveTo(width/2, height/9);
triangle15.lineTo(width-width*3/10, height/9);
triangle15.lineTo(width-width*3/10, height*3/10);
triangle15.lineTo(width/2, height*3/10);
triangle15.lineTo(width/2, height/9);
ctx.strokeStyle = 'blue';
ctx.stroke(triangle15);

triangle16.moveTo(width-width*3/10, height/9);
triangle16.lineTo(width-width/10, height/9);
triangle16.lineTo(width-width/10, height*3/10);
triangle16.lineTo(width-width*3/10, height*3/10);
triangle16.lineTo(width-width*3/10, height/9);
ctx.strokeStyle = 'pink';
ctx.stroke(triangle16);

triangle17.moveTo(width-width/10, height*3/10);
triangle17.lineTo(width-width/10, height/2);
triangle17.lineTo(width-width*3/10, height/2);
triangle17.lineTo(width-width*3/10, height*3/10);
triangle17.lineTo(width-width/10, height*3/10);
ctx.strokeStyle = 'red';
ctx.stroke(triangle17);

triangle18.moveTo(width-width/10, height/2);
triangle18.lineTo(width-width/10, height-height*3/10);
triangle18.lineTo(width-width*3/10, height-height*3/10);
triangle18.lineTo(width-width*3/10, height/2);
triangle18.lineTo(width-width/10, height/2);
ctx.strokeStyle = 'green';
ctx.stroke(triangle18);

triangle19.moveTo(width-width/10, height-height*3/10);
triangle19.lineTo(width-width/10, height-height/9);
triangle19.lineTo(width-width*3/10, height-height/9);
triangle19.lineTo(width-width*3/10, height-height*3/10);
triangle19.lineTo(width-width/10, height-height*3/10);
ctx.strokeStyle = 'pink';
ctx.stroke(triangle19);

triangle20.moveTo(width-width*3/10, height-height/9);
triangle20.lineTo(width/2, height-height/9);
triangle20.lineTo(width/2, height-height*3/10);
triangle20.lineTo(width-width*3/10, height-height*3/10);
triangle20.lineTo(width-width*3/10, height-height/9);
ctx.strokeStyle = 'red';
ctx.stroke(triangle20);

triangle21.moveTo(width/2, height-height/9);
triangle21.lineTo(width*3/10, height-height/9);
triangle21.lineTo(width*3/10, height-height*3/10);
triangle21.lineTo(width/2, height-height*3/10);
triangle21.lineTo(width/2, height-height/9);
ctx.strokeStyle = 'pink';
ctx.stroke(triangle21);

triangle22.moveTo(width*3/10, height-height/9);
triangle22.lineTo(width/10, height-height/9);
triangle22.lineTo(width/10, height-height*3/10);
triangle22.lineTo(width*3/10, height-height*3/10);
triangle22.lineTo(width*3/10, height-height/9);
ctx.strokeStyle = 'red';
ctx.stroke(triangle22);

triangle23.moveTo(width/10, height-height*3/10);
triangle23.lineTo(width/10, height/2);
triangle23.lineTo(width*3/10, height/2);
triangle23.lineTo(width*3/10, height-height*3/10);
triangle23.lineTo(width/10, height-height*3/10);
ctx.strokeStyle = 'skyblue';
ctx.stroke(triangle23);

triangle24.moveTo(width/10, height/2);
triangle24.lineTo(width/10, height*3/10);
triangle24.lineTo(width*3/10, height*3/10);
triangle24.lineTo(width*3/10, height/2);
triangle24.lineTo(width/10, height/2);

ctx.strokeStyle = 'orange';
ctx.stroke(triangle24);
}

canvas.addEventListener('click', function(e) {
    if(ctx.isPointInPath(triangle1, e.offsetX, e.offsetY)) {
        console.log('1');
    }else if(ctx.isPointInPath(triangle2, e.offsetX, e.offsetY)) {
        console.log('2');
    }else if(ctx.isPointInPath(triangle3, e.offsetX, e.offsetY)) {
        console.log('3');
    }else if(ctx.isPointInPath(triangle4, e.offsetX, e.offsetY)) {
        console.log('4');
    }else if(ctx.isPointInPath(triangle5, e.offsetX, e.offsetY)) {
        console.log('5');
    }else if(ctx.isPointInPath(triangle6, e.offsetX, e.offsetY)) {
        console.log('6');
    }else if(ctx.isPointInPath(triangle7, e.offsetX, e.offsetY)) {
        console.log('7');
    }else if(ctx.isPointInPath(triangle8, e.offsetX, e.offsetY)) {
        console.log('8');
    }else if(ctx.isPointInPath(triangle9, e.offsetX, e.offsetY)) {
        console.log('9');
    }else if(ctx.isPointInPath(triangle10, e.offsetX, e.offsetY)) {
        console.log('10');
    }else if(ctx.isPointInPath(triangle11, e.offsetX, e.offsetY)) {
        console.log('11');
    }else if(ctx.isPointInPath(triangle12, e.offsetX, e.offsetY)) {
        console.log('12');
    }
    else if(ctx.isPointInPath(triangle13, e.offsetX, e.offsetY)) {
        console.log('13');
    }else if(ctx.isPointInPath(triangle14, e.offsetX, e.offsetY)) {
        console.log('14');
    }else if(ctx.isPointInPath(triangle15, e.offsetX, e.offsetY)) {
        console.log('15');
    }else if(ctx.isPointInPath(triangle16, e.offsetX, e.offsetY)) {
        console.log('16');
    }else if(ctx.isPointInPath(triangle17, e.offsetX, e.offsetY)) {
        console.log('17');
    }else if(ctx.isPointInPath(triangle18, e.offsetX, e.offsetY)) {
        console.log('18');
    }else if(ctx.isPointInPath(triangle19, e.offsetX, e.offsetY)) {
        console.log('19');
    }else if(ctx.isPointInPath(triangle20, e.offsetX, e.offsetY)) {
        console.log('20');
    }else if(ctx.isPointInPath(triangle21, e.offsetX, e.offsetY)) {
        console.log('21');
    }else if(ctx.isPointInPath(triangle22, e.offsetX, e.offsetY)) {
        console.log('22');
    }else if(ctx.isPointInPath(triangle23, e.offsetX, e.offsetY)) {
        console.log('23');
    }else if(ctx.isPointInPath(triangle24, e.offsetX, e.offsetY)) {
        console.log('24');
    }
   
})


draw(width)