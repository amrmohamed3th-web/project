const sec2Images = document.querySelectorAll(".sec2img > div");

function rotateSec2Images() {
    let lastClass = sec2Images[sec2Images.length - 1].className;

    for (let i = sec2Images.length - 1; i > 0; i--) {
        sec2Images[i].className = sec2Images[i - 1].className;
    }

    sec2Images[0].className = lastClass;
}

setInterval(rotateSec2Images, 2000)



const images = document.querySelectorAll(".sec3img");

function rotateImages() {
    let lastClass = images[images.length - 1].className;

    for (let i = images.length - 1; i > 0; i--) {
        images[i].className = images[i - 1].className;
    }

    images[0].className = lastClass;
}

setInterval(rotateImages, 2000);