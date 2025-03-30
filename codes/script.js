const menu = document.getElementById('list');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

let menuOpen = false;

function openMenu() {
  menuOpen = true;
  overlay.style.display = 'block';
  sidebar.style.width = '300px';
}

function closeMenu() {
  menuOpen = false;
  overlay.style.display = 'none';
  sidebar.style.width = '0px';
}

menu.addEventListener('click', function () {
  if (!menuOpen) {
    openMenu();
  }
});

overlay.addEventListener('click', function () {
  if (menuOpen) {
    closeMenu();
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1700); 
}

