document.addEventListener("DOMContentLoaded", function() {
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
        if (menuPanel.style.display === "flex") {
            menuPanel.style.display = "none";
            overlay.style.opacity = 0;
            setTimeout(() => { overlay.style.display = "none"; }, 500);
        } else {
            menuPanel.style.display = "flex";
            overlay.style.display = "block";
            setTimeout(() => { overlay.style.opacity = 1; }, 50);
        }
    }
});

document.querySelectorAll('.box-icon').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.src = 'img/open_box.png';
    });
    item.addEventListener('mouseout', () => {
        item.src = 'img/closed_box.png';
    });
});
