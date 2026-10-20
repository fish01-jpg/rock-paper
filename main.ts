enum RadioMessage {
    message1 = 49434,
    haswon = 43936,
    paper = 2792,
    rock = 22024,
    scissors = 45135,
    isReady = 7521
}
radio.onReceivedNumber(function (receivedNumber) {
    if (input.buttonIsPressed(Button.AB)) {
        radio.setGroup(receivedNumber)
        radio_number = receivedNumber
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showNumber(receivedNumber)
        pair = 1
    }
})
radio.onReceivedMessage(RadioMessage.isReady, function () {
    isReady = 1
})
input.onButtonPressed(Button.A, function () {
    if (ready == 0) {
        if (hand == 1) {
            basic.showLeds(`
                . . # # #
                . # . . #
                # . . . #
                # # . # .
                . # # . .
                `)
            SetHand = 1
            ready = 1
            radio.sendMessage(RadioMessage.isReady)
            radio.sendMessage(RadioMessage.paper)
        }
        if (hand == 2) {
            basic.showLeds(`
                . # # . .
                . # # # .
                # # # # #
                # # # # #
                . # # # .
                `)
            SetHand = 2
            ready = 1
            radio.sendMessage(RadioMessage.rock)
            radio.sendMessage(RadioMessage.isReady)
        }
        if (hand == 3) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                # # . # #
                # # . # #
                `)
            SetHand = 3
            ready = 1
            radio.sendMessage(RadioMessage.scissors)
            radio.sendMessage(RadioMessage.isReady)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (pair == 0) {
        radio_number = randint(10, 60)
        radio.sendNumber(radio_number)
        pair = 1
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    if (ready == 1 && isReady == 1) {
        if (hand == 1) {
            if (hand2 == 1) {
                won = 3
            } else {
                if (hand2 == 2) {
                    won = 1
                } else {
                    if (hand2 == 3) {
                        won = 2
                    }
                }
            }
        } else if (hand == 2) {
            if (hand2 == 1) {
                won = 2
            } else {
                if (hand2 == 2) {
                    won = 3
                } else {
                    if (hand2 == 3) {
                        won = 1
                    }
                }
            }
        } else if (hand == 3) {
            if (hand2 == 1) {
                won = 1
            } else {
                if (hand2 == 2) {
                    won = 2
                } else {
                    if (hand2 == 3) {
                        won = 3
                    }
                }
            }
        }
    } else {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
	
})
radio.onReceivedMessage(RadioMessage.rock, function () {
    hand2 = 2
})
radio.onReceivedMessage(RadioMessage.paper, function () {
    hand2 = 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    hand += 1
    if (ready == 0) {
        if (hand == 1) {
            basic.showLeds(`
                . . # # #
                . # . . #
                # . . . #
                # # . # .
                . # # . .
                `)
        }
        if (hand == 2) {
            basic.showLeds(`
                . # # . .
                . # # # .
                # # # # #
                # # # # #
                . # # # .
                `)
        }
        if (hand == 3) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                # # . # #
                # # . # #
                `)
        }
    }
})
radio.onReceivedMessage(RadioMessage.scissors, function () {
    hand2 = 3
})
let hand2 = 0
let SetHand = 0
let hand = 0
let radio_number = 0
let ready = 0
let isReady = 0
let pair = 0
let won = 0
won = 10
pair = 0
isReady = 0
ready = 0
let hasDoneAnimation = 0
radio.setGroup(2)
basic.forever(function () {
    if (isReady == 1 && hasDoneAnimation == 0) {
        for (let index = 0; index < 1; index++) {
            basic.showArrow(ArrowNames.North)
            basic.showArrow(ArrowNames.NorthEast)
            basic.showArrow(ArrowNames.East)
            basic.showArrow(ArrowNames.SouthEast)
            basic.showArrow(ArrowNames.South)
            basic.showArrow(ArrowNames.SouthWest)
            basic.showArrow(ArrowNames.West)
            basic.showArrow(ArrowNames.NorthWest)
            basic.showArrow(ArrowNames.North)
            hasDoneAnimation = 1
        }
    }
})
basic.forever(function () {
    radio.setGroup(radio_number)
})
basic.forever(function () {
    if (hand > 3) {
        hand = 0
    }
})
