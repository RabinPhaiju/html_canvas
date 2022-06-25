let scale = 1;
let color = 'blue';
let lineWidth = 1;

let canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = 600;
const height = canvas.height = width/1.428571428571;


let lines = [
  // Triangle
{move: [0, 0], line1: [width/2, 0],line2:[width/4,height/4]}, //triangle 1
{move: [width/2, 0], line1: [width, 0],line2:[width/4*3, height/4]}, //triangle 2
{move: [width, 0], line1: [width, height/2],line2:[width/4*3, height/4]}, //triangle 3
{move: [width, height/2], line1: [width, height],line2:[width/2/2*3, height/4*3]}, //triangle 4
{move: [width, height], line1: [width/2, height],line2:[width/2/2*3, height/4*3]}, //triangle 5
{move: [width/2, height], line1: [0, height],line2:[width/4, height/4*3]}, //triangle 6
{move: [0, height], line1: [0, height/2],line2:[width/4, height/4*3]}, //triangle 7
{move: [0, height/2], line1: [0, 0],line2:[width/4, height/4]}, //triangle 8
// Trapizoid
{move: [0, height/2], line1: [width/4, height/4],line2:[width/2, height/2],line3:[width/4, height/4*3]}, //Trapizoid 9
{move: [width/4, height/4], line1: [width/2, 0],line2:[width/4*3, height/4],line3:[width/2, height/2]}, //Trapizoid 10
{move: [width/2, height/2], line1: [width/4*3, height/4],line2:[width, height/2],line3:[width/4*3, height/4*3]}, //Trapizoid 11
{move: [width/4, height/4*3], line1: [width/2, height/2],line2:[width/4*3, height/4*3],line3:[width/2, height]}, //Trapizoid 12
];
const kundali_path2D = [...Array(12)].map((_, i) => new Path2D())

lines.map((line, index) => {
    kundali_path2D[index].moveTo(line.move[0]*scale, line.move[1]*scale);
    kundali_path2D[index].lineTo(line.line1[0]*scale, line.line1[1]*scale);
    kundali_path2D[index].lineTo(line.line2[0]*scale, line.line2[1]*scale);
    line.hasOwnProperty('line3') && kundali_path2D[index].lineTo(line.line3[0]*scale, line.line3[1]*scale);
    kundali_path2D[index].lineTo(line.move[0]*scale, line.move[1]*scale);
  })

console.table(kundali_path2D)

kundali_path2D.map((path, index) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.stroke(kundali_path2D[index]);
})

canvas.addEventListener('click', function(e) {
kundali_path2D.map((path, index) => {
  if(index === 0 && ctx.isPointInPath(path, e.offsetX, e.offsetY)) {console.log('path: ',index+1);}
  else if(ctx.isPointInPath(path, e.offsetX, e.offsetY)){ console.log('path: ',index+1)}
})})


function downloadPng(){
  const image = canvas.toDataURL();
  const link = document.createElement('a');
  link.href = image;
  link.download = "image.png"
  link.click()
}

let canvas_test = document.getElementById('canvas_test');
let button = document.createElement('button')
button.innerHTML = "Download"
canvas_test.appendChild(button)
canvas_test.addEventListener('click',downloadPng)