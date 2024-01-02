// scripts.js

// Constants
const spaContainerId = 'spaContainer';

// Get spaContainer element or throw an error if not found
function getSpaContainer() {
    const spaContainer = document.getElementById(spaContainerId);
    if (!spaContainer) {
        throw new Error(`Element with ID ${spaContainerId} not found.`);
    }
    return spaContainer;
}

// About Us content function
function aboutUsContent() {
    return `
        <!-- About Us Section Content -->
        <h2>About Us</h2>
        <p>Welcome to Chicago Luxury Limo Service, where we redefine luxury transportation. With a commitment to excellence and customer satisfaction, we have become a leading provider of black car, limousine, and party bus services in the Chicago area.</p>
        
        <h3>Our Mission</h3>
        <p>At Chicago Luxury Limo Service, our mission is to deliver unparalleled luxury and comfort to our clients. Whether you're attending a special event, corporate meeting, or just need reliable transportation, our professional and experienced chauffeurs are dedicated to ensuring a smooth and enjoyable journey.</p>

        <h3>Why Choose Us?</h3>
        <p>Choosing Chicago Luxury Limo Service means choosing reliability, sophistication, and unmatched service. We take pride in our well-maintained fleet, attention to detail, and commitment to making every ride a memorable experience. Trust us to elevate your transportation needs to the next level.</p>

        <h3>Additional Paragraph 1</h3>
        <p>This is an additional paragraph providing more information about our services or company.</p>

        <h3>Additional Paragraph 2</h3>
        <p>Here is another paragraph with more details about our commitment to customer satisfaction and excellence.</p>

        <!-- Services Section Content -->
        <h2>Services</h2>
        <p><strong>Airport:</strong> Elevate your airport experience with our reliable and professional chauffeurs. Find your sedan, suv, or sprinter waiting as you walk out of the terminal.</p>

        <p><strong>Corporate/Private Event:</strong> Seamless punctuality and refined luxury converge as we enhance corporate events with our distinguished Executive or Limo Sprinter or SUV.</p>

        <p><strong>Concert:</strong> Amplify your concert experience with our dynamic Limo, black car, and party bus services, delivering a blend of excitement and punctuality for unforgettable arrivals and pick ups.</p>

        <p><strong>Charter:</strong> Unveil limitless possibilities through our exclusive charter services where a professional chauffeur takes care of the driving for the day (minimum of 3 hours).</p>

        <p><strong>Sports Event:</strong> Score big with our premier Limo, black car, and party bus services tailored for sports events, ensuring a winning combination of timely arrivals and unmatched luxury, making your game day experience extraordinary.</p>

        <p><strong>Prom:</strong> Make your prom night truly magical with our exceptional limo, black car, and party bus services, ensuring a stylish and punctual arrival that sets the stage for an unforgettable evening of celebration.</p>
    `;
}

// Load content based on the hash in the URL
function loadContent() {
    const spaContainer = getSpaContainer();
    spaContainer.innerHTML = aboutUsContent();
}

// Initial load and listen for changes
window.addEventListener('load', loadContent);
