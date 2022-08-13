let keyboard = document.querySelector('.keyboard');
let screen = document.querySelector('.screen');
let button = document.querySelector('button');

for (let i = 0; i < 40; i++) {
    let buttons = document.createElement('div');
    buttons.className = 'notebook-buttons';
    keyboard.append(buttons);

    let frontSide = document.createElement('div');
    frontSide.className = 'front';
    buttons.append(frontSide);

    let backSide = document.createElement('div');
    backSide.className = 'back';
    buttons.append(backSide);

    let leftSide = document.createElement('div');
    leftSide.className = 'left';
    buttons.append(leftSide);

    let rightSide = document.createElement('div');
    rightSide.className = 'right';
    buttons.append(rightSide);
}
let openClose = document.querySelector('button');
let bool = true;
openClose.onclick = () => {
    if (!bool == 0) {
        screen.style.transform = ' translateZ(-200px) ';
        setTimeout(() => { screen.style.transform = ' translateZ(-200px) rotateX(0deg) rotateY(0deg)' }, 150);
        button.style.boxShadow = ' inset 5px 5px 10px #333, inset -5px -5px 10px #fff';
        bool = false;
    } else {
        screen.style.transform = ' translateZ(-200px) rotateX(0deg) rotateY(0deg)';
        setTimeout(() => { screen.style.transform = 'translateZ(-200px) rotateX(-90deg) rotateY(0deg)'; }, 150);
        button.style.boxShadow = ' inset -5px -5px 10px #333, inset 5px 5px 10px #fff, 0 0 15px #555';
        bool = true;
    }
}
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('clock').innerHTML = h + ":" + m;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}
let folderBool = true;
let pcApps = document.querySelectorAll('.logos');
pcApps[0].onclick = () => {
    if (!bool == 0) {
        folder.style.display = 'flex';
        folderBool = false;
    } else {
        folder.style.display = 'none';
        folderBool = true;
    }
}