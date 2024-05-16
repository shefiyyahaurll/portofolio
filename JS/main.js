/*================================== toggle icon navbar ======================= */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*================================== scroll section active link  ======================= */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*================================== sticky navbar  ======================= */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================================== remove toggle  icon and navbar  ======================= */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*================================== scroll reveal  ======================= */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container,  .projects-container, .certification-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*================================== typed js  ======================= */
const typed = new Typed('.multiple-text', {
    strings: ['Machine Learning Developer', 'Software Engineer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});


/** ===================== STMPJS =========================================== */
const form = document.querySelector("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


function sendEmail(){
    const bodyMessage = `Full Name: ${fullname.value} <br> Email: ${email.value} <br> Phone: ${phone.value} <br> Subject: ${subject.value} <br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shefiyyah@gmail.com",
        Password : "56BA053D1E1FD7336E8E459507BB33D5D59A",
        To : 'shefiyyah@gmail.com',
        From : "shefiyyah@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
};

form.addEventListener("submit", (e) => {
    e.preventDefault();


    sendEmail();
});