document.addEventListener('DOMContentLoaded', () => {
    const zoomButtons = document.querySelectorAll('.zoom-btn');
    const overlayBg = document.getElementById('overlayBg');

    zoomButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click event if any
            const card = button.closest('.card');
            
            if (card.classList.contains('expanded')) {
                // If already expanded, close it
                closeZoom(card);
            } else {
                // Open zoom
                card.classList.add('expanded');
                overlayBg.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    overlayBg.addEventListener('click', () => {
        const expandedCard = document.querySelector('.card.expanded');
        if (expandedCard) {
            closeZoom(expandedCard);
        }
    });

    function closeZoom(card) {
        card.classList.remove('expanded');
        overlayBg.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const expandedCard = document.querySelector('.card.expanded');
            if (expandedCard) {
                closeZoom(expandedCard);
            }
        }
    });
});
