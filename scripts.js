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
        <!-- ... (existing content) ... -->

        <!-- Services Section Content -->
        <h2>Services</h2>
        <div class="services-grid">
            <!-- ... (existing services) ... -->
        </div>

        <!-- Gallery Section Content -->
        <h2>Gallery</h2>
        <p>View our selection of vehicles for your next trip which include: Cadillac XTS, GMC Yukon, Cadillac Escalade, Mercedes S550, Party Bus, Black Limousine</p>
        <div class="image-carousel">
            <div class="carousel-item"><img src="placeholder1.jpg" alt="Placeholder 1"></div>
            <div class="carousel-item"><img src="placeholder2.jpg" alt="Placeholder 2"></div>
            <div class="carousel-item"><img src="placeholder3.jpg" alt="Placeholder 3"></div>
        </div>

        <!-- Reviews Section Content -->
        <h2>Hear From Our Customers</h2>
        <div class="review">
            <h3>Excellent Limo Service</h3>
            <p>Chicago Luxury Limo Service exceeded my expectations. The chauffeur was professional, the vehicle was pristine, and the overall experience was fantastic. I highly recommend their services!</p>
            <div class="rating">⭐⭐⭐⭐⭐</div>
        </div>
    `;
}

// Services content function
function servicesContent() {
    return `
        <h2>Our Services</h2>
        <p>Explore our range of luxury transportation services tailored to meet your specific needs:</p>
        <ul>
            <li>Airport Transportation</li>
            <li>Corporate/Private Events</li>
            <li>Concert Transportation</li>
            <li>Charter Services</li>
            <li>Sports Event Transportation</li>
            <li>Prom Services</li>
        </ul>
    `;
}

// Contact Form content function
function contactFormContent() {
    return `
        <h2>Contact Us</h2>
        <p>Have a question or want to book our services? Fill out the form below, and we'll get back to you as soon as possible.</p>
     
