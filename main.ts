radio.onReceivedNumber(function (receivedNumber) {
    v_data = receivedNumber
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendNumber(0)
    basic.showIcon(IconNames.Yes)
})
let v_data = 0
radio.setGroup(1)
basic.forever(function () {
	
})
