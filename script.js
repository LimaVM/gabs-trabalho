// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para navegadores que não suportam scroll-behavior CSS
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Ajuste para header fixo
                    behavior: 'smooth'
                });

                // Fechar o menu móvel após clicar
                if (window.innerWidth <= 768) {
                    navUl.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });

    // Accordion para a seção FAQ
    const faqItems = document.querySelectorAll('#faq .faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle active class
            item.classList.toggle('active');
        });
    });

    // Inicializar estado das respostas do FAQ
    const faqAnswers = document.querySelectorAll('#faq .faq-item p');
    faqAnswers.forEach(answer => {
        answer.style.display = 'none';
    });

    // Menu Móvel
    const menuToggle = document.getElementById('mobile-menu');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Exibir/ocultar respostas do FAQ
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('p');
            if (item.classList.contains('active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});

