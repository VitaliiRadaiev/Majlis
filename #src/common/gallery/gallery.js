{
    let galleryAll = document.querySelectorAll('.gallery');
    if(galleryAll.length) {
        galleryAll.forEach(gallery => {
            let dataSlider = new Swiper(gallery.querySelector('.gallery__slider'), {
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                slidesPerView: 1,
                speed: 800,
                loop: true,
                pagination: {
                	el: gallery.querySelector('.swiper-pagination'),
                	clickable: true,
                },
                navigation: {
                    nextEl: '.about__more .more__item_next',
                    prevEl: '.about__more .more__item_prev',
                },
                breakpoints: {
                    320: {
                        spaceBetween: 30,
                    },
                    992: {
                        spaceBetween: 60,
                    },
                },
            });
            
        })
    }
}