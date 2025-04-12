const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const header = document.getElementById('header');
const headerOffsetTop = header.offsetTop;
const headerHeight = header.offsetHeight
const body = document.body;
let headerDistance = headerOffsetTop + headerHeight;
const menuIcon = document.getElementById('menu-icon');

let width = window.innerWidth;

// Initialize the menu and ensure is not visible at the start
let menuOpen = false;

menu.translate = true;

menu.style.transform = `translate(${width}px, ${headerDistance}px)`;

setTimeout(() => {
    menu.classList.remove('hidden');
}, 200)

const closeMenu = () => {
    menuIcon.setAttribute('src', 'assets/icons/menu-icon.svg');
    menuIcon.style.width = '28px';
    menuIcon.style.height = '28px';
    body.style.overflow = 'hidden auto';
    menu.style.zIndex = -100;
}

closeMenu();

// Automatically close the menu when the window resizes to prevent displaying the menu on larger screens
window.addEventListener('resize', e => {
    // Recalculate header distance from bottom of the element to top of the page when the window resizes    
    headerDistance = header.offsetTop + header.offsetHeight;

    menu.style.transform = `translate(${e.target.innerWidth}px, ${headerDistance}px)`;
    width = e.target.innerWidth;

    if (!menuOpen) return;

    menuOpen = false;

    closeMenu();   
})

// Handle menu button click to open or close the menu
menuButton.addEventListener('click', () => {
    console.log('Menu button clicked');

    menuOpen = !menuOpen;

    if (menuOpen) {
        menuIcon.setAttribute('src', 'assets/icons/x-icon.svg');
        menuIcon.style.width = '14px';
        menuIcon.style.height = '14px';
        body.style.overflow = 'hidden';
        window.scrollTo({
            top: 0,
        })
        menu.style.zIndex = 100;
        menu.style.transform = `translate(0px, ${headerDistance}px)`;
        return;
    }
    
    closeMenu();
    menu.style.transform = `translate(${width}px, ${headerDistance}px)`;

});