
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready');

    // Example of adding a click event listener
    const buttons = document.querySelectorAll('button[data-toggle="modal"]');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked, showing modal');
        });
    });
});
