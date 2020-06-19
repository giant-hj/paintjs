const canvas = document.getElementById("jsCanvas");

let panting = false;

function stopPainting() {
    panting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    
}

function onMouseDown(event) {
    panting = true;
}

function onMouseUp(event) {
    stopPainting();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}

