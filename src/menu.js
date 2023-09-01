

export function loadMenuTab() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; 
    
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('tab-container'); 

    const menuHeading = document.createElement('h2');
    menuHeading.textContent = 'Menu';
    menuHeading.classList.add('tab-heading'); 

  
    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list'); 

    
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = '1. Special Dish - $12.99';

    const menuItem2 = document.createElement('li');
    menuItem2.textContent = '2. Chef\'s Recommendation - $74.99';

    
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', () => {
        location.reload(); 
    });
    

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);

    
    menuContainer.appendChild(menuHeading);
    menuContainer.appendChild(menuList);

    contentDiv.appendChild(homeButton);
    contentDiv.appendChild(menuContainer);
}
