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



    /*******************  Animação   ******************* */

    const target = document.querySelectorAll('[data-anime]')
    const animetionClass = 'animate';

    function animeScroll(){
        const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
        target.forEach(function(element){
            if((windowTop) > element.offsetTop){
                element.classList.add(animetionClass)
            } else  {
                element.classList.remove(animetionClass)
            }
        })
    }

    animeScroll();

    if(target.length){
        window.addEventListener('scroll', function(){
            animeScroll();
        })
    }