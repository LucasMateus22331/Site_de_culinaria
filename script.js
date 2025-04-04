let index = 0;

function moverCarrossel(direcao) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    index = (index + direcao + totalSlides) % totalSlides;
    const carrossel = document.querySelector('.carrossel');
    carrossel.style.transform = `translateX(-${index * 100}%)`;
}

// Opções para autoplay
setInterval(() => {
    moverCarrossel(1);
}, 3000); // Troca de imagem a cada 3 segundos