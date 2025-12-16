/* =========================================
   1. MENGATUR TOMBOL MENU (HAMBURGER) DI HP
   ========================================= */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Ubah ikon garis jadi X
    navbar.classList.toggle('active');      // Tampilkan/sembunyikan menu
};

/* =========================================
   2. MENGATUR NAVIGASI AKTIF SAAT SCROLL
   ========================================= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* =========================================
       3. EFEK STICKY HEADER (NAVBAR NEMPEL)
       ========================================= */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* =========================================
       4. HILANGKAN TOGGLE MENU SAAT KLIK LINK
       ========================================= */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* =========================================
   5. ANIMASI SCROLL REVEAL (MUNCUL PERLAHAN)
   ========================================= */
ScrollReveal({ 
    reset: true,      // Animasi ulang setiap scroll
    distance: '80px', // Jarak pergerakan
    duration: 2000,   // Durasi animasi (2 detik)
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .projects-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* =========================================
   6. ANIMASI MENGETIK (TYPED.JS)
   ========================================= */
// Ganti teks di dalam 'strings' sesuai keinginanmu
const typed = new Typed('.typing-text', {
    strings: ['IT Student', 'Tutor', 'Freelancer', 'Entrepreneur', 'Prompt Engineer'],
    typeSpeed: 100,   // Kecepatan mengetik
    backSpeed: 100,   // Kecepatan menghapus
    backDelay: 1000,  // Jeda sebelum menghapus
    loop: true        // Ulangi terus menerus
});