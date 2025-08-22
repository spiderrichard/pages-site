console.log('Hello, world!');

document.querySelectorAll('.button').forEach(button => { 
    button.addEventListener('click', () => {
        console.log(button + ": clicked");
    })
});