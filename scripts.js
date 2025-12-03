// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Initialize first slide
if (slides.length > 0) {
    slides[0].classList.add('active');
}

// Function to show next slide
function nextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');

    // Move to next slide
    currentSlide = (currentSlide + 1) % totalSlides;

    // Add active class to new slide
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
if (totalSlides > 0) {
    setInterval(nextSlide, 5000);
}

// Google Maps initialization
function initMap() {
    // Default location (you can change this in the README instructions)
    const defaultLocation = { lat: 40.7128, lng: -74.0060 }; // New York City

    // Create map
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: defaultLocation,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'on' }]
            }
        ]
    });

    // Add marker
    const marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
        title: 'Our Location'
    });

    // Add info window
    const infoWindow = new google.maps.InfoWindow({
        content: '<h3>Our Location</h3><p>Visit us here!</p>'
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });
}

// Fallback if Google Maps API fails to load
window.addEventListener('load', () => {
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        document.getElementById('map').innerHTML = 
            '<div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f0f0f0; color: #666; padding: 20px; text-align: center;">' +
            '<p>Please add your Google Maps API key to display the map.<br>See README.md for instructions.</p>' +
            '</div>';
    }
});