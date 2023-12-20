document.addEventListener("DOMContentLoaded", function() {
    // Loading overlay animation
    setTimeout(function() {
        var loadingOverlay = document.getElementById('loadingOverlay');
        loadingOverlay.style.top = '-100%'; // Slide up
    }, 1500); // Adjust the delay as needed

    // Existing code for the burger menu
    var burgerMenu = document.querySelector(".burger-menu");
    var menuPanel = document.getElementById("menuPanel");
    var overlay = document.getElementById("overlay");

    burgerMenu.addEventListener("click", function() {
        toggleMenu();
    });

    overlay.addEventListener("click", function() {
        toggleMenu();
    });

    function toggleMenu() {
        menuPanel.classList.toggle('open');
        if (menuPanel.classList.contains('open')) {
            overlay.style.display = "block";
            setTimeout(() => { overlay.style.opacity = 1; }, 50);
        } else {
            overlay.style.opacity = 0;
            setTimeout(() => { overlay.style.display = "none"; }, 500);
        }
    }

    // Existing code for box icons
    document.querySelectorAll('.box-icon').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.src = 'img/open_box.png';
        });
        item.addEventListener('mouseout', () => {
            item.src = 'img/closed_box.png';
        });
    });

    // New functionality to show ingredients
    var comingSoonItem = document.getElementById("coming-soon-item");
    if (comingSoonItem) {
        comingSoonItem.addEventListener("click", function() {
            showIngredients();
        });
    }

    function filterItems(category) {
        // Get all items
        var items = document.querySelectorAll('.items-container .item');
    
        // Loop through all items
        items.forEach(function(item) {
            // If 'all' or the item's class list contains the category, show it
            if (category === 'all' || item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none'; // Otherwise, hide it
            }
        });
    }

    function showIngredients() {
        var ingredientsBox = document.getElementById('ingredients-box');
        ingredientsBox.style.display = ingredientsBox.style.display === "none" ? "block" : "none";
    }

    // Optional: Close the ingredients box when clicking outside of it
    window.addEventListener('click', function(event) {
        var ingredientsBox = document.getElementById('ingredients-box');
        if (event.target == ingredientsBox) {
            ingredientsBox.style.display = "none";
        }
    });
});