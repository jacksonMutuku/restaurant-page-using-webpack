
import { loadPage } from './pageLoad';
import { loadContactTab } from './contact';
import { loadMenuTab } from './menu';

// Function to clear content
function clearContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Remove all child elements
}

// Event listener for Contact tab button
document.getElementById('contact-tab').addEventListener('click', () => {
    clearContent();
    loadContactTab();
});

// Event listener for Menu tab button
document.getElementById('menu-tab').addEventListener('click', () => {
    clearContent();
    loadMenuTab();
});

document.addEventListener('DOMContentLoaded', () => {
    loadPage();
});


document.getElementById('home-button').addEventListener('click', () => {
    location.reload();
});
