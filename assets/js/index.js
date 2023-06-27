'use strict'

function btnHandler() {
    console.log('OK')
}


const [btn] = document.getElementsByTagName('button')

btn.addEventListener('click', btnHandler)