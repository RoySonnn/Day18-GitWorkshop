'use strict'

function onBallBlick() {
    var ball = document.querySelector('.ball')
    var currSize = parseInt(ball.style.width)

    if (isNaN(currSize)) currSize = 100

    currSize += 50
    ball.style.width = currSize + 'px'
    ball.style.height = currSize + 'px'

    ball.textContent = currSize
}