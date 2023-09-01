export function loadPage() {
    const contentDiv = document.getElementById('content');

    // Create a headline (h1) element
    const heading1 = document.createElement('h1');
    heading1.textContent = 'Welcome to Our Restaurant'; // Fix variable name here
    contentDiv.appendChild(heading1);

    // Create an image element
    const restaurantImage = document.createElement('img');
    restaurantImage.id = 'restaurant-image';
    restaurantImage.src = './images/restaurant-image.jpg';
    restaurantImage.alt = 'Restaurant Interior';
    restaurantImage.style.maxWidth = '100%';
    restaurantImage.style.height = 'auto';
    contentDiv.appendChild(restaurantImage);

    // Create a headline (h2) element
    const headline = document.createElement('h2'); // Declare 'headline' here
    headline.textContent = 'About Us';
    contentDiv.appendChild(headline);

    // Create a paragraph (p) element for the restaurant description
    const description = document.createElement('p');
    description.textContent = 'We are a welcoming restaurant that offers a delightful dining experience. Our menu is made up of dishes prepared with the freshest ingredients. Come with your friends and family.';
    contentDiv.appendChild(description);
}
