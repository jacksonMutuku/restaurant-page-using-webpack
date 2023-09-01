import { loadMenuTab } from './menu';
export function loadContactTab() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; 


    const contactContainer = document.createElement('div');
    contactContainer.classList.add('tab-container'); 

   
    const contactHeading = document.createElement('h2');
    contactHeading.textContent = 'Contact Us';
    contactHeading.classList.add('tab-heading'); 

    
    const contactInfo = document.createElement('p');
    contactInfo.innerHTML = `
        Address: 133 Main Street<br>
        Phone: (33) 456-7890<br>
        Email: chinesrestaurant@example.com
    `;
    contactInfo.classList.add('tab-text'); 

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', () => {
        location.reload(); 
    });
    // Create a "Menu" button
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', () => {
        loadMenuTab();
    });
    contactContainer.appendChild(homeButton);
    contactContainer.appendChild(menuButton);
    contactContainer.appendChild(contactHeading);
    contactContainer.appendChild(contactInfo);
    

    
    contentDiv.appendChild(contactContainer);
}
