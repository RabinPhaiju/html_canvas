function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to dynamically load a script
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(`Script loaded: ${src}`);
        script.onerror = () => reject(`Error loading script: ${src}`);
        document.body.appendChild(script);
    });
}

function downloadPng(){
    const image = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    const randomNumber = Math.floor(Math.random() * 1000);
    link.download = `image_${randomNumber}.png`
    link.click()
  }
  
let canvas_test = document.getElementById('canvas_button');
let button = document.createElement('button')
button.className = "btn btn-primary"
button.innerHTML = "Download"
canvas_test.appendChild(button)
canvas_test.addEventListener('click',downloadPng)