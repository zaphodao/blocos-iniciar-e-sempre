let inicio = 10
basic.showNumber(inicio)
basic.forever(function () {
    for (let index = 0; index < 10; index++) {
        inicio += -1
        basic.showNumber(inicio)
        basic.pause(5000)
        music.play(music.stringPlayable("A F G E F D E C ", 500), music.PlaybackMode.UntilDone)
    }
})
