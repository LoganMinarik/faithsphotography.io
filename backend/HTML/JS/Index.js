document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Dark Mode Toggle
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Yippy Button Sound
    const yippyButton = document.getElementById('yippy-toggle');
    if (yippyButton) {
        yippyButton.addEventListener('click', () => {
            // This function is not defined in the script, assuming it's available globally
            // or will be added later.
            if (typeof playSound === 'function') {
                playSound('assets/sounds/assets/sounds/MF - (3).wav');
            } else {
                console.warn('playSound function is not defined.');
            }
        });
    }

    // Show More/Less Functionality
    const showMoreButtons = document.querySelectorAll('.show-more');
    const showLessButtons = document.querySelectorAll('.show-less');

    showMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.closest('section');
            if (section) {
                const hiddenCards = section.querySelectorAll('.card-hidden');
                hiddenCards.forEach(card => {
                    card.style.display = 'block'; // Or 'flex' if that's your card's display type
                });
                button.style.display = 'none';
                const showLess = section.querySelector('.show-less');
                if (showLess) {
                    showLess.style.display = 'block';
                }
            }
        });
    });

    showLessButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.closest('section');
            if (section) {
                const hiddenCards = section.querySelectorAll('.card-hidden');
                hiddenCards.forEach(card => {
                    card.style.display = 'none';
                });
                button.style.display = 'none';
                const showMore = section.querySelector('.show-more');
                if (showMore) {
                    showMore.style.display = 'block';
                }
            }
        });
    });

    // Modal (Lightbox) Functionality
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");

    if (modal && modalImg && captionText && closeBtn) {
        document.querySelectorAll('.zoom-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const card = this.closest('.card');
                if (card) {
                    const img = card.querySelector('img');
                    // title could be missing, we should handle it gracefully
                    const title = card.querySelector('h3');
                    if (img) {
                        modal.style.display = "block";
                        modalImg.src = img.src;
                        if (title) {
                            captionText.innerHTML = title.innerText;
                        } else {
                             captionText.innerHTML = "";
                        }
                    }
                }
            });
        });

        // Close the modal when the 'x' is clicked
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // Close the modal when clicking outside the image
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
        
        // Close the modal with the Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape" && modal.style.display === "block") {
                modal.style.display = "none";
            }
        });

    } else {
        console.error('Modal elements not found. Zoom functionality will not work.');
    }
});


console.log("Loading Index.js");
// Load additional JS files
function loadScript(url) {
    let script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    document.head.appendChild(script);
}

// Ensure the path is correct depending on where the script is invoked from
// Commenting this out since the zoom functionality is now within the main DOMContentLoaded block
// loadScript("Zoom.js");
// console.log("Zoom.js loaded")
