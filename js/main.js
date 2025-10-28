'use strict'

function onBallBlick(elBall) {
    // var ball = document.querySelector('.ball1')
    var currSize = parseInt(elBall.style.width)

    if (isNaN(currSize)) currSize = 100
     var sizeChange = getRandomInt(20, 60)

    currSize += sizeChange
    if (currSize > 400) currSize = 100
    elBall.style.width = currSize + 'px'
    elBall.style.height = currSize + 'px'

    elBall.textContent = currSize

    elBall.style.backgroundColor = getRandomColor()
}