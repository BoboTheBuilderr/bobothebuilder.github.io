// Constants
const spaContainerId = 'spaContainer';

// Get spaContainer element or throw an error if not found
function spaContainer() {
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
        
        <h2>Our Mission</h2>
        <p>At Chicago Luxury Limo Service, our mission is to deliver unparalleled luxury and comfort to our clients. Whether you're attending a special event, corporate meeting, or just need reliable transportation, our professional and experienced chauffeurs are dedicated to ensuring a smooth and enjoyable journey.</p>

        <h2>Why Choose Us?</h2>
        <p>Choosing Chicago Luxury Limo Service means choosing reliability, sophistication, and unmatched service. We take pride in our well-maintained fleet, attention to detail, and commitment to making every ride a memorable experience. Trust us to elevate your transportation needs to the next level.</p>

        <h2>Services</h2>
        <div class="services-grid">
            <!-- Left side items -->
            <div class="service">
                <h3>Airport</h3>
                <p>Elevate your airport experience with our reliable and professional chauffeurs. Find your sedan, SUV, or sprinter waiting as you walk out of the terminal.</p>
            </div>
            <div class="service">
                <h3>Corporate/Private Event</h3>
                <p>Seamless punctuality and refined luxury converge as we enhance corporate events with our distinguished Executive or Limo Sprinter or SUV.</p>
            </div>
            <div class="service">
                <h3>Concert</h3>
                <p>Amplify your concert experience with our dynamic Limo, black car, and party bus services, delivering a blend of excitement and punctuality for unforgettable arrivals and pick ups.</p>
            </div>

            <!-- Right side items -->
            <div class="service">
                <h3>Charter</h3>
                <p>Unveil limitless possibilities through our exclusive charter services where a professional chauffeur takes care of the driving for the day (minimum of 3 hours).</p>
            </div>
            <div class="service">
                <h3>Sports Event</h3>
                <p>Score big with our premier Limo, black car, and party bus services tailored for sports events, ensuring a winning combination of timely arrivals and unmatched luxury, making your game day experience extraordinary.</p>
            </div>
            <div class="service">
                <h3>Prom</h3>
                <p>Make your prom night truly magical with our exceptional limo, black car, and party bus services, ensuring a stylish and punctual arrival that sets the stage for an unforgettable evening of celebration.</p>
            </div>
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

        <!-- Contact Form Section Content -->
        <h2>Contact Us</h2>
	
        <h4>Have a question or want to book our services? Fill out the form below, and we'll get back to you as soon as possible.</h4>





	// Contact Form content function
	function contactFormContent() {
   
	<form action="https://formspree.io/f/moqgqwvl" method="POST">           
 	<!-- Left side items -->
            <div class="form-item">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>

            <div class="form-item">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>

            <div class="form-item">
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" required>
            </div>

            <div class="form-item">
                <label for="fromAddress">From Address:</label>
                <input type="text" id="fromAddress" name="fromAddress" required>
            </div>

            <!-- Right side items -->
            <div class="form-item">
                <label for="toAddress">To Address:</label>
                <input type="text" id="toAddress" name="toAddress" required>
            </div>

            <div class="form-item">
                <label for="passengers">Number of Passengers:</label>
                <input type="number" id="passengers" name="passengers" required>
            </div>

            <div class="form-item">
                <label for="date">Date Requested:</label>
                <input type="date" id="date" name="date" required>
            </div>

            <div class="form-item">
                <label for="flightInfo">Flight Info (Optional):</label>
                <input type="text" id="flightInfo" name="flightInfo">
            </div>

 	 <button type="submit">Send</button>
   	<p id="my-form-status"></p>
	</form>
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

// Load content based on the hash in the URL
function loadContent() {
    const spaContainer = getSpaContainer();
    const hash = window.location.hash;

    switch (hash) {
        case '#home':
            spaContainer.innerHTML = aboutUsContent();
            break;
        case '#services':
            spaContainer.innerHTML = servicesContent();
            break;
        case '#contactFormSection':
            spaContainer.innerHTML = contactFormContent();
            break;
        default:
            spaContainer.innerHTML = aboutUsContent();
            break;
    }
}
var form = document.getElementById("ContactUs");
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwnProperty(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form";
                }
            });
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

