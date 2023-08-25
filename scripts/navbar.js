const navAnchors = document.querySelectorAll('nav a');
navAnchors.forEach(a => {
    a.addEventListener('click', function (x) {
        x.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
  