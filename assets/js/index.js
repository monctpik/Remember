'use strict'


const cardsContainer = document.getElementById('cards-container')

const HTMLCollectionActors = actors.map((actor) => createActorsCard(actor))

function createActorsCard(actor){
    const HTMLCard = doc
    return HTMLCard
}

















// const btns = document.querySelectorAll('#root>button')
// const root = document.getElementById('root')

// const changeColor = (e) => {
//     root.style.backgroundColor = e.target.dataset.color
// }

// for (const btn of btns) {
//     btn.addEventListener('click', changeColor)
// }


// const btns1 = document.querySelectorAll('.btn');
//  const swapBtn = ({ target }) => {
//   const parent = target.parentNode;
//   const sibling = target.nextElementSibling;
//    if (sibling) {
//     parent.insertBefore(sibling, target);
//   } else {
//     parent.appendChild(target);
//   }
// }
//  for (const btn1 of btns1) {
//   btn1.addEventListener('click', swapBtn);
// }
// const imagesDB = ['https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg',
//     'https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg',
//     'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/09/08/142774.jpg'
// ];

// const [prevBtn, nextBtn] = document.querySelectorAll('.slider-container button')
// const img = document.querySelector('.slider-container .slide img')

// const slider = new Slider(imagesDB)

// const createSlideBtnHandler = (direction = 'next') => () => {
//     slider.currentIndex = slider[direction === 'next' ? 'next' : 'prev']
//     updateView()
// }

// nextBtn.addEventListener('click', createSlideBtnHandler('next'))
// prevBtn.addEventListener('click', createSlideBtnHandler('prev'))


// function updateView() {
//     img.setAttribute('src', slider.currentSlide)
// }
// updateView()


// const q = document.getElementsByClassName('test')


// function countClicker() {
//     let i = 0
//     return () => {
//         i++
//         console.log(i)
//         if(i>=3){
//             q.removeEventListener('click', countClicker)
//             q.disabled = true
//         }
//     }
//     }

// q.addEventListener('click', countClicker)

