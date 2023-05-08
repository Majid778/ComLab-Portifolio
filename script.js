let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        //make the hover effect active for nav links
        if (top >= offset && top < offset + height) {
            let id = sec.getAttribute('id');

        // let id = sec.getAttribute('id');

        // if (top >= offset && top < offset + height) {
        //     navLinks.forEach(links => {
        //         links.classList.remove('active');
        //         document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        //     });
        // };
    });
};
