'use strict'

function onBallBlick() {
    var ball = document.querySelector('.ball')
    var currSize = parseInt(ball.style.width)

    if (isNaN(currSize)) currSize = 100
     var sizeChange = getRandomInt(20, 60)

    currSize += sizeChange
    if (currSize > 400) currSize = 100
    ball.style.width = currSize + 'px'
    ball.style.height = currSize + 'px'

    ball.textContent = currSize

    ball.style.backgroundColor = getRandomColor()
}