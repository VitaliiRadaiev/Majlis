{
    let promoHeader = document.querySelector('.promo-header');
    if(promoHeader) {
        let dataSlider = new Swiper(promoHeader.querySelector('.promo-header__slider'), {
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: true,
            speed: 800,
            loop: true,
            pagination: {
            	el: promoHeader.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            navigation: {
                nextEl: promoHeader.querySelector('.promo-header__slider-btn-next'),
                prevEl: promoHeader.querySelector('.promo-header__slider-btn-prev'),
            },

        });
        
    }
}