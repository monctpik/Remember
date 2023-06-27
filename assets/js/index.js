'use strict'

function btnHandler() {
    console.log('OK')
}


// const [btn] = document.getElementsByTagName('button')
const btn = document.querySelector('.btn+.btn')

btn.addEventListener('click', btnHandler)