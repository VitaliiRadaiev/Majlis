{
    let allSearch = document.querySelectorAll('.search');
    if(allSearch.length) {
        allSearch.forEach(search => {
            let input = search.querySelector('input');
            let closeBtn = search.querySelector('.search__close');

            input.addEventListener('focus', (e) => {
                search.classList.add('_focus');
            })
            input.addEventListener('blur', (e) => {
                search.classList.remove('_focus');
            })

            search.addEventListener('focus', () => {
                console.log('focus');
            })

            closeBtn.addEventListener('mousedown', () => {
                search.classList.add('_focus');
                input.focus();
                input.value = '';
            })
        })
    }
}