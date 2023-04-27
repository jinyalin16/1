input.onButtonPressed(Button.A, function () {
    뱀.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    뱀.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    뱀.change(LedSpriteProperty.X, 1)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    뱀.change(LedSpriteProperty.Y, -1)
})
let 뱀: game.LedSprite = null
뱀 = game.createSprite(2, 2)
led.setBrightness(128)
let 먹이 = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (뱀.isTouching(먹이)) {
        music.playTone(262, music.beat(BeatFraction.Half))
        game.addScore(1)
        먹이.delete()
        basic.pause(100)
        먹이 = game.createSprite(randint(0, 4), randint(0, 4))
        if (game.score() == 2) {
            for (let index = 0; index < 3; index++) {
                basic.showIcon(IconNames.Heart)
                basic.pause(500)
                basic.showIcon(IconNames.SmallHeart)
                music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.OnceInBackground)
            }
            game.gameOver()
        }
    }
})
