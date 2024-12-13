class CarrouselFonduProgressif {
    constructor(container, images, intervalle, dureeFondu) {
        this.container = container;
        this.images = images;
        this.intervalle = intervalle;
        this.dureeFondu = dureeFondu * 1000; // Convertir en ms
        this.index = 0;
        this.initCarousel();
    }

    initCarousel() {
        // Charger et positionner les images
        this.images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.classList.add('carousel-image');
            img.style.opacity = "0";
            img.style.position = "absolute";
            this.container.appendChild(img);
        });
        this.imagesElements = this.container.querySelectorAll('.carousel-image');
        
        this.showImage(this.index);
        this.scheduleNextImage();
    }

    scheduleNextImage() {
        setTimeout(() => this.fadeToNextImage(), this.intervalle);
    }

    fadeToNextImage() {
        const currentIndex = this.index;
        this.index = (this.index + 1) % this.images.length;
        const nextIndex = this.index;

        this.animateFade(currentIndex, nextIndex, this.dureeFondu);
    }

    animateFade(currentIndex, nextIndex, duration) {
        const start = performance.now();

        const fade = (timestamp) => {
            const progress = (timestamp - start) / duration;

            if (progress < 1) {
                const opacityCurrent = 1 - progress;
                const opacityNext = progress;

                this.imagesElements[currentIndex].style.opacity = opacityCurrent;
                this.imagesElements[nextIndex].style.opacity = opacityNext;

                requestAnimationFrame(fade);
            } else {
                this.imagesElements[currentIndex].style.opacity = "0";
                this.imagesElements[nextIndex].style.opacity = "1";
                this.scheduleNextImage();
            }
        };
        
        requestAnimationFrame(fade);
    }

    showImage(index) {
        this.imagesElements.forEach((img, i) => {
            img.style.opacity = (i === index) ? "1" : "0";
        });
    }
}

function GenererCarrousel() {
    const images = [
        "images/home/1.jpg",
        "images/home/2.jpg",
        "images/home/3.jpg",
        "images/home/4.jpg",
        "images/home/5.jpg",
        "images/home/6.jpg"
    ];
    const carouselContainer = document.getElementById('carousel');
    new CarrouselFonduProgressif(carouselContainer, images, 5000, 2.5); // Intervalle de 5s, fondu de 2.5s
}

// Initialiser le carrousel au chargement de la page
// window.onload = GenererCarrousel; //dans le html
