document.addEventListener('DOMContentLoaded', function() {

    const chartCards = document.querySelectorAll('.chart-card');
    

    chartCards.forEach(card => {

        const cardTitle = card.querySelector('.chart-title').textContent;
        
        card.addEventListener('click', function() {

            console.log(`${cardTitle} card was clicked`);
            
            card.classList.add('active-card');
            
            setTimeout(() => {
                card.classList.remove('active-card');
            }, 300);
        });
        
        card.addEventListener('mouseenter', function() {
            card.classList.add('hover-card');
        });
        
        card.addEventListener('mouseleave', function() {
            card.classList.remove('hover-card');
        });
    });
});