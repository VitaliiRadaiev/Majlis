{
    let mainSlider = document.querySelector('.media-gallery__slider-main');
    let thumbSlider = document.querySelector('.media-gallery__slider-thumbs');
    if(mainSlider && thumbSlider) {

        let videos = mainSlider.querySelectorAll('.video');
        let players = [];
        if (videos.length) {
            videos.forEach(video => {
                players.push(videoHandler(video));
            })
        }

        let swiper = new Swiper(thumbSlider.querySelector('.swiper-container'), {
            freeMode: true,
            watchSlidesProgress: true,
            speed: 800,

            breakpoints: {
                320: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                768: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                },
            },
        });

        let swiper2 = new Swiper(mainSlider.querySelector('.swiper-container'), {
            spaceBetween: 10,
            speed: 800,
            navigation: {
                nextEl: mainSlider.querySelector('.promo-header__slider-btn-next'),
                prevEl: mainSlider.querySelector('.promo-header__slider-btn-prev'),
            },
            thumbs: {
                swiper: swiper,
            },
            on: {
                slideChange: (swiper) => {
                    players.forEach(player => {
                        player.pause();
                    })
                }
            }
        });
    }
}