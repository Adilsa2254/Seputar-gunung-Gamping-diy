
// // Add floating bubbles
// function createBubbles() {
//     const mainContent = document.querySelector('.main-content');
//     for (let i = 0; i < 15; i++) {
//         const bubble = document.createElement('div');
//         bubble.className = 'bubble';
//         bubble.style.width = Math.random() * 50 + 20 + 'px';
//         bubble.style.height = bubble.style.width;
//         bubble.style.left = Math.random() * 100 + 'vw';
//         bubble.style.animationDelay = Math.random() * 5 + 's';
//         mainContent.appendChild(bubble);
//     }
// }



// Interactive search with animation
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('focus', function() {
    this.placeholder = 'Ketik untuk mencari...';
});

searchInput.addEventListener('blur', function() {
    this.placeholder = 'Cari Informasi...';
});







// Navigation interaction
const navButtons = document.querySelectorAll('.nav-button');
navButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        navButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});

// Initialize bubbles
createBubbles();
setInterval(createBubbles, 20000); // Recreate bubbles every 20 seconds


        // Previous JavaScript code remains the same
        // Add new animation for cards
        const cards = document.querySelectorAll('.info-card');
        
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 * index);

            card.addEventListener('click', () => {
                // Add click handler for future functionality
                console.log('Card clicked:', card.querySelector('.info-title').textContent);
            });
        });






        
        // Add hover effect to cards
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseover', () => {
                card.style.transform = 'scale(1.02)';
                card.style.transition = 'transform 0.3s ease';
                card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            });

            card.addEventListener('mouseout', () => {
                card.style.transform = 'scale(1)';
                card.style.boxShadow = 'none';
            });
        });

        // Add click event to nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.nav-item').forEach(navItem => {
                    navItem.classList.remove('active');
                });
                item.classList.add('active');
            });
        });