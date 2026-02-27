console.log('Hello from script.js');
console.log(':3');

import(chalk)


document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('yippy-toggle');
    toggleButton.addEventListener('click', () => {
        playSound('assets/sounds/assets/sounds/MF - (3).wav');

    });
});

document.addEventListener('DOMContentLoaded', () => {
    const showMoreButtons = document.querySelectorAll('.show-more');
    const showLessButtons = document.querySelectorAll('.show-less');

    showMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.parentElement;
            const hiddenCards = section.querySelectorAll('.card-hidden');

            hiddenCards.forEach(card => {
                card.style.display = 'contents';
            });

            button.style.display = 'none';
            section.querySelector('.show-less').style.display = 'block';
        });
    });

    showLessButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.parentElement;
            const hiddenCards = section.querySelectorAll('.card-hidden');

            hiddenCards.forEach(card => {
                card.style.display = 'none';
            });

            button.style.display = 'none';
            section.querySelector('.show-more').style.display = 'block';
        });
    });
});

console.log("backend loaded")
console.log("Hello, Please log the command 'DnD'");

DnD ="Hello, Thankyou for finding my secret, If you yes YOU are looking for a new secret. come back latter this is more or less a test. However I will say, Do you trust the Toaster, He is a Protogen... would you trust such an organic clanker?";