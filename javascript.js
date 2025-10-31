document.addEventListener('DOMContentLoaded', function() {
    const arrowForward = document.querySelector('.arrow-forward');
    const arrowBackward = document.querySelector('.arrow-backward');
    const cardsContainer = document.querySelector('.cards');
    const cards = document.querySelectorAll('.card');
    const acordeonBotones = document.querySelectorAll('.acordeon-boton');

    if (arrowForward && arrowBackward && cardsContainer) {
        arrowForward.addEventListener('click', function() {
            cardsContainer.scrollBy({ left: -400, behavior: 'smooth' });
        });

        arrowBackward.addEventListener('click', function() {
            cardsContainer.scrollBy({ left: 400, behavior: 'smooth' });
        });
    }

    acordeonBotones.forEach(boton => {
        boton.addEventListener('click', function() {
            const icon = this.querySelector('.acordeon-icon');
            if (icon.textContent === '+') {
                icon.textContent = '−';
            } else {
                icon.textContent = '+';
            }
        });
    });

    const cajasTexto = document.querySelectorAll('.caja-texto');
    cajasTexto.forEach(caja => {
        caja.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        caja.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});