const toggleButton = document.querySelector('.toggle-button');
const headerLinks = document.querySelector('.header-links');

toggleButton.addEventListener('click', () => {
    headerLinks.classList.toggle('active');

    if (headerLinks.classList.contains('active')) {
        toggleButton.classList.add('active');
    } else {
        toggleButton.classList.remove('active');
    }
});
