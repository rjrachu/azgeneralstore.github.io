// title name
const storeName = "AZ General Store Limited";
document.title = storeName;
document.querySelector("#home h1").innerHTML = `Welcome to<br><span class="store-name">${storeName}</span>`;


// description
const description = "Your one-stop shop for quality products. more to come";
document.querySelector("#home p").innerText = description;

// <!-- Who We Are Section -->
const affiliatedWith = "Family Shopper";
const affiliatedLink = "https://www.familyshopperstores.co.uk/"; // link to affiliation

const whoWeAreText = `
AZ General Store Limited is a family-owned business dedicated to providing high-quality products and exceptional customer service.
We pride ourselves on our wide selection of goods, from everyday essentials to specialty items.
We are affiliated with <a href="${affiliatedLink}" target="_blank">${affiliatedWith}</a>.
`;

document.querySelector("#about p").innerHTML = whoWeAreText;

// Gallery images (store photos)
// Gallery images (store photos)
const shopImages = [
  "images/shop1.png",
  "images/shop1.png",
  "images/shop1.png",
  "images/shop1.png",
  "images/shop1.png",
  "images/shop1.png",
//   "images/shop2.png",
//   "images/shop3.png",
//   "images/shop4.png"
];

const galleryDiv = document.querySelector(".shop-gallery");

shopImages.forEach(img => {
  const imgEl = document.createElement("img");
  imgEl.src = img;
  imgEl.alt = "Shop Image";
  imgEl.classList.add("gallery-thumb");

  // Click to open lightbox
  imgEl.addEventListener("click", () => {
    openLightbox(img);
  });

  galleryDiv.appendChild(imgEl);
});

// Lightbox function
function openLightbox(src) {
  // Create overlay
  const overlay = document.createElement("div");
  overlay.classList.add("lightbox-overlay");

  // Create image
  const lightboxImg = document.createElement("img");
  lightboxImg.src = src;
  lightboxImg.alt = "Shop Image";
  lightboxImg.classList.add("lightbox-img");

  overlay.appendChild(lightboxImg);
  document.body.appendChild(overlay);

  // Click overlay to close
  overlay.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });

  // Prevent click on image itself from closing immediately
  lightboxImg.addEventListener("click", (e) => {
    e.stopPropagation(); // stops the overlay click
  });

  // Close lightbox with keyboard
  function handleKey(event) {
    if (event.key === "Escape" || event.key === "Backspace") {
      closeLightbox();
    }
  }
  document.addEventListener("keydown", handleKey);

  // Close function
  function closeLightbox() {
    document.body.removeChild(overlay);
    document.removeEventListener("keydown", handleKey);
  }
}





// #region===== Where we are =====
const branches = [
  { 
    name: "", 
    postcode: "GL15 5RA", 
    address: "51 Newerne Street, Lydney, Gloucestershire, UK", 
    mapUrl: "https://www.google.com/maps/dir/?api=1&destination=Old%20Bank%20House%2C51%20Newerne%20Street%2CLydney%2CGloucestershire%2CGL15%205RA" 
  }
];

const branchList = document.getElementById("branch-list");
branches.forEach(branch => {
  const div = document.createElement("div");
  div.classList.add("branch");
  div.innerHTML = `
    <h3>${branch.name}</h3>
    <p><strong>Postcode:</strong> ${branch.postcode}</p>
    <p><strong>Address:</strong> ${branch.address}</p>
    <!-- Embedded map preview -->
    <iframe
      src="https://www.google.com/maps?q=${encodeURIComponent(branch.address)}&output=embed"
      width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <a href="${branch.mapUrl}" target="_blank">Navigate</a>
  `;
  branchList.appendChild(div);
});

// #endregion

// #region===== What We Offer Carousel =====
const offers = [
  { image: "images/product1.png", text: "Confectionary" },
  { image: "images/product2.png", text: "Grocery" },
  { image: "images/product3.png", text: "Alcohol" },
];

const track = document.querySelector(".carousel-track");
let currentIndex = 0;

function showSlide(index) {
  track.innerHTML = "";

  const prevIndex = (index - 1 + offers.length) % offers.length;
  const nextIndex = (index + 1) % offers.length;

  // Previous small image
  const prevSlide = document.createElement("div");
  prevSlide.classList.add("slide", "small");
  prevSlide.innerHTML = `<img src="${offers[prevIndex].image}" alt="${offers[prevIndex].text}">`;

  // Current big image
  const currentSlide = document.createElement("div");
  currentSlide.classList.add("slide", "big");
  currentSlide.innerHTML = `
    <img src="${offers[index].image}" alt="${offers[index].text}">
    <p>${offers[index].text}</p>
  `;

  // Next small image
  const nextSlide = document.createElement("div");
  nextSlide.classList.add("slide", "small");
  nextSlide.innerHTML = `<img src="${offers[nextIndex].image}" alt="${offers[nextIndex].text}">`;

  track.appendChild(prevSlide);
  track.appendChild(currentSlide);
  track.appendChild(nextSlide);
}

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + offers.length) % offers.length;
  showSlide(currentIndex);
});

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % offers.length;
  showSlide(currentIndex);
});

// Auto-rotate
// setInterval(() => {
//   currentIndex = (currentIndex + 1) % offers.length;
//   showSlide(currentIndex);
// }, 5000);

// Initial display
showSlide(currentIndex);
// #endregion

// #region===== Contact Form (simple submit alert) =====
const contactEmail = "info@gmail.com";
const contactPhone = "+44 7452 123456";

// Update heading
document.querySelector("#contact h2").innerText = "Contact Us";

// Update contact details with icons
document.querySelector("#contact .contact-details").innerHTML = `
  <p><span class="icon">📧</span> <a href="mailto:${contactEmail}">${contactEmail}</a></p>
  <p><span class="icon">📞</span> <a href="tel:${contactPhone}">${contactPhone}</a></p>
`;


document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
// #endregion
