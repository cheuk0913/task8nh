input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() == 0) {
        basic.showString("N")
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (input.compassHeading() == 90) {
        basic.showString("E")
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (input.compassHeading() == 180) {
        basic.showString("S")
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (input.compassHeading() == 270) {
        basic.showString("W")
        music.playMelody("C5 B A G F E D C ", 120)
    }
})
basic.forever(function () {
    basic.showString("" + (input.compassHeading()))
})
