document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('next-button');
    
    nextButton.addEventListener('click', function() {
        const destinationSelect = document.getElementById('destination');
        const cuisineSelect = document.getElementById('cuisine');
        
        const destination = destinationSelect.value;
        const cuisine = cuisineSelect.value;

        if (destination && cuisine) {
            const nextPageUrl = `page1.html?destination=${encodeURIComponent(destination)}&cuisine=${encodeURIComponent(cuisine)}`;
            window.location.href = nextPageUrl;
        } else {
            alert('Please select both a destination and a cuisine.');
        }
    });
});
