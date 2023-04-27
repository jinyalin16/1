input.onGesture(Gesture.TiltRight, function () {
    뱀.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    뱀.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.LogoDown, function () {
    뱀.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.LogoUp, function () {
    뱀.change(LedSpriteProperty.Y, 1)
})
let 뱀: game.LedSprite = null
뱀 = game.createSprite(2, 2)
let 먹이 = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (뱀.isTouching(먹이)) {
        game.addScore(1)
        먹이.delete()
        basic.pause(100)
        먹이 = game.createSprite(randint(0, 4), randint(0, 4))
        if (game.score() == 5) {
            basic.showIcon(IconNames.Happy)
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
            game.gameOver()
        }
    }
})
