
const clickButton = document.getElementById('click-button');
const hoverButton = document.getElementById('hover-button');
const dblClickButton = document.getElementById('dblclick-button');


clickButton.addEventListener('click', function() {
    alert('Кнопка была нажата!');
    clickButton.style.backgroundColor = 'yellow';
    setTimeout(() => {
        clickButton.style.backgroundColor = '#008CBA';
    }, 500);
});


hoverButton.addEventListener('mouseover', function() {
    hoverButton.style.backgroundColor = 'purple';
});
hoverButton.addEventListener('mouseout', function() {
    hoverButton.style.backgroundColor = '#008CBA';
});


dblClickButton.addEventListener('dblclick', function() {
    alert('Двойной клик по кнопке!');
    dblClickButton.style.backgroundColor = 'orange';
    setTimeout(() => {
        dblClickButton.style.backgroundColor = '#008CBA';
    }, 500);
});


document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    if (key === 'r') {
        document.body.style.backgroundColor = 'red';
    } else if (key === 'g') {
        document.body.style.backgroundColor = 'green';
    } else if (key === 'b') {
        document.body.style.backgroundColor = 'blue';
    }
});

document.addEventListener('keyup', function() {
    document.body.style.backgroundColor = ''; 
});


const movableBlock = document.getElementById('movable-block');
let blockX = 0;
let blockY = 0;

document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    if (key === 'w') {
        blockY -= 1;
    } else if (key === 's') {
        blockY += 1;
    } else if (key === 'a') {
        blockX -= 1;
    } else if (key === 'd') {
        blockX += 1;
    }
    movableBlock.style.transform = `translate(${blockX}px, ${blockY}px)`;
});
