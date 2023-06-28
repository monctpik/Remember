'use strict'

const imagesDB = ['https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg',
    'https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg',
    'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/142774.jpg'
];

const [prevBtn, nextBtn] = document.querySelectorAll('.slider-container button')
const img = document.querySelector('.slider-container .slide img')

const slider = new Slider(imagesDB)

const createSlideBtnHandler = (direction = 'next') => () => {
    slider.currentIndex = slider[direction === 'next' ? 'next' : 'prev']
    updateView()
}

nextBtn.addEventListener('click', createSlideBtnHandler('next'))
prevBtn.addEventListener('click', createSlideBtnHandler('prev'))


function updateView(){
    img.setAttribute('src', slider.currentSlide)
}
updateView()


