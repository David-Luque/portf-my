//TYPE EFFECT FUNCTION
// export const typeEffect = (html_id, text, _speed)=>{
//     let i = 0;
//     const txt = text;
//     const speed = _speed; //miliseconds

//     function typeWriter() {
//         if (i < txt.length) {
//             document.getElementById(html_id).innerHTML += txt.charAt(i);
//             i++;
//             setTimeout(typeWriter, speed);
//         }
//     }
// };


//HANDLE DISPLAY NAV ON SMALL VIEWPORTS
export const handleNav = ()=>{
    const navBackground = document.querySelector('.navigation__background');
    const navContent = document.querySelector('.navigation__content');
    const navButton = document.querySelector('.navigation__button');
    const navCheckbox = document.querySelector('.navigation__checkbox');

    const displayNavElements = ()=>{
        navBackground.classList.add('navigation__background--displayed');
        navContent.classList.add('navigation__content--displayed');
        navButton.classList.add('navigation__button--displayed');
    };
    const hideNavElements = ()=>{
        navCheckbox.checked = false;
        navBackground.classList.remove('navigation__background--displayed');
        navContent.classList.remove('navigation__content--displayed');
        navButton.classList.remove('navigation__button--displayed');
    };
    
    if(navBackground.classList[navBackground.classList.length - 1] === 'navigation__background--displayed') {
        hideNavElements();
    } else {
        displayNavElements();
    };
};


//HANDLE EXPAND PICTURES IN FULL SCREEN MODE
export const expandPicture = ()=>{
    const imgViewer = document.querySelector('.image-viewer');
    const viewerImage = document.querySelector('.image-viewer__img');
    const viewerContent = document.querySelector('.image-viewer__content');
    const images = document.querySelectorAll('.project-card__img');
    
    images.forEach(image => {
        image.addEventListener('click', function(){
            viewerImage.src = `${image.src}`;
            imgViewer.style.display = 'block';
            imgViewer.style.opacity = '1';
            viewerContent.style.opacity = '1';
            viewerContent.style.transform = 'translate(-50%, -50%) scale(1)'
        });
    });
};


//HANDLE CARD CLASS ASSIGNMENT FOR ROTATING ANIMATION
export const handleTurnCard = (target)=>{
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        if(card.classList[1] ===  target.classList[1] && card.classList[ card.classList.length - 1 ] === 'project-card-animation') {
            card.classList.add('project-card--turned')
        } else {
            card.classList.remove('project-card--turned')
        }
    })
};