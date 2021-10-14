{
    let header = document.querySelector('.header');
    if(header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('is-scroll', window.pageYOffset > 50);
        })

        let toggleMenuBtn = header.querySelector('.header__toggle-menu');
        let topMenu = header.querySelector('.header__menu');

        if(toggleMenuBtn && topMenu) {
            let closeBtn = header.querySelector('.menu__close');

            toggleMenuBtn.addEventListener('click', () => {
                toggleMenuBtn.classList.toggle('active');
                topMenu.classList.toggle('open');

                if(document.documentElement.clientWidth < 992) {
                    document.body.classList.toggle('lock');
                }
            })

            if(closeBtn) {
                closeBtn.addEventListener('click', () => {
                    toggleMenuBtn.classList.remove('active');
                    topMenu.classList.remove('open');
    
                    if(document.documentElement.clientWidth < 992) {
                        document.body.classList.remove('lock');
                    }
                })
            }
        }

        let slideItems = header.querySelectorAll('.menu-item-has-children');
        if(slideItems.length) {
            slideItems.forEach(item => {
                let title = item.querySelector('.menu__link');
                let subMenu = item.querySelector('.sub-menu');

                title.addEventListener('click', (e) => {
                    if(document.documentElement.clientWidth < 992) {
                        e.preventDefault();
                        title.classList.toggle('active');
                        _slideToggle(subMenu);

                        slideItems.forEach(i => {
                            if(i === item) return;

                            let title = i.querySelector('.menu__link');
                            let subMenu = i.querySelector('.sub-menu');

                            title.classList.remove('active');
                            _slideUp(subMenu);
                        })
                    }
                })                
            })
        }
    }
}