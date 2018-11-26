
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('nav-icon').addEventListener("click", function () {
        let icon = document.getElementById('nav-icon-fa').classList
        if (icon.contains('fa-bars')) {
            document.getElementsByClassName('menu-container')[0].style.display = 'block';
            icon.replace('fa-bars', 'fa-close')
        } else {
            document.getElementsByClassName('menu-container')[0].style.display = 'none';
            icon.replace('fa-close', 'fa-bars')
        }
    })
    document.getElementById('open-dropdown').addEventListener("click", function () {
        let dropdown = document.getElementById('dropdown-content');
        if (dropdown.classList.contains('hidden')) {
            dropdown.classList.remove('hidden');
        } else {
            dropdown.classList.add('hidden')
        }
    })
});