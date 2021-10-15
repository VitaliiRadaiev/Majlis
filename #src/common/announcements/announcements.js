{
    let announcementsAll = document.querySelectorAll('.announcements');
    if(announcementsAll.length) {
        announcementsAll.forEach(announcements => {
            let dataSlider = new Swiper(announcements.querySelector('.announcements__slider'), {
                
                effect: 'fade',
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                
                slidesPerView: 1,
                spaceBetween: 10,
                speed: 800,

                pagination: {
                	el: announcements.querySelector('.swiper-pagination'),
                	clickable: true,
                },
            });
        })
    }
}