const hamburgerIcon = document.querySelector('.menuHamburg')
const closeIcon = document.querySelector('.menuClose')

const nav = document.querySelector('.mainNav')


    hamburgerIcon.addEventListener('click', () => {
        hamburgerIcon.classList.add('hide');
        closeIcon.classList.remove('hide');
        nav.classList.add('show')
       
       
    })

    closeIcon.addEventListener('click', () => {
        hamburgerIcon.classList.remove('hide');
        closeIcon.classList.add('hide');
        nav.classList.remove('hide')
        nav.classList.remove('show')
    })