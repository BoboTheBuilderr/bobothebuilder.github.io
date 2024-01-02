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
        <form id="contactForm">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
        </form>
    `;
}

// Add an event listener for the contact form submission (assuming you have a submit handler function)
document.getElementById("contactForm").addEventListener("submit", handleContactFormSubmit);

// Example submit handler function (replace this with your actual submission logic)
function handleContactFormSubmit(event) {
    event.preventDefault();

    // Extract form data and handle the submission (e.g., send it to a server)
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Example: Log form data to the console
    console.log("Form Data:", { name, email, message });

    // TODO: Add your actual form submission logic here
    // e.g., send the form data to a server using fetch or another method
}
