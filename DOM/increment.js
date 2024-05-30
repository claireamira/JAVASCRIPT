let counter = 0;

function incrementCounter() {
    counter += 1;
    document.getElementById('counter').innerText = counter;
}

function resetCounter() {
    counter = 0;
    document.getElementById('counter').innerText = counter;
}
