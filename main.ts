input.onButtonPressed(Button.A, function () {
    tall += 1
})
let tall = 0
basic.showNumber(tall)
basic.forever(function () {
    if (tall >= 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        tall += 1
        basic.pause(1)
    } else {
        basic.showNumber(tall)
    }
    // Vise en X først og så starte på nytt med neste klikk.
    if (tall >= 11) {
        tall = 0
    }
})
