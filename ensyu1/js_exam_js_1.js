'use strict';
// アラートで「Hello JavaScript」が表示される
console.log('Hello JavaScript');

document.getElementById('calc').addEventListener('click',() => {
    let test1 = Number(document.getElementById('test1').value);
    let test2 = Number(document.getElementById('test2').value);
    let test3 = Number(document.getElementById('test3').value);

    console.log('test1 + test2 + test3');
    document.getElementById('sum').textContent = test1 + test2 + test3;
    document.getElementById('avg').textContent = (test1 + test2 + test3) / 3;
});

document.getElementById('clear').addEventListener('click',() => {
    document.getElementById('test1').value = "";
    document.getElementById('test2').value = "";
    document.getElementById('test3').value = "";
    document.getElementById('sum').textContent = "";
    document.getElementById('avg').textContent = "";
});

