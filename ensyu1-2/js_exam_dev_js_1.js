'use strict';

document.getElementById('change').addEventListener('click',() => {
    let colorText = document.getElementById('colorText').value;
    let imgText = document.getElementById('imgText').value;

    document.getElementById('color').textContent = colorText;
    let line = document.getElementById('color-border');
    line.style.borderColor = colorText;

    let image = document.getElementById('img');
    image.src = imgText;

    document.getElementById('colorText').value = "";
    document.getElementById('imgText').value = "";

});

