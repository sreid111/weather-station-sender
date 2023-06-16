let wind = 0
let temp = 0
radio.setGroup(11)
basic.showLeds(`
    . . # . .
    . . . . .
    # . # . #
    . . . . .
    . . # . .
    `)
basic.forever(function () {
    temp = input.temperature()
    wind = input.acceleration(Dimension.Z)
    radio.sendValue("temp", temp)
    radio.sendValue("wind", wind)
})
