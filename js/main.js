'use strict'

function onBallBlick() {
    var ball = document.querySelector('.ball')
    var currSize = parseInt(ball.style.width)

    if (isNaN(currSize)) currSize = 100

    currSize += 50
    if (currSize > 400) currSize = 100
    ball.style.width = currSize + 'px'
    ball.style.height = currSize + 'px'

    ball.textContent = currSize
}